import { DoorProps } from "./door.interfaces";

export default function Door({ door }: DoorProps) {
  return <div>{door.id}</div>;
}
