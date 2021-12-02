import { getInitialData } from "../utils/api";

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("The action: ", action);
  const returnValue = next(action);
  console.log("The new state: ", store.getState());
  getInitialData().then((data) => console.log("DATA: ", data));
  console.groupEnd();
  return returnValue;
};

export default logger;
