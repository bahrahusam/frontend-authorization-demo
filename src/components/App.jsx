import { Routes, Route } from "react-router-dom";
import Ducks from "./Ducks";
import Login from "./Login";
import MyProfile from "./MyProfile";
import Register from "./Register";
import "./styles/App.css";
import * as auth from '../utils/auth';

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);
 const handleRegistration = ({
    username,
    email,
    password,
    confirmPassword,
  }) => {
    if (password === confirmPassword) {
      auth.register(username, password, email)
       .then(() => {
          // TODO: handle succesful registration
        })
        .catch(console.error);
    }
  };


  return (
    <Routes>
      <Route path="/ducks" element={<Ducks />} />
      <Route path="/my-profile" element={<MyProfile />} />
      <Route
        path="/login"
        element={
          <div className="loginContainer">
            <Login />
          </div>
        }
      />
      <Route
        path="/register"
        element={
          <div className="registerContainer">
            <Register handleRegistration={handleRegistration} />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
