import React, { useState, useEffect } from "react";
// import Sidebar from './components/widgets/Sidebar';
import Home from "./page/Home";
import Signup from "./page/Signup";
import Login from "./page/Login";
import { Routes, Route } from "react-router-dom";
// import Navbar from './components/widgets/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import ProtectedRoute from "./components/widgets/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "./store/features/userSlice";
import Info from "./page/Info";
import CoursePage from "./page/CoursePage";
import QuizApp from "./page/Quiz";
function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  // const user = "asasa";
  console.log(user);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Router>
      <div className="md:overflow-x-auto overflow-x-hidden bg-primary">
        <section>
          <div>
            <Routes>
              <Route element={<ProtectedRoute user={user} />}>
                <Route path="/home" element={<Home />} />
              </Route>
              <Route path="/info" element={<Info />} />
              <Route path="/quiz" element={<QuizApp />} />
              <Route path="/courses" element={<CoursePage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Login />} />
              <Route path="*" element={<h1>Not found</h1>} />
            </Routes>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
