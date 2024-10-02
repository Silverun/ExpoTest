const itemsJson = require("../../data/items.json");
import firestore from "@react-native-firebase/firestore";

export const uploadItems = async () => {
  const itemsCollection = firestore().collection("items");
  for (const item of itemsJson) {
    try {
      const docRef = await itemsCollection.add(item);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
};
