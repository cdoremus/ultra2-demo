import { useCallback, useEffect } from "react";
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
    useAsync(() => fetchUser(userId), {returnCallback: true}),
    // same result as useAsync line:
    // () => fetchUser(userId)
  );
  const user = data as UserType;
  // console.log("User Details ", user);

  if (isLoading) {
    return (<div>Loading USER...</div>)
  }

  if (isError) {
    return <div>Error for user {userId}: {error as string}</div>
  }

  const address = `${user.address.street} ${user.address.suite}, ${user.address.city} ${user.address.zipcode}`;
  return (

    <div>
      <h2 className={tw(`text-xl font-bold pb-4`)}>User Details for {user.name}</h2>
      <div className={tw(`grid grid-cols-2 gap-2`)}>
          <div className={tw(`text-right`)}>User Id: </div><div className={tw(`text-left`)}>{user.id}</div>
          <div className={tw(`text-right`)}>User name: </div><div className={tw(`text-left`)}>{user.name}</div>
          <div className={tw(`text-right`)}>Email address: </div><div className={tw(`text-left`)}>{user.email}</div>
          <div className={tw(`text-right`)}>Address: </div><div className={tw(`text-left`)}>{address}</div>
          <div className={tw(`text-right`)}>Phone: </div><div className={tw(`text-left`)}>{user.phone}</div>
          <div className={tw(`text-right`)}>Company: </div><div className={tw(`text-left`)}>{user.company.name}</div>
      </div>
    </div>

  );
}