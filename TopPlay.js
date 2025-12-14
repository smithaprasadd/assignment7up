import React from "react";
import { useSelector } from "react-redux";

export default function TopPlay() {
  const active = useSelector((s) => s.player.activeSong);

  return (
    <div>
      <div>Now Playing:</div>
      <strong>{active ? active.title : "Nothing"}</strong>
    </div>
  );
}
