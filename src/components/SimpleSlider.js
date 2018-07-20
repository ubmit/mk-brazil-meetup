import React from 'react';
import Slider from 'react-slick';
import KeyboardCard from './KeyboardCard';

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>
            <KeyboardCard />
          </h3>
        </div>
        <div>
          <h3>
            <KeyboardCard />
          </h3>
        </div>
        <div>
          <h3>
            <KeyboardCard />
          </h3>
        </div>
        <div>
          <h3>
            <KeyboardCard />
          </h3>
        </div>
        <div>
          <h3>
            <KeyboardCard />
          </h3>
        </div>
        <div>
          <h3>
            <KeyboardCard />
          </h3>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
