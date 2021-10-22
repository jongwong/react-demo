import React from "react";
import "./index.scss";
const PageA: React.FC<any> = () => {
  const a = "a";
  const b = (e) => {};
  console.log(a);
  console.log(b);
  return (
    <div className={"test"}>
      <span>PageA===33==</span>
    </div>
  );
};

export default PageA;
