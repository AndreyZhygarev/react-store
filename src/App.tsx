import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store/";

import {
  MobXStoreContext as MobXProvider,
  MobXState,
} from "./context/mobxStoreContext";

import StateCounter from "./components/StateCounter";
import ReduxCounter from "./components/ReduxCounter";
import MobXCounter from "./components/MobXCounter";

import "./App.css";

const App = () => {
  return (
    <ReduxProvider store={store}>
      <MobXProvider.Provider value={MobXState}>
        <div className="App">
          <StateCounter />
          <hr />
          <ReduxCounter />
          <hr />
          <MobXCounter />
        </div>
      </MobXProvider.Provider>
    </ReduxProvider>
  );
};

export default App;
