import React, { useEffect,useState } from 'react';
import './Time.css'
const Time = props => {
    const [second, setSecond] = useState(0)
        useEffect(() => {
           const interval = setInterval(() => {
               setSecond(second + 1);
           },1000) ;
        return () => clearInterval(interval); 
           
        }, [second])
    

    return (
        <div className="Time">
            <h2>UseEffect- Time</h2>
            {second}           
        </div>
    )
}

export default Time;