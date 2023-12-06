import { useEffect, useState } from "react";
import "./App.css";
import Door from "./components/Door";
import { DoorObject } from "./components/door.interfaces";

function App() {
  const [doorArray, setDoorArray] = useState<DoorObject[]>([]);

  useEffect(() => {
    const generateDoors = () => {
      const myArr = [];
      for (let i = 1; i <= 24; i++) {
        const doorObject = {
          id: i,
        };

        myArr.push(doorObject);
      }
      setDoorArray(myArr);
    };
    generateDoors();
  }, []);

  return (
    <div className="app">
      <div className="door-container">
        {doorArray &&
          doorArray.map((door, i) => {
            return <Door key={door.id + i} door={door} />;
          })}
      </div>
    </div>
  );
}

export default App;
