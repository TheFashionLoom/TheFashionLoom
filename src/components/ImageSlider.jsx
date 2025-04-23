import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
export default function ImageSlider({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    accessibility: true, // ⬅️ ensures arrow key navigation
  };

  return (
    <Slider {...settings}>
      {images.map((img, idx) => (
        <div key={idx}>
          <Zoom>
            <img
              src={img}
              alt="product"
              className="w-full h-96 object-contain"
            />
          </Zoom>
        </div>
      ))}
    </Slider>
  );
}
