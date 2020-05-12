import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "./axiosWithAuth";
import Delete from "./Delete";
import AddFriendForm from "./AddFriendForm";


function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => setFriends(res.data))
      .catch(err => alert("Error getting list! \n" + err));
  }, []);

  function getData() {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => setFriends(res.data))
      .catch(err => alert("Error getting list! \n" + err));
  }

  function addFriend(friend) {
    axiosWithAuth()
      .post("/api/friends", friend)
      .then(res => {
        getData();
        console.log(res);
      });
  }

  return (
    <div>
      <h1>Say Hi to all of your Friends!</h1>
      <div className="friends">
        {friends.map(friend => {
          return <Delete key={friend.id} friend={friend} />;
        })}
      </div>
      <AddFriendForm addFriend={addFriend} />
    </div>
  );
}

export default Friends; 