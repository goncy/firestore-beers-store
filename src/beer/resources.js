import { database } from "../firebase";

export default {
  onChange: callback =>
    database
      .collection("beers")
      .onSnapshot(snapshot => callback(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))),
};
