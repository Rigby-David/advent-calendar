import { useEffect, useState } from "react";
import "./App.css";
import Door from "./components/Door";
import { DoorType } from "./components/door.interfaces";
import { getAllQuotes } from "./fetch-utils";

function App() {
  const [doorArray, setDoorArray] = useState<DoorType[]>([]);

  async function handleQuotes() {
    await getAllQuotes();
  }

  handleQuotes();

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

  console.log(doorArray);

  return (
    <>
      {doorArray &&
        doorArray.map((door, i) => {
          return <Door key={door.id + i} door={door} />;
        })}
    </>
  );
}

export default App;
