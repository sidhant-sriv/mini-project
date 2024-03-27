//component that shows the carousel of images
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel dynamicHeight={false} width={700}>
        <div>
            <img src="/sun.jpg" />
            <p className="legend">The Sun</p>
          </div>

          <div>
            <img src="/mercury.jpg" />
            <p className="legend">Mercury</p>
          </div>
          <div>
            <img src="/venus.jpg" />
            <p className="legend">Venus</p>
          </div>
          <div>
            <img src="/earth.jpg" />
            <p className="legend">Earth</p>
          </div>
          <div>
            <img src="/mars.jpg" />
            <p className="legend">Mars</p>
          </div>
          <div>
            <img src="/jupiter.jpg" />
            <p className="legend">Jupiter</p>
          </div>
          <div>
            <img src="/saturn.jpg" />
            <p className="legend">Saturn</p>
          </div>
          <div>
            <img src="/uranus.jpg" />
            <p className="legend">Uranus</p>
          </div>
          <div>
            <img src="/neptune.jpg" />
            <p className="legend">Neptune</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default DemoCarousel;
