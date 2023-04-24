import React from "react";
import { useParams } from "react-router-dom";

function CareerPage() {
  const careerChoice = useParams();

  return <div>{careerChoice.career}</div>;
}

export default CareerPage;
