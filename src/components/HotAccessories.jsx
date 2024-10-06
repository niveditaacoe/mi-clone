import PropTypes from "prop-types";
import HotItemCard from "./HotItemCard";
import "../styles/HotAccess.css";

const HotAccessories = ({
  music,
  musicCover,
  smartDevice,
  smartDeviceCover,
  home,
  homeCover,
  mobileAccessories,
  mobileAccessoriesCover,
  lifeStyle,
  lifeStyleCover,
}) => {
  return (
    <div className="HotAccess">
      <div>
        <img
          src={
            musicCover ||
            smartDeviceCover ||
            homeCover ||
            lifeStyleCover ||
            mobileAccessoriesCover
          }
          alt="Cover"
        />
      </div>

      <div>
        {music &&
          music.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}

        {smartDevice &&
          smartDevice.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}

        {home &&
          home.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}

        {lifeStyle &&
          lifeStyle.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}

        {mobileAccessories &&
          mobileAccessories.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}
          <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
      </div>
    </div>
  );
};

// PropTypes for validation
HotAccessories.propTypes = {
  music: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      image: PropTypes.string.isRequired,
    })
  ).isRequired, // music should be an array of objects with specific properties
  musicCover: PropTypes.string.isRequired, // musicCover should be a string
};

// PropTypes for validation
HotAccessories.propTypes = {
  smartDevice: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      image: PropTypes.string.isRequired,
    })
  ).isRequired, // music should be an array of objects with specific properties
  smartDeviceCover: PropTypes.string.isRequired, // musicCover should be a string
};

// PropTypes for validation
HotAccessories.propTypes = {
  mobileAccessories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      image: PropTypes.string.isRequired,
    })
  ).isRequired, // music should be an array of objects with specific properties
  mobileAccessoriesCover: PropTypes.string.isRequired, // musicCover should be a string
};

// PropTypes for validation
HotAccessories.propTypes = {
  home: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      image: PropTypes.string.isRequired,
    })
  ).isRequired, // music should be an array of objects with specific properties
  homeCover: PropTypes.string.isRequired, // musicCover should be a string
};

// PropTypes for validation
HotAccessories.propTypes = {
  lifeStyle: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      image: PropTypes.string.isRequired,
    })
  ).isRequired, // music should be an array of objects with specific properties
  lifeStyleCover: PropTypes.string.isRequired, // musicCover should be a string
};

export default HotAccessories;
