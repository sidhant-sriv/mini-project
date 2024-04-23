import React, { useState } from "react";
import Sidebar from "../components/widgets/Sidebar";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the feedback to your server
    console.log(feedback);
    setFeedback("");
  };

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 h-screen bg-sidebar md:w-72">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 md:pl-80 md:pr-4">
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
          <label htmlFor="feedback" className="block mb-2">
            Feedback:
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
