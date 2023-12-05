import { useState } from "react";
import { DoorProps, DoorType } from "./door.interfaces";

export default function Door({ door }: DoorProps) {
  const [contents] = useState(["Day One", "Day Two", "Day Three"]);
  const [doorObject, setDoorObject] = useState<DoorType>({
    id: door.id,
    name: "",
  });

  const clickDoor = (id: number) => {
    if (id == door.id) {
      const clickedDoor = {
        ...door,
        name: contents[id - 1],
      };
      setDoorObject(clickedDoor);
    }
  };

  return (
    <div onClick={() => clickDoor(door.id)}>
      {doorObject.id}
      {doorObject.name}
    </div>
  );
}
