import "./MovieList.css"
import { Link } from "react-router-dom"

export const MovieCard = ({id,image,name})=>{
    return (
      <>
     
       <Link className="link" to={`/movies/${id}`}>
        <div className = "card">
               <img id = "image" src={image} alt="img" />
            <h4 id = "name">{name}</h4>
       </div>
       </Link>
        </>
  )
}

export default MovieCard