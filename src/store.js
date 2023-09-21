import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./reducers";
import taskReducer from "./reducers/taskReducer";




const store = createStore(
    taskReducer,
)

export default store;

