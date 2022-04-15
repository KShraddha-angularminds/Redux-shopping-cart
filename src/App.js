import logo from "./logo.svg";
import "./components/styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
