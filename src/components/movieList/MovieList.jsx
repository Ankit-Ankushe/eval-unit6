import React from 'react'
import './MovieList.css'

const MovieList = () => {

    const [data,setData] = React.useState([]);
    // const data =  [
    //     {
    //       "id": 1,
    //       "title": "Doctor Strange in the Multiverse of Madness",
    //       "original_language": "en",
    //       "original_title": "Doctor Strange in the Multiverse of Madness",
    //       "overview": "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
    //       "popularity": 10084.004,
    //       "poster_path": "https://image.tmdb.org/t/p/original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    //       "release_date": "2022-05-04",
    //       "vote_average": 7.556,
    //       "vote_count": 3749
    //     },
    //     {
    //       "id": 2,
    //       "title": "Blasted",
    //       "original_language": "no",
    //       "original_title": "Blasted - Gutta vs. Aliens",
    //       "overview": "When a former childhood friend crashes Sebastian's bachelor party and makes it all about himself, only an alien invasion can make them put aside their bad blood and reunite as the kick-ass laser-tag duo they once were.",
    //       "popularity": 21.055,
    //       "poster_path": "https://image.tmdb.org/t/p/original/aEB9ogCBCUpSFTZVhD7NvTh44VW.jpg",
    //       "release_date": "2022-06-22",
    //       "vote_average": 5.727,
    //       "vote_count": 11
    //     },]
    

    React.useEffect(()=>{
        getData()
    },[])
   const  getData = () =>{
        fetch(`http://localhost:8080/movies`)
        .then((res)=>res.json())
        .then((res) => setData(res))
        .catch((err)=> console.log(err))
    }
    console.log("data for movies is", data)
  return (
    <div className='container'>
        <div id='movie'>
        {
            data.map((movie)=>(
                <div key={movie.id}>
                    <img src={movie.poster_path} alt="poster" />
                    <h3>{movie.title}</h3>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default MovieList
