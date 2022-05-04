import {CustomContainer, CustomContent, CustomWrap} from "../constant/Const";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectTrending} from "../features/movie/movieSlice";
import {data} from "../MoviesData";
import MoviesData from '../MoviesData.json'

const Trending = (props) => {

    const movies = useSelector(selectTrending);
    return (
        <CustomContainer>
            <h1>
                Trending
            </h1>
            <CustomContent>
                {movies &&
                movies.map((movie, key) => (
                    <CustomWrap key={key}>
                        {movie.id}
                        <Link to={`/detail/` + movie.id}>
                            <img src={movie.cardImg} alt={movie.title}/>
                        </Link>
                    </CustomWrap>
                ))}
            </CustomContent>
        </CustomContainer>
    );
};


export default Trending;