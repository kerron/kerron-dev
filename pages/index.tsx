import { getSnapshot } from "mobx-state-tree";
import Home from "../components/Home";
import { initializeStore } from "../store";

export default function Ssr() {
  return <Home />;
}

// The date returned here will be different for every request that hits the page,
// that is because the page becomes a serverless function instead of being statically
// exported when you use `getServerSideProps` or `getInitialProps`
export function getServerSideProps() {
  const store = initializeStore();

  store.update();

  return { props: { initialState: getSnapshot(store) } };
}
