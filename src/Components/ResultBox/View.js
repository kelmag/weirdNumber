import React from 'react'
import './index.css';

export default function View() {
    return (
        <div className="container" >
            <div class="sub-container">
                <div class="small-text">The sum of the divisors is greater than ?</div>
                <div class="big-text color-true">Yes</div>
                <div class="small-text">1, 2, 4, 8, 16, 32, 64 </div>
            </div>
            <div class="sub-container">
                <div class="small-text">The sum of the divisors is greater than ?</div>
                <div class="big-text color-false">No!</div>
                <div class="small-text">1, 2, 4, 8, 16, 32, 64 </div>
            </div>
        </div>
    )
}
