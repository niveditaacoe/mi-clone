import Carousel from 'react-bootstrap/Carousel';
import CarouselCaption from 'react-bootstrap/esm/CarouselCaption';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = ({banner}) => {
  return (
   <Carousel fade>
    {banner.end.map((item,index)=>(
      <CarouselItem key={item.image} id="banner" interval={1000} keyboard={true}>
        <img className='d-block w-100' src={item.image} id='bannerImage' alt={`${index} banner`} />

        <CarouselCaption>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.source}</p>
          <u>Read More</u>
        </CarouselCaption>
      </CarouselItem>
    ))}
   </Carousel>
  )
}

export default Banner;
