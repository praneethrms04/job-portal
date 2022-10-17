import React from "react";
import { Chrono } from "react-chrono";

const AppicationStatus = () => {
  const items = [
    {
      title: "Application",
      cardTitle: "Thank you for Your Application",
      cardSubtitle: "We have Received your Application successfully...!",
      cardDetailedText:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius illo ea placeat cumque assumenda et iste quae. Praesentium quisquam quis error officia quasi corporis illum expedita, incidunt minus architecto soluta",
    },
    {
      title: "Application",
      cardTitle: "Resume-downloaded",
      cardSubtitle: "You are Resume downloaded...!",
      cardDetailedText:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius illo ea placeat cumque assumenda et iste quae. Praesentium quisquam quis error officia quasi corporis illum expedita, incidunt minus architecto soluta",
    },
    {
      title: "Application",
      cardTitle: "ROUND-1",
      cardSubtitle: "Assignment",
      cardDetailedText:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius illo ea placeat cumque assumenda et iste quae. Praesentium quisquam quis error officia quasi corporis illum expedita, incidunt minus architecto soluta",
    },
    {
      title: "Application",
      cardTitle: "ROUND-2",
      cardSubtitle: "Tecnical Interview",
      cardDetailedText:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius illo ea placeat cumque assumenda et iste quae. Praesentium quisquam quis error officia quasi corporis illum expedita, incidunt minus architecto soluta",
    },
    {
      title: "Application",
      cardTitle: "ROUND-3",
      cardSubtitle: "HR Interview",
      cardDetailedText:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius illo ea placeat cumque assumenda et iste quae. Praesentium quisquam quis error officia quasi corporis illum expedita, incidunt minus architecto soluta",
    },
    {
      title: "Application",
      cardTitle: "Congratulations....!",
      cardSubtitle: "You have been selected for this job.",
      cardDetailedText:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius illo ea placeat cumque assumenda et iste quae. Praesentium quisquam quis error officia quasi corporis illum expedita, incidunt minus architecto soluta",
    },
  ];
  return (
    <>
    
    <div >
      <div  className="mt-4">
        <h2 className="text-center text-success">Application TimeLime</h2>
      </div>
      <div style={{ width: "100%", height: "100%", paddingTop: "2rem" }}>
        <Chrono items={items} />
      </div>
      </div>
    </>
  );
};

export default AppicationStatus;
