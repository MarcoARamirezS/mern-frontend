import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [{id: 'u1', name: 'Max Schwarz', image: 'https://m.media-amazon.com/images/S/amzn-author-media-prod/ioris35cjq810ur5sq4degpj7h.jpg', places: 3 }]
  return <UsersList items={USERS} />
}

export default Users;