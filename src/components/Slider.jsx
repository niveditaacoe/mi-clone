import Carousel from "react-bootstrap/Carousel";
import PropTypes from 'prop-types'; // Import PropTypes
import 'bootstrap/dist/css/bootstrap.min.css'
import CarouselItem from "react-bootstrap/esm/CarouselItem";

// import CarouselCaption from 'react-bootstrap/esm/CarouselCaption';

const Slider = ({ start }) => {
  return (
    <Carousel>
      {start.map((item,index)=>(
              <CarouselItem key={index}>
              <img src={item} alt="" className="d-block w-100" />
            </CarouselItem>
      ))}
    </Carousel>
  )

};

Slider.propTypes = {
  start: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default Slider;
