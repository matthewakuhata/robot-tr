import React from "react";
import Cell from "./Cell";

type RowProps = { y: number; cols: number };

const Row = ({ y, cols }: RowProps) => {
  return (
    <div className="row">
      {Array.from(Array(cols).keys()).map((x) => (
        <Cell key={`cell${x}${y}`} x={x} y={y} />
      ))}
    </div>
  );
};

export default Row;
