import { useEffect, useState } from "react";
import "./App.css";
import Door from "./components/Door";

function App() {
  const [doorArray, setDoorArray] = useState<object[]>([]);

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
      <Door />
    </>
  );
}

export default App;
