
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5000/api";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [reservations, setReservations] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [updatingId, setUpdatingId] = useState("");

  // Email reply states
  const [replyId, setReplyId] = useState("");
  const [replySubject, setReplySubject] = useState("");
  const [replyMessage, setReplyMessage] = useState("");
  const [sendingReply, setSendingReply] = useState(false);

  const admin = JSON.parse(
    sessionStorage.getItem("adminDetails") || "{}"
  );

  useEffect(() => {
    const token = sessionStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin/login", { replace: true });
      return;
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const loadDashboard = async () => {
      try {
        const [reservationRes, contactRes] = await Promise.all([
          axios.get(`${API}/reservations`, config),
          axios.get(`${API}/contact`, config),
        ]);

        setReservations(reservationRes.data.data || []);
        setContacts(contactRes.data.data || []);
      } catch (err) {
        setError(
          err.response?.status === 401 || err.response?.status === 403
            ? "Session expired. Please log in again."
            : "Unable to load dashboard data."
        );
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, [navigate]);

  // Update reservation status
  const updateReservationStatus = async (id, status) => {
    const token = sessionStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin/login", { replace: true });
      return;
    }

    setUpdatingId(id);
    setError("");
    setSuccess("");

    try {
      const response = await axios.patch(
        `${API}/reservations/${id}/status`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const updatedReservation = response.data.data;

      setReservations((previous) =>
        previous.map((reservation) =>
          reservation._id === id
            ? { ...reservation, ...updatedReservation }
            : reservation
        )
      );

      setSuccess(
        `Booking for ${updatedReservation.name} ${status.toLowerCase()} successfully.`
      );
    } catch (err) {
      if (
        err.response?.status === 401 ||
        err.response?.status === 403
      ) {
        setError("Session expired. Please log in again.");
        sessionStorage.removeItem("adminToken");
        sessionStorage.removeItem("adminDetails");
        navigate("/admin/login", { replace: true });
      } else {
        setError(
          err.response?.data?.message ||
            "Unable to update reservation status."
        );
      }
    } finally {
      setUpdatingId("");
    }
  };

  // Send email reply to customer
  const sendReply = async (contactId) => {
    const token = sessionStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin/login", { replace: true });
      return;
    }

    if (!replySubject.trim() || !replyMessage.trim()) {
      setError("Please enter the reply subject and message.");
      return;
    }

    setSendingReply(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        `${API}/contact/${contactId}/reply`,
        {
          subject: replySubject.trim(),
          message: replyMessage.trim(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setContacts((previous) =>
        previous.map((contact) =>
          contact._id === contactId
            ? {
                ...contact,
                status: response.data.data.status,
              }
            : contact
        )
      );

      setSuccess("Reply email sent successfully!");
      setReplyId("");
      setReplySubject("");
      setReplyMessage("");
    } catch (err) {
      if (
        err.response?.status === 401 ||
        err.response?.status === 403
      ) {
        setError("Session expired. Please log in again.");
        sessionStorage.removeItem("adminToken");
        sessionStorage.removeItem("adminDetails");
        navigate("/admin/login", { replace: true });
      } else {
        setError(
          err.response?.data?.message ||
            "Failed to send reply email."
        );
      }
    } finally {
      setSendingReply(false);
    }
  };

  const logout = () => {
    sessionStorage.removeItem("adminToken");
    sessionStorage.removeItem("adminDetails");
    navigate("/admin/login", { replace: true });
  };

  const cardStyle = {
    background: "#FFFFFF",
    padding: 22,
    borderRadius: 14,
    border: "1px solid #E7D7C8",
    boxShadow: "0 6px 20px rgba(59,16,24,0.06)",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: 24,
        boxSizing: "border-box",
        background: "#FFF8EE",
        color: "#3B1018",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
          borderBottom: "1px solid #E7D7C8",
          paddingBottom: 20,
        }}
      >
        <div>
          <p style={{ color: "#8B2635", letterSpacing: 2 }}>
            MADURAI BASHA
          </p>
          <h1>Admin Dashboard</h1>
          <p>Welcome, {admin.name || "Restaurant Admin"}</p>
        </div>

        <button
          onClick={logout}
          style={{
            background: "#701F2D",
            color: "#FFFFFF",
            border: 0,
            borderRadius: 8,
            padding: "12px 20px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </header>

      {error && (
        <p
          role="alert"
          style={{
            color: "#B42318",
            background: "#FEECEB",
            padding: 12,
            borderRadius: 8,
          }}
        >
          {error}
        </p>
      )}

      {success && (
        <p
          role="status"
          style={{
            color: "#176B3A",
            background: "#E8F7ED",
            padding: 12,
            borderRadius: 8,
          }}
        >
          {success}
        </p>
      )}

      {loading ? (
        <p>Loading dashboard...</p>
      ) : (
        <>
          {/* Dashboard summary cards */}
          <section
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 18,
              margin: "28px 0",
            }}
          >
            <div style={cardStyle}>
              <p>Total Reservations</p>
              <h2>{reservations.length}</h2>
            </div>

            <div style={cardStyle}>
              <p>Pending Reservations</p>
              <h2>
                {
                  reservations.filter(
                    (r) => r.status === "Pending"
                  ).length
                }
              </h2>
            </div>

            <div style={cardStyle}>
              <p>Contact Messages</p>
              <h2>{contacts.length}</h2>
            </div>

            <div style={cardStyle}>
              <p>New Messages</p>
              <h2>
                {
                  contacts.filter((c) => c.status === "New")
                    .length
                }
              </h2>
            </div>
          </section>

          {/* Table reservations */}
          <section
            style={{
              ...cardStyle,
              marginBottom: 24,
              overflowX: "auto",
            }}
          >
            <h2>Table Reservations</h2>

            {reservations.length === 0 ? (
              <p>No reservations found.</p>
            ) : (
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={cellStyle}>Customer</th>
                    <th style={cellStyle}>Email</th>
                    <th style={cellStyle}>Date</th>
                    <th style={cellStyle}>Time</th>
                    <th style={cellStyle}>Guests</th>
                    <th style={cellStyle}>Occasion</th>
                    <th style={cellStyle}>Status</th>
                    <th style={cellStyle}>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {reservations.map((r) => (
                    <tr key={r._id}>
                      <td style={cellStyle}>{r.name}</td>
                      <td style={cellStyle}>{r.email}</td>
                      <td style={cellStyle}>{r.date}</td>
                      <td style={cellStyle}>{r.time}</td>
                      <td style={cellStyle}>{r.guests}</td>
                      <td style={cellStyle}>
                        {r.occasion || "—"}
                      </td>

                      <td style={cellStyle}>
                        <span
                          style={{
                            display: "inline-block",
                            padding: "5px 9px",
                            borderRadius: 20,
                            fontSize: 12,
                            fontWeight: 600,
                            background:
                              r.status === "Confirmed"
                                ? "#E3F6E8"
                                : r.status === "Cancelled"
                                  ? "#FDE8E7"
                                  : "#FFF0D5",
                            color:
                              r.status === "Confirmed"
                                ? "#176B3A"
                                : r.status === "Cancelled"
                                  ? "#B42318"
                                  : "#8A5700",
                          }}
                        >
                          {r.status}
                        </span>
                      </td>

                      <td style={cellStyle}>
                        {r.status === "Pending" ? (
                          <>
                            <button
                              type="button"
                              disabled={updatingId === r._id}
                              onClick={() =>
                                updateReservationStatus(
                                  r._id,
                                  "Confirmed"
                                )
                              }
                              style={{
                                ...actionButtonStyle,
                                background: "#247A45",
                                opacity:
                                  updatingId === r._id ? 0.6 : 1,
                              }}
                            >
                              {updatingId === r._id
                                ? "Updating..."
                                : "Confirm"}
                            </button>

                            <button
                              type="button"
                              disabled={updatingId === r._id}
                              onClick={() =>
                                updateReservationStatus(
                                  r._id,
                                  "Cancelled"
                                )
                              }
                              style={{
                                ...actionButtonStyle,
                                background: "#B42318",
                                opacity:
                                  updatingId === r._id ? 0.6 : 1,
                              }}
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <span style={{ color: "#777" }}>
                            No actions
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>

          {/* Customer contact messages and email replies */}
          <section
            style={{ ...cardStyle, overflowX: "auto" }}
          >
            <h2>Customer Contact Messages</h2>

            {contacts.length === 0 ? (
              <p>No contact messages found.</p>
            ) : (
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={cellStyle}>Name</th>
                    <th style={cellStyle}>Email</th>
                    <th style={cellStyle}>Subject</th>
                    <th style={cellStyle}>Message</th>
                    <th style={cellStyle}>Status</th>
                    <th style={cellStyle}>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {contacts.map((c) => (
                    <tr key={c._id}>
                      <td style={cellStyle}>{c.name}</td>
                      <td style={cellStyle}>{c.email}</td>
                      <td style={cellStyle}>{c.subject}</td>
                      <td style={cellStyle}>{c.message}</td>
                      <td style={cellStyle}>{c.status}</td>

                      <td style={cellStyle}>
                        {c.status !== "Replied" ? (
                          <button
                            type="button"
                            onClick={() => {
                              setReplyId(
                                replyId === c._id ? "" : c._id
                              );
                              setReplySubject(`Re: ${c.subject}`);
                              setReplyMessage("");
                              setError("");
                              setSuccess("");
                            }}
                            style={{
                              ...actionButtonStyle,
                              background: "#701F2D",
                            }}
                          >
                            {replyId === c._id ? "Close" : "Reply"}
                          </button>
                        ) : (
                          <span
                            style={{
                              color: "#247A45",
                              fontWeight: 600,
                            }}
                          >
                            Replied
                          </span>
                        )}

                        {replyId === c._id && (
                          <div
                            style={{
                              minWidth: 240,
                              maxWidth: 340,
                              marginTop: 12,
                            }}
                          >
                            <p
                              style={{
                                fontSize: 13,
                                color: "#6B4B4B",
                              }}
                            >
                              To: {c.email}
                            </p>

                            <input
                              type="text"
                              aria-label="Reply subject"
                              value={replySubject}
                              onChange={(e) =>
                                setReplySubject(e.target.value)
                              }
                              placeholder="Email subject"
                              maxLength={150}
                              style={replyInputStyle}
                            />

                            <textarea
                              aria-label="Reply message"
                              value={replyMessage}
                              onChange={(e) =>
                                setReplyMessage(e.target.value)
                              }
                              placeholder="Type your reply..."
                              maxLength={2000}
                              rows={5}
                              style={{
                                ...replyInputStyle,
                                resize: "vertical",
                              }}
                            />

                            <button
                              type="button"
                              disabled={sendingReply}
                              onClick={() => sendReply(c._id)}
                              style={{
                                ...actionButtonStyle,
                                background: "#247A45",
                                opacity: sendingReply ? 0.6 : 1,
                              }}
                            >
                              {sendingReply
                                ? "Sending..."
                                : "Send Email"}
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>
        </>
      )}
    </main>
  );
}

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  textAlign: "left",
  minWidth: 850,
};

const cellStyle = {
  padding: 12,
  borderBottom: "1px solid #E7D7C8",
  verticalAlign: "top",
};

const actionButtonStyle = {
  border: 0,
  borderRadius: 6,
  padding: "8px 11px",
  color: "#FFFFFF",
  cursor: "pointer",
  fontSize: 12,
  fontWeight: 600,
  margin: 3,
};

const replyInputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: 10,
  marginBottom: 8,
  border: "1px solid #D8B9A5",
  borderRadius: 6,
  fontFamily: "Arial, sans-serif",
};
