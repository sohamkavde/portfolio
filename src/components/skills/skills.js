import React from 'react';
import './skills.css';
const skills = () => {
    return (
        <section id='skills' >
            <div className="skills-head" id='skillsHead'>Skills</div>
            <div className="skill-content" data-aos="fade-right">
                <div className="progress-content">
                    <p><span>HTML</span> <span>100%</span></p>
                    <progress id="file" value="100" max="100"> 100% </progress>
                </div>
                <div className="progress-content">
                    <p><span>CSS</span><span>90%</span></p>
                    <progress id="file" value="90" max="100"> 90% </progress>
                </div>
                <div className="progress-content">
                    <p><span>JavaScript</span><span>92%</span></p>
                    <progress id="file" value="92" max="100"> 92% </progress>
                </div>
                <div className="progress-content">
                    <p><span>Reactjs</span><span>70%</span></p>
                    <progress id="file" value="70" max="100"> 70% </progress>
                </div>
                <div className="progress-content">
                    <p><span>php</span><span>90%</span></p>
                    <progress id="file" value="90" max="100"> 90% </progress>
                </div>
                <div className="progress-content">

                    <p><span>Mysqli</span><span>90%</span></p>
                    <progress id="file" value="90" max="100"> 90% </progress>
                </div>
                <div className="progress-content">
                    <p><span>C++</span><span>75%</span></p>
                    <progress id="file" value="75" max="100"> 75% </progress>
                </div>
                <div className="progress-content">
                    <p><span>python</span><span>65%</span></p>
                    <progress id="file" value="75" max="100"> 65%% </progress>
                </div>

            </div>







        </section>
    )
}

export default skills
