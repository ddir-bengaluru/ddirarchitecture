import React, { useEffect, useState } from 'react'
import { openDB } from "idb";

const DB_NAME = 'DDIRINDEXDB';
const OBJECT_STORE_NAME = 'DDIRIMAGES';

function openIndexDB() {
    return openDB(DB_NAME, 1, {
        upgrade(db) {
            db.createObjectStore(OBJECT_STORE_NAME);
        }
    });
}

async function cacheImage(url, blob) {
    const db = await openIndexDB();
    const tx = db.transaction(OBJECT_STORE_NAME, "readwrite");
    const store = tx.objectStore(OBJECT_STORE_NAME);
    store.put(blob, url);
    await tx.done();
}

async function getCachedImage(url) {
    const db = await openIndexDB();
    const tx = db.transaction(OBJECT_STORE_NAME);
    const store = tx.objectStore(OBJECT_STORE_NAME);
    return store.get(url);
}

export default function ImageCache({imageUrl, altText}) {
    const [cachedImageUrl, setCachedImageUrl] = useState(null);
    useEffect(() => {
        async function loadImage() {
            const cachedImage = await getCachedImage(imageUrl);
            try {
                if(cachedImage) {
                    console.log('using cache');
                    const blob = new Blob([cachedImage]);
                    const objectUrl = URL.createObjectURL(blob);
                    setCachedImageUrl(objectUrl);   
                } else {
                    console.log('not found in cache, using api ');
                    const response = await fetch(imageUrl, {
                        method: 'GET',
                        mode: 'no-cors',
                        headers: {
                            'Access-Control-Allow-Origin': '*'
                        }
                    });
                    const blob = await response.blob();
                    await cacheImage(imageUrl, blob);
                    const objectUrl = URL.createObjectURL(blob);
                    setCachedImageUrl(objectUrl);
                }
            } catch (err) {
                setCachedImageUrl('../../assets/images/img-placeholder.png');
            }
        }
        loadImage();
    }, [imageUrl]);
    return (
        <img className='cached-image' src={cachedImageUrl} alt={altText} />
    )
}


// export const fetchAndCacheImage = async (imageUrl) => {
//     const db = await openDB('DDIRDB', 1); // Open or create the database

//     // Check if the image is already cached
//     const cachedImage = await db.get('DDIRImages', imageUrl);

//     if (!cachedImage) {
//         // If not cached, fetch the image from the CDN
//         const response = await fetch(imageUrl);
//         const blob = await response.blob();

//         // Store the image in IndexedDB
//         const tx = db.transaction('DDIRImages', 'readwrite');
//         tx.objectStore('DDIRImages').put(blob, imageUrl);
//         await tx.complete;
//     }
// };

// // Function to load the image from IndexedDB
// export const loadImageFromIndexDB = async (imageUrl) => {
//     const db = await idb.open('DDIRDB', 1); // Open the database
//     const cachedImage = await db.get('DDIRImages', imageUrl);

//     if (cachedImage) {
//         // If the image is cached, use it
//         const imageURL = URL.createObjectURL(cachedImage);
//         console.log('Using cached image:', imageURL);
//     } else {
//         fetchAndCacheImage(imageUrl);
//     }
// };