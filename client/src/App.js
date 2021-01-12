import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <UserList />
    </div>
  );
}

export default App;
