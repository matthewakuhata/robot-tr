import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Row from "./Row";
import { useBoard } from "../context/BoardContext";
import { getDirection } from "../context/utils/getDirection";

import "react-toastify/dist/ReactToastify.css";
import "./Board.css";

const Board = () => {
  const { state, dispatch } = useBoard();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const { key } = event;

      if (key === "ArrowRight") {
        dispatch({ type: "rotate", direction: "right" });
      } else if (key === "ArrowLeft") {
        dispatch({ type: "rotate", direction: "left" });
      } else if (key === "ArrowUp") {
        dispatch({ type: "move" });
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [dispatch]);

  const rows = Array.from(Array(state.maxRows).keys()).reverse();

  const handleShowReport = () => {
    const { x, y, facing } = state;

    toast(`Robot is at (${x}, ${y}) facing ${getDirection(facing)}`);
  };

  return (
    <div className="board">
      {rows.map((y) => (
        <Row y={y} cols={state.maxColumns} key={`row${y}`} />
      ))}
      <button onClick={handleShowReport}>Report</button>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Board;
