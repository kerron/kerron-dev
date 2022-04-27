import { Provider } from "mobx-react";
import { useStore } from "../store";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDI_CACykWqDWe9l9CSIL1QG7fpa4SNVv0",
  authDomain: "kerron-c5939.firebaseapp.com",
  projectId: "kerron-c5939",
  storageBucket: "kerron-c5939.appspot.com",
  messagingSenderId: "574574568954",
  appId: "1:574574568954:web:f21ddb276a500e50b57043",
  measurementId: "G-F9B8YBNXVQ",
};

initializeApp(firebaseConfig);

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
