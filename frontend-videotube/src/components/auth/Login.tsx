import React, { useState } from "react";
import type { LoginPayload } from "../../types/auth.types";

const LoginForm: React.FC = () => {
  const [form, setForm] = useState<LoginPayload>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        type="username"
        value={form.username}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
