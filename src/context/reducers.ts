import { BoardState } from "./BoardContext";
import { getDirection } from "./utils/getDirection";

type BoardMoveAction = {
  type: "move";
};

export function moveReducer(state: BoardState): BoardState {
  const { x, y, facing } = state;
  let newX = x;
  let newY = y;

  const direction = getDirection(facing);
  switch (direction) {
    case "East":
      newX++;
      break;
    case "South":
      newY--;
      break;
    case "West":
      newX--;
      break;
    case "North":
      newY++;
      break;
    default:
      break;
  }

  if (
    !isValidRow(newY, state.maxRows) ||
    !isValidColumn(newX, state.maxColumns)
  ) {
    return { ...state, isValid: false };
  }

  return {
    ...state,
    x: newX,
    y: newY,
    isValid: true,
  };
}

type BoardRotateAction = {
  type: "rotate";
  direction: "left" | "right";
};

export function rotateReducer(state: BoardState, action: BoardRotateAction) {
  let newFacing;
  if (action.direction === "right") {
    newFacing = state.facing + 90;
  } else {
    newFacing = state.facing - 90;
  }

  return { ...state, facing: newFacing };
}

function isValidRow(row: number, maxRows: number) {
  return row >= 0 && row < maxRows;
}

function isValidColumn(column: number, maxColumns: number) {
  return column >= 0 && column < maxColumns;
}

export type BoardActions = BoardMoveAction | BoardRotateAction;
