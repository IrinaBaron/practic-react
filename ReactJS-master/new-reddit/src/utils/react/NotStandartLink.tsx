import React from "react";
import { ProgressPlugin } from "webpack";
import { preventDefault } from "./preventDefault";
import { stopPropagation } from "./stopPropagation";

function NotStandartLink(props: any) {
  const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    e.preventDefault();
    // ProgressPlugin.onClick();
  };
  return (
    <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>
  );
}
