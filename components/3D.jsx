import Image from 'next/image';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

import  '../config/config.js';

export function Notion(props) {
    const title = props.title;

    const projectStorage = firebase.storage();
    const projectFireStore = firebase.firestore();
    
    var storage = firebase.app().storage("gs://portfolio-fb28.appspot.com");
    var folder = ""

    if (props === "Cars") {
        folder = "cars"
    } else if (props == "Abstract") {
        folder = "abstract"
    } else {
        folder = "other"
    }


    return (
        <div>
            <div className="min-h-fifteen grid place-content-center text-4xl text-white">
                <h1>
                    {title}
                </h1>
                <div className="grid grid-flow-col">
                </div>
            </div>
        </div>
    )
}
