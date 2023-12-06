import { useEffect, useState } from "react";
import "./App.css";
import Door from "./components/Door";
import { ObjectWithId } from "./components/door.interfaces";

function App() {
  const [doorArray, setDoorArray] = useState<ObjectWithId[]>([]);

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
      <h1>John and Hans - A Christmas Surprise</h1>
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
