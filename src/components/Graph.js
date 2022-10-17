import React from "react";
import { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Chart } from "react-charts";
import {FaCircle} from 'react-icons/fa'
// import { Link } from "react-router-dom";

function Graph() {
  const [dateType, setDateType] = useState("Day-Wise");
  const selectHandler = (e) => {
    setDateType(e);
  };
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [1, 0],
          [2, 2],
          [2, 4],
        ],
      },
      {
        label: "Series 2",
        data: [
          [2, 0],
          [2, 1],
          [1, 2],
        ],
      },
      {
        label: "Series 3",
        data: [
          [3, 0],
          [4, 2],
          [6, 3],
        ],
      },
    ],
    []
  );
  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );
  return (
    <div
      style={{
        width: "100%",
        border: "1px solid gray",
        padding: "10px",
        height: "85%",
        //   margin: "20px",
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h4 className="lead">Profile Views</h4>
          </div>
          <div className="col d-flex flex-row-reverse ">
            <Dropdown>
              <DropdownButton
                variant="secondary"
                id="dateType"
                title={dateType}
                onSelect={selectHandler}
              >
                <Dropdown.Item eventKey="Day-wise">Day-wise</Dropdown.Item>
                <Dropdown.Item eventKey="Week-wise">Week</Dropdown.Item>
                <Dropdown.Item eventKey="Monthly-wise">Month</Dropdown.Item>
                <Dropdown.Item eventKey="Yearly-wise">Year</Dropdown.Item>
              </DropdownButton>
            </Dropdown>
          </div>
        </div>
        <div
          style={{
            // textAlign: "center",
            width: "350px",
            height: "400px",
            padding: "2rem",
          }}
        >
          <Chart data={data} axes={axes} />
          <div className="mt-5">
            <p><FaCircle style={{color:"blue"}} />Blue</p>
            <p><FaCircle style={{color:"red"}} />Red</p>
            <p><FaCircle style={{color:"gold"}} />Yelow</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graph;
