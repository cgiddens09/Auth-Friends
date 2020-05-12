import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

function Delete(props) {
  const [friend, setFriend] = useState({});

  useEffect(() => {
    setFriend(props.friend);
  }, [props.friend]);

  function deleteFriend() {
    axiosWithAuth()
      .delete(`/api/friends/${friend.id}`)
      .then(res => {
        alert("You lost a friend");
        console.log("deleted", res);
      })
      .catch(err => console.log("error deleting friend", err))
      .finally(() => window.location.reload());
  }

  return (
    <div className="friend">
      <h1>{friend.name}</h1>
      <p>Email: {friend.email}</p>
      <p>Age: {props.friend.age}</p>
      <button className="button" onClick={deleteFriend}>Block</button>
    </div>
  );
}

export default Delete; 