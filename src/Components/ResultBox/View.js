import React from 'react'
import './index.css';

const View = ({ value, sumIsGreater, subsetSums }) => {
    return (
        <div className="container" >
            <div className="sub-container">
                <div className="small-text">{value ? "The sum of the divisors is greater than " + value + " ?" : ""}</div>
                {value ?
                    (sumIsGreater.condition) ?
                        <div className="big-text color-true">Yes</div> :
                        <div className="big-text color-false">No!</div>
                    : ""}

                <div className="small-text">{value ? sumIsGreater.divisors && sumIsGreater.divisors.join('+ ') : ""}</div>
            </div>
            <div className="sub-container">
                <div className="small-text">{value ? "any sum of divisors subset equal to value " + value + " ? " : ""}</div>
                {value ?
                    (sumIsGreater.condition) ?
                        ((subsetSums.condition) ?
                            <div className="big-text color-true">Yes</div> :
                            <div className="big-text color-false">No!</div>
                        ) :
                        <div className="big-text color-false">No!</div>
                    : ""}
                {value ? <div className="small-text">{(subsetSums.set && subsetSums.set.join('+ ') + " = " + value)}</div> : ""}
            </div>
        </div>
    )
}




export default View;
