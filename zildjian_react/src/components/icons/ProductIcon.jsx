// src/components/icons/ProductIcon.jsx
export default function ProductIcon({ type }) {
  switch (type) {
    case "cymbal2":
      return (
        <svg width="110" height="110" viewBox="0 0 19 12" fill="none" style={{ opacity: 0.4 }}>
          <ellipse cx="9.5" cy="8" rx="9" ry="3.5" stroke="#666" strokeWidth="1.2" />
          <ellipse cx="9.5" cy="4" rx="9" ry="3.5" stroke="#666" strokeWidth="1.2" />
        </svg>
      );
    case "headphone":
      return (
        <svg width="90" height="90" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.35, stroke: "#555", strokeWidth: 1.3 }}>
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      );
    case "hihat":
      return (
        <svg width="110" height="110" viewBox="0 0 19 12" fill="none" style={{ opacity: 0.4 }}>
          <ellipse cx="9.5" cy="6" rx="9" ry="3" stroke="#666" strokeWidth="1.2" />
          <ellipse cx="9.5" cy="3" rx="9" ry="3" stroke="#666" strokeWidth="1.2" />
        </svg>
      );
    case "shirt":
      return (
        <svg width="70" height="70" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.4, stroke: "#555", strokeWidth: 1.5 }}>
          <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
        </svg>
      );
    case "sticks":
      return (
        <div style={{ display: "flex", gap: 5, opacity: 0.5 }}>
          <div style={{ width: 9, height: 80, background: "#8a6a30", borderRadius: "4px 4px 2px 2px", transform: "rotate(-4deg)" }} />
          <div style={{ width: 9, height: 80, background: "#a07a38", borderRadius: "4px 4px 2px 2px" }} />
        </div>
      );
    case "crash":
      return (
        <svg width="120" height="80" viewBox="0 0 19 12" fill="none" style={{ opacity: 0.4 }}>
          <ellipse cx="9.5" cy="6" rx="9" ry="3.5" stroke="#666" strokeWidth="1.2" />
        </svg>
      );
    case "stack":
      return (
        <div style={{ position: "relative", width: 90, height: 90, opacity: 0.45 }}>
          <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "3px solid #888" }} />
          <div style={{ position: "absolute", top: 9, left: 9, right: 9, bottom: 9, borderRadius: "50%", border: "2px solid #aaa" }} />
          <div style={{ position: "absolute", top: 20, left: 20, right: 20, bottom: 20, borderRadius: "50%", border: "1.5px solid #bbb" }} />
        </div>
      );
    case "ride":
      return (
        <svg width="110" height="110" viewBox="0 0 19 12" fill="none" style={{ opacity: 0.4 }}>
          <ellipse cx="9.5" cy="7" rx="9" ry="4" stroke="#666" strokeWidth="1.2" />
          <circle cx="9.5" cy="4" r="2" stroke="#666" strokeWidth="1.2" />
        </svg>
      );
    default:
      return null;
  }
}
