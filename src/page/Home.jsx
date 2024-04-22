import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../store/features/userSlice";
import { notesFetch } from "../store/features/noteSlice";
import { motion } from "framer-motion";

const Home = () => {
  const user = useSelector((state) => state.user.value);
  const [apod, setApod] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);
  const [showSpinner, setShowSpinner] = useState(false);
  const [nasaData, setNasaData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(notesFetch(user.uid));
    fetchApod();
    fetchNasaData();
  }, [dispatch, user.uid]);

  const fetchApod = async () => {
    setShowSpinner(true);
    try {
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=y0QpIVoVVKsW4RHniFgwncl12DpjbjgdASx5EeJz"
      );
      if (response.ok) {
        const data = await response.json();
        setApod(data);
        setImageLoading(false);
      } else {
        console.error("Failed to fetch APOD");
      }
    } catch (error) {
      console.error("Error fetching APOD:", error);
    } finally {
      setShowSpinner(false);
    }
  };

  const fetchNasaData = async () => {
    try {
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=y0QpIVoVVKsW4RHniFgwncl12DpjbjgdASx5EeJz&count=20"
      );
      if (response.ok) {
        const data = await response.json();
        setNasaData(data);
      } else {
        console.error("Failed to fetch NASA data");
      }
    } catch (error) {
      console.error("Error fetching NASA data:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-indigo-900 overflow-hidden">
      {/* Spinner */}
      {showSpinner && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white" />
        </div>
      )}

      {/* APOD Banner */}
      <motion.div
        className="relative h-60 md:h-80 lg:h-96 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {imageLoading ? (
          <div className="h-full w-full bg-gray-300 animate-pulse" />
        ) : (
          <img
            src={apod?.hdurl}
            alt="APOD"
            className="h-full w-full object-cover"
          />
        )}

        {/* Welcome Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <motion.div
            className="text-center"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h1 className="mb-2 text-2xl sm:text-4xl lg:text-5xl font-bold">
              Welcome to the Universe, {user.displayName}
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl">
              Explore the wonders of space and its planets!
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* APOD Details */}
      <div className="max-w-7xl mx-auto py-6 px-2 sm:px-4 lg:px-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="mb-2 text-lg font-bold">APOD Details</h2>
          <motion.p
            className="text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {apod?.explanation}
          </motion.p>
        </div>
      </div>

      {/* NASA Data */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <h2 className="text-3xl font-bold text-white mb-6">
            NASA Data Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {nasaData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 1 }}
              >
                <img
                  src={item.hdurl}
                  alt={item.title}
                  className="w-full h-48 object-cover hover:opacity-75 transition-opacity duration-300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700 hidden group-hover:block">
                    {item.explanation}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
