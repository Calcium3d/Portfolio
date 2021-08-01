### For running it on your own

Make a folder at root named config and put in a config.js filled with 

```js
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
  <insert important stuff>
  };

firebase.initializeApp(firebaseConfig)
```

Followed by a npm run dev to run it on localhost!