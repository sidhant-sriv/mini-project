import React from "react";
import Sidebar from "../components/widgets/Sidebar";

const videos = [
  {
    title: "Mercury",
    url: "https://www.youtube.com/embed/P3GkZe3nRQ0",
  },
  {
    title: "Venus",
    url: "https://www.youtube.com/embed/ZFUgy3crCYY",
  },
  {
    title: "Earth",
    url: "https://www.youtube.com/embed/w-9gDALvMF4",
  },
  {
    title: "Moon",
    url: "https://www.youtube.com/embed/mCzchPx3yF8",
  },
  {
    title: "Mars",
    url: "https://www.youtube.com/embed/I-88YWx71gE",
  },
  {
    title: "Jupiter",
    url: "https://www.youtube.com/embed/Xwn8fQSW7-8",
  },
  {
    title: "Saturn",
    url: "https://www.youtube.com/embed/E8GNde5nCSg",
  },
  {
    title: "Uranus and Neptune",
    url: "https://www.youtube.com/embed/1hIwD17Crko",
  },
  {
    title: "Jupiter's Moons",
    url: "https://www.youtube.com/embed/HaFaf7vbgpE",
  },
  {
    title: "Asteroids",
    url: "https://www.youtube.com/embed/auxpcdQimCs",
  },
  {
    title: "Oort Cloud",
    url: "https://www.youtube.com/embed/ZJscxTyI__s",
  },
  {
    title: "Stars",
    url: "https://www.youtube.com/embed/ld75W1dz-h0",
  },
];

const CoursePage = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 h-screen bg-sidebar md:w-72">
        <Sidebar />
      </div>
      <div className="md:pl-80 md:pr-4">
        <div className="container mx-auto mt-8">
          <h1 className="text-3xl font-bold mb-4 text-white">Course Page</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {videos.map((video, index) => (
              <div key={index} className="rounded overflow-hidden shadow-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="h-full "
                    src={video.url}
                    title={video.title}
                    allowFullScreen
                    style={{ border: "none", height: "350px", width: "550px" }}
                  ></iframe>
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-2xl text-white mb-2">
                    {video.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
