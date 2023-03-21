import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./Moviedetails.css";

function Moviedetails() {

    const [sortmovie, setSortmovies] = useState({})
    const{id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        function moviepage(){
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b5aecf5d45727a9ed920cc7f2b507548&language=en-US&page=1`)
             .then(responce => responce.json())
             .then(data =>  setSortmovies(data))
        }
        moviepage()
    },[])
    const bookticket = (price)=>{
        navigate(`/bookticket/${price}`)
    }
    const home = () => {
        navigate("/Home")
    }
    console.log(id)
    console.log(sortmovie)
  return (
    <div>
      {
        <div className='disdetails'>
            <div>
             <img src= {` https://image.tmdb.org/t/p/original${sortmovie?.poster_path} `}alt ={"img"}  className = "np-img"/>
             </div>
            <div className='popups'>
                <h3>{sortmovie.title}</h3>
                <h4><i className="fa-solid fa-star"></i> {Math.round(sortmovie.vote_average)}/10</h4>
                <h3>{sortmovie.original_language}</h3>
                <span><h4>{sortmovie.runtime} minutes</h4></span>
                {/* <span>{sortmovie.genres[0].name}</span> */}
                <h5>{sortmovie.overview}</h5>
                <h3><i class="fas fa-rupee-sign">.</i>{sortmovie.runtime*2}</h3>
                
                {/* <button id='wishlist-btn'>Wishlist</button> */}
                <button id='back-btn' onClick={home}><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
                <button id='ticket-btn' onClick={()=>{bookticket(sortmovie.runtime)}}>Book Tickets</button>
             </div>
             
        </div>
      }
    </div>
  )
}

export default Moviedetails;

