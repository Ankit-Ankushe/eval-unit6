import React from 'react'
import './MovieList.css'
import MovieCard from './MovieCard'

const MovieList = () => {

    const [data,setData] = React.useState([]);
   
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
    <>
    <h1>Movies</h1>
    <div id='box'>
        {
           data.map((e) => {
            return (
              <MovieCard
                id={e.id}  
                image={e.poster_path}
                name={e.title}
              />
            );
          })
        }
    </div>
    </>
  )
}

export default MovieList
