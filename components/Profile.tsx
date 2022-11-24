import React, { useState } from "react";
import { useScores, useUniformContext } from "@uniformdev/context-react";
import { useCookies } from "react-cookie";
import Traits from "./Traits";

const Profile = () => {
  let scores = useScores();
  const { context } = useUniformContext();
  const [cookies] = useCookies();

  const friendlyScores = Object.keys(scores).map((k) => {
    let persona = "Unknown";
    if (k === "p_d") {
      persona = "Developer";
    } else if (k === "p_m") {
      persona = "Marketer";
    }
    return { name: persona, score: scores[k] };
  });

  return (
    <div>
      <h2>Current visitor scores from Uniform Tracker:</h2>
      <div>{JSON.stringify(friendlyScores)}</div>
      <h2>Segment User Id:</h2>
      <div> {JSON.stringify(cookies["ajs_anonymous_id"])}</div>
      <h2>Segment Anonymous User Id:</h2>
      <div> {JSON.stringify(cookies["ajs_user_id"])}</div>
      <Traits />
    </div>
  );
};

export default Profile;
