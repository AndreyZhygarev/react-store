import { Provider } from "react-redux";
import { store } from "./redux/store/";

import StateCounter from "./components/StateCounter";
import ReduxCounter from "./components/ReduxCounter";
import MobXCounter from "./components/MobXCounter";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <StateCounter />
        <hr />
        <ReduxCounter />
        <hr />
        <MobXCounter />
      </div>
    </Provider>
  );
};

export default App;
