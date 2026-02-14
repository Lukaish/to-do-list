"use client";
import { useState } from "react";
import { useFormStatus } from "react-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { pending } = useFormStatus();

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    alert(`Email: ${email} | Senha: ${password}`);
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-72 place-self-center mt-60"
        >
          <h1 className="place-self-center text-4xl font-bold mb-2 text-blue-600">
            Login
          </h1>

          <input
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            name="emailInput"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            name="passwordInput"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            disabled={pending}
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {pending ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}
