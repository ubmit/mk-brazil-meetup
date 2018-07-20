import React from 'react';
import Slider from 'react-slick';
import CardExampleCard from './Card';

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>
            <CardExampleCard />
          </h3>
        </div>
        <div>
          <h3>
            <CardExampleCard />
          </h3>
        </div>
        <div>
          <h3>
            <CardExampleCard />
          </h3>
        </div>
        <div>
          <h3>
            <CardExampleCard />
          </h3>
        </div>
        <div>
          <h3>
            <CardExampleCard />
          </h3>
        </div>
        <div>
          <h3>
            <CardExampleCard />
          </h3>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
