import useAsync from "ultra/hooks/use-async.js";
import { useQuery } from "@tanstack/react-query";
import User, {UserType} from "./User.tsx";

function fetchUsers(): Promise<UserType[]> {
  return fetch(
    `https://jsonplaceholder.typicode.com/users`,
  ).then((response) => response.json());
}

export default function UserList() {
  const { data, isLoading, isError, error } = useQuery(
    ["users"],
    useAsync(() => fetchUsers())
  );
  const users = data as UserType[];
  // console.log("Users", users);
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error: {error as string}</div>
  }
  return (
    <div>
      {
        users.map((user: UserType) => <User user={user}/>)
      }
    </div>
  );
}