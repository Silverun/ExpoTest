import firestore from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";
import { Item } from "../store/items/items.types.ts";

const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);

  const getAllItems = async () => {
    const itemsCollection = firestore().collection("items");
    const snapshot = await itemsCollection.get();
    const items = snapshot.docs.map((doc) => doc.data() as Item);
    setItems(items);
  };

  useEffect(() => {
    getAllItems();
  }, []);

  return items;
};
export default useItems;
