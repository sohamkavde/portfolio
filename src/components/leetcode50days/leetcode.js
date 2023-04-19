import React from 'react';
import Image from '../../img/leetcode50days.JPG';
import './leetcode.css';
const leetcode = () => {
    return (
        <>
            <div id="leetcode" >
                <div className="leetcode-head" id='leetcodeHead'>
                    Leetcode 50 Days  Complete
                </div>
                <div id="leetcodeimg" data-aos="flip-up">
                    <img src={Image} alt="Leetcode 50 Days - Soham kavde" />
                </div>
            </div>
        </>
    )
}

export default leetcode;