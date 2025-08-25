"use client";

import { signInWithRedirect } from "aws-amplify/auth";

export default function ConnectionButton({ label }: { label: string }) {
  const handleSignIn = () => {
    signInWithRedirect();
  };

  return (
    <button
      type="button"
      onClick={handleSignIn}
      className="head-link connection-btn"
    >
      <span className="nav-link">{label}</span>
    </button>
  );
}
