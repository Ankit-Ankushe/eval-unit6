import React from 'react'
import { useParams } from "react-router";

const MovieDetail = () => {
    const [data,SetData] = React.useState("")
    const id=1
    // const id=useParams();

    React.useEffect(()=>{
        getData()
    },[])
    const getData = () =>{ 
        fetch(` http://localhost:8080/movies?q=${id}`).then((res)=>res.json()).then((res)=>SetData(res))
    }
  return (
    <div>
        <h1>{data.title}</h1>
        <p>{data.overview}</p>
    </div>
  )
}

export default MovieDetail
