import React, { useState } from "react";
import Sidebar from "../components/widgets/Sidebar";

const planets = [
  {
    name: "Mercury",
    description:
      "The smallest and closest planet to the Sun. It has no atmosphere and experiences extreme temperature swings.",
    image: "/mercury.jpg", // Replace with path to your image
    funFact:
      "A day on Mercury is longer than its year! It takes about 58.6 Earth days for Mercury to complete one rotation on its axis but around 88 Earth days to orbit the Sun.",
  },
  {
    name: "Venus",
    description:
      "The hottest planet, even hotter than Mercury, due to a runaway greenhouse effect. It has a thick, toxic atmosphere.",
    image: "/venus.jpg", // Replace with path to your image
    funFact:
      "Venus is the only planet that spins clockwise. Additionally, a day on Venus is longer than its year. It takes about 243 Earth days to complete one rotation on its axis but around 225 Earth days to orbit the Sun.",
  },
  {
    name: "Earth",
    description:
      "Our home planet, the only one known to support life. It has a liquid water ocean and a thin atmosphere that protects us from harmful radiation.",
    image: "/earth.jpg", // Replace with path to your image
    funFact:
      "Earth is the only planet in the solar system not named after a Roman god. Its atmosphere is primarily composed of nitrogen (about 78%) and oxygen (about 21%).",
  },
  {
    name: "Mars",
    description:
      "The Red Planet, with a thin atmosphere and rusty iron oxide on its surface. It has two moons, Phobos and Deimos.",
    image: "/mars.jpg", // Replace with path to your image
    funFact:
      "Mount Olympus Mons on Mars is the tallest mountain in the solar system. It measures about 21.9 kilometers (13.6 miles) in height, almost three times the height of Mount Everest.",
  },
  {
    name: "Jupiter",
    description:
      "The largest planet, a gas giant with a swirling Great Red Spot and many moons, including the four largest: Io, Europa, Ganymede, and Callisto.",
    image: "/jupiter.jpg", // Replace with path to your image
    funFact:
      "Jupiter has its own ring system, although much fainter than Saturn's. Its Great Red Spot is a massive storm that has been raging for at least 400 years.",
  },
  {
    name: "Saturn",
    description:
      "The ringed giant, known for its spectacular system of icy rings. It also has many moons, including Titan, the largest moon in the solar system with a thick atmosphere.",
    image: "/saturn.jpg", // Replace with path to your image
    funFact:
      "A year on Saturn is about 29 Earth years long. Its rings are made up of ice particles ranging in size from tiny grains to massive boulders.",
  },
  {
    name: "Uranus",
    description:
      "An ice giant tilted on its side, with a blueish hue and faint rings. It has many moons, including Miranda with its unusual, cratered surface.",
    image: "/uranus.jpg", // Replace with path to your image
    funFact:
      "Uranus has the coldest atmosphere in the solar system. Its axis of rotation is tilted at an angle of 98 degrees, causing it to essentially roll around the Sun on its side.",
  },
  {
    name: "Neptune",
    description:
      "Another ice giant, even farther out than Uranus. It has a Great Dark Spot, a large anticyclonic storm, and faint rings.",
    image: "/neptune.jpg", // Replace with path to your image
    funFact:
      "Neptune has supersonic winds, some of the fastest in the solar system. Its Great Dark Spot is a massive storm similar to Jupiter's Great Red Spot.",
  },
];

const SolarSystemInfo = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
  };

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 h-screen bg-sidebar md:w-72">
        <Sidebar />
      </div>
      <div className="md:pl-80 md:pr-4">
        <h1>Explore Our Solar System</h1>
        <div className="planets-list" style={{ margin: "30px" }}>
          {planets.map((planet) => (
            <div
              key={planet.name}
              className="planet text-white"
              style={{ display: "flex", flexDirection: "row", margin: "20px" }}
            >
              <img src={planet.image} alt={planet.name} />
              <h1 style={{ fontSize: "30px", margin: "20px" }}>
                {planet.funFact}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolarSystemInfo;
