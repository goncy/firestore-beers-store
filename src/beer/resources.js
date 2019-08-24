import { database } from "../firebase";

export default {
  onChange: (user, callback) =>
    database
      .collection("beers")
      .onSnapshot(snapshot => callback(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))),
};
