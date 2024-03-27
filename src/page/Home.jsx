import React, { useState, useEffect, useRef } from "react";

import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../store/features/userSlice";
import { notesFetch } from "../store/features/noteSlice";
import { useNavigate } from "react-router-dom";
import DemoCarousel from "../components/widgets/Carousel";
// import { getAllUserNotes } from '../store/features/noteSlice';

const Home = () => {
  const user = useSelector((state) => state.user.value);
  const { value, status } = useSelector((state) => state.note);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const intervalID = setInterval(() => {
      // console.log("yes")
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  // console.log("user here: ", user.uid);

  useEffect(() => {
    dispatch(notesFetch(user.uid));
  }, [dispatch, user.uid]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <h1 className="text-4xl font-bold text-center mt-6">
        Welcome to the Mini Project, {user.displayName}
      </h1>
      <p className="text-xl text-center mt-6">
        Explore the wonders of space and its planets!
      </p>

      <div>
        <DemoCarousel />
      </div>
    </div>
  );
};

export default Home;
