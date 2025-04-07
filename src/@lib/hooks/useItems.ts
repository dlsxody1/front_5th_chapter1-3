import { useState } from "react";
import { generateItems } from "../../utils";

export const useItems = () => {
  const [items, setItems] = useState(generateItems(1000));

  const addItems = () => {
    setItems((prevItems) => [
      ...prevItems,
      ...generateItems(1000, prevItems.length),
    ]);
  };

  return { addItems, items };
};
