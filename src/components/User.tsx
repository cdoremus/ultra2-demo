import { Link } from "react-router-dom";
import { tw } from "twind";

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {lat: number, long: number}
  };
  phone: string
  website: string
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
};

type UserProps = {
  user: UserType;
}

export default function User({user}: UserProps) {
  return (
    <div key={user.id} className={tw`p-5`}>
      <div><Link to={`/user_details/${user.id}`}>{user.name} ({user.email})</Link></div>
    </div>
  );
}
