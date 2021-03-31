import React from "react";
import Child from "../Child/Child";

const Parent = (props) => {
  const message = ["1", "2", "3", "4", "5"];
  const onIndexHandler = (data) => {
    console.log(data);
  }
  return (
    <div className="Parent">
        <h2>Parent and Child components</h2>
      <Child data={message} onclick={onIndexHandler} />
    </div>
  );
};

export default Parent;
