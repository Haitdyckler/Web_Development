// src/components/ui/Toast.jsx
export default function Toast({ message, show }) {
  return (
    <div className={`zd-toast${show ? " show" : ""}`}>
      {message}
    </div>
  );
}
