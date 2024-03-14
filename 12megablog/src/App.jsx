import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components/index.js";

function App() {
  //loading state
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          //if userData is present then dispatch the data---login and logout
          dispatch(
            login({
              userData,
            })
          );
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // console.log(import.meta.env.VITE_APPWRITE_URL);

  //conditional rendering
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-700">
      error
      <div className="w-full block">
        <Header />
        <main>
          {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
