import React from 'react'
import { useParams } from "react-router";
import './MovieDetail.css'

const MovieDetail = () => {
    const [data,SetData] = React.useState("")
    const id=useParams();
    const movieId=id.id;
    React.useEffect(()=>{
        getData()
    },[])
    const getData = async () =>{ 
      await  fetch(`http://localhost:8080/movies?id=${movieId}`).then((res)=>res.json()).then((res)=>SetData(res))
    }
    console.log("data is",data)
  return (
    <div>
      
        {
          data.map((e)=>(
            <div id='desc'>
                <div id='poster'>
                <img src={e.poster_path} alt="img" />
                </div>
                <div>
                <h1>About {e.title}</h1>
                <hr />
                <p>Release Date : {e.release_date}</p>
                <p>Popularity : {e.popularity}</p>
                <h2>overview</h2>
                <p>{e.overview}</p>
                </div>
            </div>
          ))
        }
    </div>
  )
}

export default MovieDetail
