import styled from "styled-components";


export const apiURL = "frontend/src/MoviesData.json"


// Navbar Menu List (e.g., Home, Search, Watchlist...)

export const navbarMenuList = [
    {name: "HOME", path: "images/home-icon.svg"},
    {name: "SEARCH", path: "images/search-icon.svg"},
    {name: "WATCHLIST", path: "images/watchlist-icon.svg"},
    {name: "ORGINALS", path: "images/original-icon.svg"},
    {name: "MOVIES", path: "images/movie-icon.svg"},
    {name: "SERIES", path: "images/series-icon.svg"},
];


// Images of slider

export const ImgSliderList = [
    {name: 'Slide1', path: '/images/slider-badging.jpg'},
    {name: 'Slide2', path: '/images/slider-scale.jpg'},
    {name: 'Slide3', path: '/images/slider-badag.jpg'},
    {name: 'Slide4', path: '/images/slider-scales.jpg'},
];

// Viewer section (e.g., disney, pixar, marvel... )

export const ViewerList = [
    {name: 'disney', imgPath: '/images/viewers-disney.png', vidPath: '/videos/1564674844-disney.mp4'},
    {name: 'pixar', imgPath: '/images/viewers-pixar.png', vidPath: '/videos/1564676714-pixar.mp4'},
    {name: 'marvel', imgPath: '/images/viewers-marvel.png', vidPath: '/videos/1564676115-marvel.mp4'},
    {name: 'starwars', imgPath: '/images/viewers-starwars.png', vidPath: '/videos/1608229455-star-wars.mp4'},
    {name: 'national', imgPath: '/images/viewers-national.png', vidPath: '/videos/1564676296-national-geographic.mp4'},
]



// custom section style (e.g., Recommends, trending... )


export const CustomContainer = styled.div`
  padding: 0 0 26px;

`;


export const CustomContent = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const CustomWrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;



// background img url

export const BgImg = "/images/home-background.png";
