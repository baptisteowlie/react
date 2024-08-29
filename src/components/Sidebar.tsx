import AddItemForm from "./AddItemForm";
import Button from "./Button";

import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function Sidebar() {
  const { login, register, isAuthenticated, isLoading, user } = useKindeAuth();
  console.log("isAuthenticated:", isAuthenticated);
  console.log("user:", user);
  return (
    <section className="flex flex-col justify-between p-2 col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08]">
      <AddItemForm />
      <div className="space-y-2">
        {isLoading ? null : isAuthenticated ? (
          <p className="flex justify-center">Logged as {user?.email}</p>
        ) : (
          <>
            <Button onClick={register}>Log in</Button>
            <Button onClick={login}>Register</Button>
          </>
        )}
      </div>
    </section>
  );
}
