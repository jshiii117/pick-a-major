import React from "react";
import { useParams } from "react-router-dom";

function MajorPage() {
  const majorChoice = useParams();

  return <div>{majorChoice.major}</div>;
}

export default MajorPage;
