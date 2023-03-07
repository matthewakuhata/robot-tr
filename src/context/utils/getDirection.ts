export function getDirection(facing: number) {
  if (facing >= 0) {
    const direction = Math.abs(facing) % 360;

    switch (direction) {
      case 90:
        return "East";
      case 180:
        return "South";
      case 270:
        return "West";
      case 0:
        return "North";
      default:
        return "East";
    }
  } else {
    const direction = Math.abs(facing) % 360;

    switch (direction) {
      case 90:
        return "West";
      case 180:
        return "South";
      case 270:
        return "East";
      case 0:
        return "North";
      default:
        return "East";
    }
  }
}
