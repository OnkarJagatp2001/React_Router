import React from "react";
import { useParams } from "react-router-dom";
export default function UserDetails() {
  const {userId} = useParams();
  return <div>Details about user id = {userId}</div>;
}
