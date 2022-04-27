import { getSnapshot } from "mobx-state-tree";
import Home from "../components/Home";
import { initializeStore } from "../store";

export default function Ssr() {
  return <Home />;
}

export function getStaticProps() {
  const store = initializeStore();

  store.update();

  return { props: { initialState: getSnapshot(store) } };
}
