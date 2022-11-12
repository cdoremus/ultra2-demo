import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useAsync from "ultra/hooks/use-async.js";
import { useParams } from "react-router-dom";
import User, { UserType } from "../components/User.tsx";
import { tw } from "twind";

function fetchUser(id: number): Promise<UserType> {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  // console.log("URL: ", url);
  return fetch(url).then((response) => response.json());
}

type UserDetailsProps = {
  userId: number;
}

export default function UserDetails({userId}: UserDetailsProps) {
  console.log("userId: ", userId)
  const {data, isLoading, isError, error} = useQuery(
    ["user", { id: userId }],
    // () => fetchUser(userId)
    useAsync(() => fetchUser(userId)),
  );
  const user = data as UserType;
  // console.log("User Details ", user);

  if (isLoading) {
    return (<div>Loading USER...</div>)
  }

  if (isError) {
    return <div>Error for user {userId}: {error as string}</div>
  }

  return (

    <div>
      <h2>User Details for {user.name}</h2>
      {<User user={user} />}
    </div>

  );
}