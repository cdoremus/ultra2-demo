import { Suspense } from "react";
import { useParams } from "react-router-dom";
import UserDetails from "../components/UserDetails.tsx";

export default function UserDetailsPage() {
  const { userId } = useParams();
  const id = userId || "0";

  return (
    <div>
      <Suspense fallback={<div>Loading user...</div>}>
        <UserDetails userId={parseInt(id)}/>
      </Suspense>
    </div>
  );
}