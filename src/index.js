import React, { Suspense } from 'react';
import ReactDom from 'react-dom';
import {App} from './App'
import firebaseConfig from './firebase-config';

import {
    FirebaseAppProvider
} from 'reactfire'


ReactDom.render((
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Suspense fallback={"Conectando la app..."}>
            <App/>
        </Suspense>       
    </FirebaseAppProvider>
), document.getElementById("root"))
