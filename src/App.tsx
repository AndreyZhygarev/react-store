import { Provider } from "react-redux";
import { store } from "./redux/store/";

import StateCounter from "./components/StateCounter/";
import StoreCounter from "./components/StoreCounter";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <StateCounter />
        <hr />
        <StoreCounter />
      </div>
    </Provider>
  );
};

export default App;
