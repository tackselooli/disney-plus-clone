import {CustomContainer, CustomContent, CustomWrap} from "../constant/Const";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectNewDisney} from "../features/movie/movieSlice";
import {data} from "../MoviesData";
import MoviesData from '../MoviesData.json'

const NewDisney = (props) => {

    const movies = useSelector(selectNewDisney);
    return (
        <CustomContainer>
            <h1>
                Recommends
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


export default NewDisney;