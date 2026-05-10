// src/components/sections/Newsletter.jsx
import { useState } from "react";

export default function Newsletter({ onToast }) {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      onToast("Please enter a valid email.");
      return;
    }
    onToast("Thanks for joining the Z Club!");
    setEmail("");
  };

  return (
    <section className="zd-newsletter">
      <div className="zd-newsletter-inner">
        <img src="assets/zd-club_1.png" alt="ZD Club" />
        <p>
          Get exclusive access to Zildjian content, inside info on new products, news, your favorite Zildjian artists, and more.
        </p>
        <button className="zd-subscribe-btn" onClick={handleSubscribe}>
          Join Now
        </button>
      </div>
    </section>
  );
}
