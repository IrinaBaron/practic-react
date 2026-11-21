import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../api/queryClient";
import { logout } from "../../api/User";
import { Button } from "../Button";
import "./LogoutButton.css";

export const LogoutButton = () => {
  const logoutMutation = useMutation(
    {
      mutationFn: logout,      
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ["users", "me"] });
        queryClient.removeQueries({ queryKey: ["notes"] });
      },
    }, 
    queryClient
  );
  return (
    <div className="logout-button">
      <Button kind="secondary" onClick={() => logoutMutation.mutate()} isLoading={logoutMutation.isPending}>Выйти</Button>
    </div>
  );
};
