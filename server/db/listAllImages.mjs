import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import * as data from "./bb.json" assert {type: "json"};
import db from "./connection.mjs";

export default function getAllImages() {
    const storage = getStorage();
    const listRef = ref(storage, '/art');
    const arr = [];
    listAll(listRef)
        .then((res) => {
            res.items.forEach((itemRef) => {
                const url = getDownloadURL(ref(storage, itemRef));
                url.then((resp) => {
                    console.log(resp);
                })
            });
        }).catch((error) => {
            console.log(error);
        });
}

export async function addAll() {
    data.default.forEach(item => {
        try {
            const docRef = addDoc(collection(db, 'art'), item)
            console.log("done", docRef._id);
        } catch (err) {
            console.log("error", err);
        }
    })
}


