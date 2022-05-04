import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

import {ImgSliderList} from "../constant/Const";

const ImgSlider = (props) => {


    let setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
    };

    return (
        <Carousel {...setting}>
            {
                ImgSliderList.map(function (item, id) {
                    return (
                        <Wrap key={id}>
                            <a>
                                <img src={item.path} alt={item.name}/>
                            </a>
                        </Wrap>
                    );
                })
            }
        </Carousel>
    );
};



const Carousel = styled(Slider)`
  margin-top: 5px;
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;
