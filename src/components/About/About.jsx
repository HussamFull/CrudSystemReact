import React from 'react';
import syriaMap from './Syria1.jpg'; // أو .jpg أو .svg حسب نوع الملف

export default function About() {
    return (

<section className="py-5">
  <div className="container">
    <div className="row align-items-center gx-4">
      <div className="col-md-5">
        <div className="ms-md-2 ms-lg-5"><img className="img-fluid rounded-3" src={syriaMap} /></div>
      </div>
      <div className="col-md-6 offset-md-1">
        <div className="ms-md-2 ms-lg-5">
          <span className="text-muted">About Syria</span>
          <h2 className="display-5 fw-bold">About Us</h2>
          <p className="lead">            Syria, officially the Syrian Arab Republic, is a country in West Asia located in the Eastern Mediterranean and the Levant. It is bounded by the Mediterranean Sea to the west, Turkey to the north, Iraq to the east and southeast, Jordan to the south, and Israel and Lebanon to the southwest. It is under a transitional government and comprises 14 governorates. Damascus is the capital and largest city. With a population of 25 million across an area of 185,180 square kilometres (71,500 sq mi), it is the 57th-most populous and 87th-largest country.
          </p>
          <p className="lead mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    );
}