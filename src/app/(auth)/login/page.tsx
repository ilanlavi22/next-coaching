'use client';

interface Data {
  email: string;
  password: string;
}

interface FormElements extends HTMLFormControlsCollection {
  usernameInput: HTMLInputElement;
}
interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

import AuthForm from '../AuthForm';

export default function Login() {
  const handleSubmit = (
    e: React.FormEvent<UsernameFormElement>,
    email: Data,
    password: Data
  ) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div>
      <h1>Login</h1>
      <AuthForm handleSubmit={handleSubmit} />
    </div>
  );
}
