import React,{useRef,useState,useEffect} from 'react';
import './PreviousNumber.css'

const PreviousNumber = props => {

    const [ number,setNumber] = useState(0);
    const previousState = useRef(number);
    useEffect(() => {
        previousState.current = number;
    },[number]);

    const increase = () => {
        setNumber(number+1);
    }
    return(
        <div className="PreviousNumber">
            <h2> UseRef - PreviousNumber</h2>
            <p>Current Number :{number}</p>
            <button onClick={increase}>Increse</button>
            <p>PreviousNumber: {previousState.current}</p>
        </div>
    )
}

export default PreviousNumber;