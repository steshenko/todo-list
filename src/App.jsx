import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import {TodoList} from "./pages";

const App = () => (
    <Provider store={store}>
        <TodoList />
    </Provider>
);

export default App;
