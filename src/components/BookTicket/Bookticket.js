import React, { useState } from 'react'
import "./Bookticket.css";
import { useNavigate, useParams } from 'react-router-dom';

let totalSeat = new Array(8);
for(let i = 0; i < totalSeat.length; i++){
    let newarr = [];
    for(let j = 0; j < 10; j++){
      newarr[j] = false
    }
    totalSeat[i] = newarr;
}
console.log(totalSeat);

function Bookticket() {

    const navigate = useNavigate()
    const {price} = useParams();
    console.log('price is',price)
    const [ticketCount,setTicketCount] = useState(0);
    const [seat,setSeat] = useState(totalSeat);
     console.log("seat is ",seat)
    const home = () => {
        navigate("/Home")
    }
    const conf = ()=>{
        navigate("/Confirmpage")
    }
    const handleSeat = (outer,inner)=>{
        // console.log("index is ",index);
        // const newSeat = [...seat];
        // newSeat[outer][inner] = true;
        // setSeat(prev => newSeat);
        let currseat = seat[outer][inner];
        if(currseat == false){
            const newSeat = [...seat];
            newSeat[outer][inner] = true;
            setSeat(prev => newSeat);
            setTicketCount(prev => prev + 1)
        }
        
    }
  return (
    <>
   
    <div className='container-tkt'>
    <button className='backarrow' onClick={home}><i className="fa fa-arrow-left"></i></button>
        <h2>Book Tickets</h2>
        <div>
            <ul className='showcase'>
                <li>
                    <div className='seat'></div>
                    <small>Available</small>

                </li>

                <li>
                <div className='seat selected'></div>
                <small>Selected</small> 
                </li>

                {/* <li>
                <div className='seat occupied'></div>
                <small>Occupied</small> 
                </li> */}
                
            </ul>
        </div>
            <div className='container-seat'>
                <div className='screen'></div>
                  {seat.map((value,i)=>{
                    return(
                        <div className='row'>
                            {value.map((innerseat,j)=>{
                                return(
                                    <div 
                                      onClick={()=>handleSeat(i,j)}
                                    className={innerseat ? "border rounded bg-danger col" : "col border bg-primary rounded"}
                                    >{ 10 *parseInt(i ) + parseInt(j+1)}</div>
                                )
                            })}
                        </div>
                    )
                  })}

                {/* <div className='row'>
                    
                    
                    <div className='seat'>01</div> 
                    <div className='seat'>02</div>
                    <div className='seat occupied'>03</div>
                    <div className='seat occupied'>04</div>
                    <div className='seat occupied'>05</div>
                    <div className='seat'>06</div>
                    <div className='seat'>07</div>
                    <div className='seat'>08</div> 
                </div>
                <div className='row'>
                    <div className='seat'>09</div>
                    <div className='seat'>10</div>
                    <div className='seat'>11</div>
                    <div className='seat occupied'>12</div>
                    <div className='seat occupied'>13</div>
                    <div className='seat'>14</div>
                    <div className='seat'>15</div>
                    <div className='seat'>16</div>
                </div>
                <div className='row'>
                    <div className='seat occupied'>17</div>
                    <div className='seat'>18</div>
                    <div className='seat'>19</div>
                    <div className='seat'>20</div>
                    <div className='seat'>21</div>
                    <div className='seat'>22</div>
                    <div className='seat'>23</div>
                    <div className='seat'>24</div>
                </div>
                <div className='row'>
                    <div className='seat'>25</div>
                    <div className='seat'>26</div>
                    <div className='seat'>27</div>
                    <div className='seat occupied'>28</div>
                    <div className='seat occupied'>29</div>
                    <div className='seat'>30</div>
                    <div className='seat'>31</div>
                    <div className='seat'>32</div>
                </div>
                 <div className='row'>
                    <div className='seat'>33</div>
                    <div className='seat'>34</div>
                    <div className='seat'>35</div>
                    <div className='seat occupied'>36</div>
                    <div className='seat'>37</div>
                    <div className='seat'>38</div>
                    <div className='seat'>39</div>
                    <div className='seat'>40</div>
                </div>
                <div className='row'>
                    <div className='seat'>41</div>
                    <div className='seat'>42</div>
                    <div className='seat'>43</div>
                    <div className='seat occupied'>44</div>
                    <div className='seat occupied'>45</div>
                    <div className='seat'>46</div>
                    <div className='seat'>47</div>
                    <div className='seat'>48</div>
                </div> 
                 <div className='row'>
                    <div className='seat'>49</div>
                    <div className='seat'>50</div>
                    <div className='seat'>51</div>
                    <div className='seat occupied'>52</div>
                    <div className='seat occupied'>53</div>
                    <div className='seat'>54</div>
                    <div className='seat'>55</div>
                    <div className='seat'>56</div>
                </div>
                
                <div className='row'>
                    <div className='seat'>57</div>
                    <div className='seat occupied'>58</div>
                    <div className='seat occupied'>59</div>
                    <div className='seat'>60</div>
                    <div className='seat'>61</div>
                    <div className='seat occupied'>62</div>
                    <div className='seat'>63</div>
                    <div className='seat'>64</div>
                </div>  */}
            </div>
             <p className='finishtext'>
                you have selected <span id='countnum'>{ticketCount}</span> seats for a price of Rs.<span id='totalamount'>{price * 2*ticketCount}</span>
            </p> 
            <button id='conform-tkt' onClick={conf} >Confirm Ticket</button>
      
    </div>
    </>
  )
}

export default Bookticket;

