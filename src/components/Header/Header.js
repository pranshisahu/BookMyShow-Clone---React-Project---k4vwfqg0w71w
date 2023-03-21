import React, { useContext, useState } from 'react'
import "./Header.css";
import { contextprovider } from './Context/Context';

 function Header() {

    const [serchfild, setSerchfild] = useState("")

    const {data, setData} = useContext(contextprovider);
    console.log(data);

    const hendlesrch = () =>{
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b5aecf5d45727a9ed920cc7f2b507548&query=${serchfild}&language=en-US&page=1&include_adult=false`)
        .then(res=>res.json())
        .then(res=>setData(prev=>res.results))
    }
  return (
    <>
    <div className='navbar'>
        <div>
            <img className='img-icon' src='https://entrackr.com/storage/2017/08/bookmyshow.jpg' alt='img' />
        </div>
        <div className='rightpart'>
         <div className='input1'>
         <input value={serchfild} id='input-hed' placeholder='Search' onChange={(e) => setSerchfild(e.target.value)} />
         <button id='btn' onClick={hendlesrch}>Search</button>
         </div>
        <span>
        <i className="fa-regular fa-heart"></i>
        </span>
        
         <span> <i className="fa-solid fa-user"></i></span>
    
        </div>
           
      
    </div>
    </>
  )
}
export default Header;
