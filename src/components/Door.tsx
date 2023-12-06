import { useState } from "react";
import { DoorProps, QuoteType } from "./door.interfaces";
import "./Door.css";
import { getAllQuotes } from "../fetch-utils";

export default function Door({ door }: DoorProps) {
  const [doorObject, setDoorObject] = useState<QuoteType>({
    id: door.id,
    film: "",
    author: "",
    quote: "",
  });

  const handleGetQuoteById = async (id: number) => {
    console.log("id", id);
    const data = await getAllQuotes(id);
    console.log("data", data);
    setDoorObject(data);
  };

  return (
    <div className="door-item" onClick={() => handleGetQuoteById(door.id)}>
      {doorObject.id}
      {doorObject.quote}
    </div>
  );
}
