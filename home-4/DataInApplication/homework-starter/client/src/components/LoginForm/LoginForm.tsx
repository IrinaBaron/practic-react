import "./LoginForm.css";
import { FormField } from "../FormField";
import { Button } from "../Button";
import { FormEventHandler, useState, FC } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/User";
import { queryClient } from "../../api/queryClient";

export const LoginForm: FC = () => {
  const [userEmail, setUseremail] = useState('');
  const [password, setPassword] = useState('');

  const loginMutation = useMutation({
    mutationFn: () => login(userEmail, password),
    }, 
    queryClient
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    loginMutation.mutate();
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <FormField label="Email">
        <input type="email" name="useremail" value={userEmail} onChange={(event) => setUseremail(event.target.value)} />
      </FormField>
      <FormField label="Пароль">
        <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </FormField>
      {loginMutation.error &&
        ( <span>{loginMutation.error.message}</span>)
      }
      <Button type="submit" title="Login" isLoading={loginMutation.isPending}>Login</Button>
    </form>
  );
};
