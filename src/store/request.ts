import * as actions from "./slice";
import { store } from "./store";

export const setSures = (sure: any) => store.dispatch(actions.setSure(sure));
