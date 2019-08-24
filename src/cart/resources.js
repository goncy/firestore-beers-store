import { database } from "../firebase";

export default {
  add: (user, item) =>
    database
      .collection("users")
      .doc(user)
      .collection("cart")
      .add(item),
  remove: (user, id) =>
    database
      .collection("users")
      .doc(user)
      .collection("cart")
      .doc(id)
      .delete(),
  onChange: (user, callback) =>
    database
      .collection("users")
      .doc(user)
      .collection("cart")
      .onSnapshot(snapshot => callback(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))),
};
