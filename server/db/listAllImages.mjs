import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore"; 
import * as data from "./bb.json" assert {type: "json"};
import db from "./connection.mjs";

export default async function getAllImages() {
    const storage = getStorage();
    const listRef = ref(storage, '');
    var arr = [];
    await listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
            const url = getDownloadURL(ref(storage, itemRef));
            url.then((resp) => {
                console.log(resp);
            })
        });
      }).catch((error) => {
      });
    return arr;
}

async function getFirebaseStorageImg(imagename) {
    let a =  await getDownloadURL(ref(storage, 'gs://ddir-architecture.appspot.com/' + imagename + '.jpg'));
    console.log(a);
    return a;
  }


export async function addAll() {
    data.default.forEach(item => {
        try {
            const docRef = addDoc(collection(db, 'projects'), item)
            console.log("done", docRef._id);
        } catch (err) {
            console.log("error", err);
        }
    })
}


