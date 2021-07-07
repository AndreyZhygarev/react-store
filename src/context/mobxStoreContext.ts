import { createContext } from "react";

import RootStore from "../mobx";

export const MobXState = new RootStore();

export const MobXStoreContext = createContext(MobXState);
