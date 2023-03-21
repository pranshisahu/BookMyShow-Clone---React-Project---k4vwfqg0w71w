import React,{useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { contextprovider } from '../Header/Context/Context';

import "./Home.css"


const Home = () => {
    const [nowPlayingMovie, setNowPlayingMovie] = useState([]);

    const {data, setData} = useContext(contextprovider );

    const navigate = useNavigate()
    useEffect(()=>{
        async function getNowPlayingList(){
            fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=b5aecf5d45727a9ed920cc7f2b507548&language=en-US&page=1")
            .then(res=>res.json())
            .then(data=> setData(prev=>data.results))

        }
        getNowPlayingList();
    },[]);
    console.log(nowPlayingMovie)

    function movirdetails(id){
        console.log('id', id);
        navigate(`/movie/${id}`)
    }



  return (
    
    <>
    <div className='foradd'>
     <div className='sidebar'>
      <h1>Genres</h1>
      <div className='allgeners'>
      <li>Adventure</li>
      <li>Animation</li>
      <li>Comedy</li>
      <li>Crime</li>
      <li>Documentry</li> 
      <li>Drama</li>
      <li>Family</li>
      <li>Fantasy</li>
      <li>History</li>
      <li>Horor</li>
      <li> Music</li>
      <li>Mistory</li>
      <li>Romance</li>
      <li>Science</li>
      <li>Fiction</li>
      </div>

    </div>
    <div className='headnowplaying'>
    <h2 className='nowplay'>Now Playing</h2>
    <div className='nowpage'>  
    
      {data?.map((np)=>{
        return(
            <div className='nowplaying' onClick={()=>movirdetails(np.id)}>
                {/* <h3>{np.poster_path}</h3> */}
                <img src= {` https://image.tmdb.org/t/p/original${np?.poster_path} `}alt ={"img"}  className = "np-img1"/>
                {/* <h3 className='title'>{np.title}</h3> */}
                {/* <h3 className='average'>{np.vote_average}</h3> */}
            </div>
        )
    })}
    </div>
    </div>
    </div>
    </>
  )

}

export default Home;

