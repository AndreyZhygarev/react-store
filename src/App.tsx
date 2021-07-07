import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store/";

import { RecoilRoot } from "recoil";

import {
  MobXStoreContext as MobXProvider,
  MobXState,
} from "./context/mobxStoreContext";

import StateCounter from "./components/StateCounter";
import ReduxCounter from "./components/ReduxCounter";
import MobXCounter from "./components/MobXCounter";
import RecoilCounter from "./components/RecoilCounter";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <StateCounter />
      <hr />
      <ReduxProvider store={store}>
        <ReduxCounter />
      </ReduxProvider>
      <hr />
      <MobXProvider.Provider value={MobXState}>
        <MobXCounter />
      </MobXProvider.Provider>
      <hr />
      <RecoilRoot>
        <RecoilCounter />
      </RecoilRoot>
    </div>
  );
};

export default App;
