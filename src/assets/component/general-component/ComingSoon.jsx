import React from "react";
import { FaRegClock } from "react-icons/fa";

const ComingSoon = () => {
  return (
    <div style={{
      minHeight: "70vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center", 
      background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
      padding: "2rem 1rem"
    }}>
      <div style={{
        background: "#fff",
        borderRadius: "1.5rem",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        padding: "2.5rem 2rem",
        maxWidth: 420,
        textAlign: "center"
      }}>
        <FaRegClock size={48} color="#3b82f6" style={{ marginBottom: 16 }} />
        <h1 style={{
          fontSize: "2.2rem",
          fontWeight: 700,
          margin: "0 0 1rem 0",
          color: "#1e293b"
        }}>
          Coming Soon
        </h1>
        <p style={{
          fontSize: "1.1rem",
          color: "#475569",
          marginBottom: 24
        }}>
          We're working hard to bring you this feature. Stay tuned for updates and exciting new capabilities. Thank you for your patience and interest in Fashion Pilot!
        </p>
        <div style={{
          fontSize: "0.98rem",
          color: "#64748b",
          marginTop: 8
        }}>
          — The Fashion Pilot Team
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
