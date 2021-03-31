import React from 'react';
import './Child.css'
const Child = (props ) => {
    return(
        <div className="Child">
            {props.data.map((d,index)=> (
                <p key={index} onClick={() => props.onclick(d)}>
                    {d}
                </p>
            ) )}
        </div>
    )
}

export default Child;