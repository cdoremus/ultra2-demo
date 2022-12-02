import { Suspense } from "react";
import UserList from "../components/UserList.tsx";
import { tw } from "../twind/twind.ts";

export default function HomePage() {
  return (
    <div>
      <h2 className={tw(`text-3xl font-bold`)}>Users</h2>
      <Suspense fallback={<div>Page is Loading...</div>}>
        <UserList />
      </Suspense>
    </div>
  );
}
