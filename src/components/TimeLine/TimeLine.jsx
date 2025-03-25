import React from "react";
import { Timeline } from "antd";

const TimeLine = () => (
  <Timeline
    mode="left"
    pending="Hoy"
    reverse
    items={[
      {
        label: "Hola",
        color: "green",
        children: "Create a services site 2015-09-01",
      },
      {
        color: "green",
        children: "Create a services site 2015-09-01",
      },
      {
        label: "Hola",
        color: "red",
        children: (
          <>
            <p>Solve initial network problems 1</p>
            <p>Solve initial network problems 2</p>
            <p>Solve initial network problems 3 2015-09-01</p>
          </>
        ),
      },
      {
        label: "Hola",
        children: (
          <>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </>
        ),
      },
    ]}
  />
);
export default TimeLine;
