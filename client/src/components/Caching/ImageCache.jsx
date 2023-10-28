import React, { useEffect, useRef, useState } from 'react'
import { openDB } from "idb";
import placeHolderImage from "./../../assets/images/img-placeholder.png";

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
    store.add(blob, url);
    await tx.done;
    return URL.createObjectURL(blob);
}

async function getCachedImage(url) {
    const db = await openIndexDB();
    const tx = db.transaction(OBJECT_STORE_NAME, 'readonly');
    const store = tx.objectStore(OBJECT_STORE_NAME);
    return store.get(url);
}

export default function ImageCache({ imageUrl, altText }) {
    const [cachedImageUrl, setCachedImageUrl] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const imgRef = useRef();
    useEffect(() => {
        async function loadImage() {
            const cachedImage = await getCachedImage(imageUrl);
            try {
                if (cachedImage) {
                    const blob = cachedImage;
                    const blobData = new Blob([blob]);
                    const objectUrl = URL.createObjectURL(blobData);
                    setCachedImageUrl(objectUrl);
                } else {
                    let blob;
                    const req = new Request(imageUrl);
                    const res = await fetch(req)
                    if(!res.ok) {
                        console.error(res);
                        return
                    }
                    blob = await res.blob();
                    setCachedImageUrl(await cacheImage(imageUrl, blob));
                    
                    // const res = await fetch(req, {
                    //     mode: 'cors',
                    //     crossorigin: true,
                    //     headers: {
                    //         'Access-Control-Allow-Origin': '*'
                    //     }
                    // });
                    // if (res.type === 'opaque') {
                    //     blob = new Blob([await res.text()], {
                    //         type: res.headers.get('content-type'),
                    //     });
                    //     const objectUrl = URL.createObjectURL(blob);
                    //     setCachedImageUrl(objectUrl);
                    // } else {
                    //     blob = await res.blob();
                    //     const objectUrl = URL.createObjectURL(blob);
                    //     setCachedImageUrl(objectUrl);
                    // }

                }
            } catch (err) {
                console.error(err, cachedImageUrl);
                if(!(err instanceof DOMException && err.name === 'AbortError') || !err.code === DOMException.ABORT_ERR) {
                    setCachedImageUrl(placeHolderImage);
                }
            }
            if (imgRef.current && imgRef.current.complete) {
                setLoading(false);
            }
        }
        loadImage();
    }, [imageUrl]);
    return (
        <>
            <img
                ref={imgRef} 
                onLoad={() => setLoading(false)}
                onError={(e) => {
                    console.error("Image Loading Error: ", e);
                    imgRef.current.style.display = 'none'
                }}
                loading="lazy"
                src={isLoading ? placeHolderImage : cachedImageUrl} 
                alt={altText}
            />
        </>
    )
}