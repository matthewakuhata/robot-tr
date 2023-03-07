import { createContext, useContext, useReducer } from "react";
import { BoardActions, moveReducer, rotateReducer } from "./reducers";

export type BoardState = {
  x: number;
  y: number;
  facing: number;
  maxRows: number;
  maxColumns: number;
  isValid: boolean;
};

interface IBoardContext {
  state: BoardState;
  dispatch: React.Dispatch<BoardActions>;
}
const BoardContext = createContext<IBoardContext | undefined>(undefined);

function boardReducer(state: BoardState, action: BoardActions) {
  switch (action.type) {
    case "move":
      return moveReducer(state);
    case "rotate":
      return rotateReducer(state, action);
    default:
      return state;
  }
}

const BoardProvider = ({
  rows,
  cols,
  children,
}: {
  rows: number;
  cols: number;
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(boardReducer, {
    x: 0,
    y: 0,
    facing: 0,
    maxRows: rows,
    maxColumns: cols,
    isValid: true,
  });

  const value = { state, dispatch };
  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
};

function useBoard() {
  const context = useContext(BoardContext);
  if (context === undefined) {
    throw new Error("useBoard must be used within a BoardProvider");
  }

  return context;
}

export { BoardProvider, useBoard };
