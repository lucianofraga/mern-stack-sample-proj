import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import UserList from "./components/UserList";

import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
