import { FormField } from "../FormField";
import { Button } from "../Button";
import "./RegisterForm.css";
import { FormEventHandler, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../api/User";
import { queryClient } from "../../api/queryClient";

export const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const registrationMutation = useMutation(
    {
      mutationFn: () => registerUser(username, email, password),
    }, 
    queryClient
  )

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    registrationMutation.mutate()
  }
  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <FormField label="Имя">
        <input type="text" name="username" value={username} onChange={(event) => setUsername(event.target.value)} />
      </FormField>
      <FormField label="Email">
        <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
      </FormField>
      <FormField label="Пароль">
        <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </FormField>
      {registrationMutation.error &&
        ( <span>{registrationMutation.error.message}</span>)
      }
      <Button type="submit"  title="registration" isLoading={registrationMutation.isPending}>Registration</Button>
    </form>
  );
};
