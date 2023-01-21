import React from 'react';
import './education.css';
const education = () => {
  return (
    <section id='education'>
      <div className="educationHead" id='educationHead'>Education</div>
      <div className="college design">
        <b>IES COLLEGE OF TECHNOLOGY, BHOPAL (MP)</b>
        <p>2019-2023</p>
        <div className="subdesign design">
          <b>Internship</b>
          <p>2021</p>
        </div>
        <div className="subdesign design">
          <b>Learning</b>
          <p>2020</p>
        </div>
        <div className="subdesign design">
          <b>Web Development Bootcamp</b>
          <p>2019</p>
        </div>
      </div>
      <div className="college design">
        <b>Governement Higher Secondary School, Waraseoni </b>
        <p>2019</p>
        <div className="subdesign design">
          <b>12th</b>
          <p>2019 - Grade: 88%</p>
        </div>
        <div className="subdesign design">
          <b>Opportunity to participate</b>
          <p>2018 - State Level Science Fair, Jabalpur</p>
        </div>
      </div>
      <div className="college design">
        <b>Governement High School, Waraseoni </b>
        <p>2017</p>
        <div className="subdesign design">
          <b>10th</b>
          <p>2017 - Grade: 85%</p>
        </div>
        <div className="subdesign design">
          <b>Opportunity to participate:</b>
          <p>2016 -State Level, Khagol Vigyan Olympiad, Bhopal</p>
        </div>
      </div>
    </section>
  )
}

export default education
