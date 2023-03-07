import React, { useEffect, useRef } from "react";
import robot from "../assets/robot.png";
import { useBoard } from "../context/BoardContext";

type CellProps = {
  x: number;
  y: number;
};

const Cell = ({ x, y }: CellProps) => {
  const ref = useRef<HTMLImageElement>(null);

  const {
    state: { x: actualX, y: actualY, facing },
  } = useBoard();

  const isRobot = x === actualX && y === actualY;

  useEffect(() => {
    if (!ref || !ref.current) return;

    ref.current.style.transform = `rotate(${facing}deg)`;
  }, [facing, actualX, actualY]);

  return (
    <div className="cell">
      {isRobot && <img ref={ref} width={"100px"} src={robot} alt="Robot" />}
    </div>
  );
};

export default Cell;
