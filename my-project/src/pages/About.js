import React from 'react';

const About = () => {
    return (
        <div className='about-page'>
            <h1 className='section-header '>Know something about us </h1>
            <div class="container about-us text-center">
              <div class="row">
                <div class="col align-self-start">
                  <h3>
                    Who are we?
                  </h3>
                  <br/>
                 <p>
                 We're a group of people passionate about food and cooking, and we believe that everyone should have access to tasty and nutritious meals. That's why we've created this website, where we share our favorite recipes with you.
                 </p>
                </div>
                <div class="col align-self-center">
                 <h3> Thank you for visiting our page!</h3>
                </div>
               
              </div>
            </div>

    <div className="team-area">
  <div className="container">
    <div className="row g-5">
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="single-team">
          <div className="img-area">
            <img src="https://i.postimg.cc/qRjsQy6r/1.jpg" className="img-responsive about-img" alt="" />
            <div className="social">
              <ul className="list-inline">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="img-text">
            <h4>Alexander Alfon</h4>
            <h5>Front-End Developer</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="single-team">
          <div className="img-area">
            <img src="https://i.postimg.cc/wMMhrMDm/2.jpg" className="img-responsive about-img" alt="" />
            <div className="social">
              <ul className="list-inline">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="img-text">
            <h4>Archimides Aquino</h4>
            <h5>Back-End Developer</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="single-team">
          <div className="img-area">
            <img src="https://i.postimg.cc/qRjsQy6r/1.jpg" className="img-responsive about-img" alt="" />
            <div className="social">
              <ul className="list-inline">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="img-text">
            <h4>Hilario Pabalate</h4>
            <h5>Back-End Developer</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 

<div className="container">
    <div className="row g-5 justify-content-center">
      <div className="col-4 col-xs-12">
        <div className="single-team">
          <div className="img-area">
            <img src="https://i.postimg.cc/qRjsQy6r/1.jpg" className="img-responsive about-img" alt="" />
            <div className="social">
              <ul className="list-inline">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="img-text">
            <h4>Kent Joel Quinones</h4>
            <h5>Front-End Developer</h5>
          </div>
        </div>
      </div>
      <div className="col-4 col-xs-12">
        <div className="single-team">
          <div className="img-area">
            <img src="https://i.postimg.cc/wMMhrMDm/2.jpg" className="img-responsive about-img" alt="" />
            <div className="social">
              <ul className="list-inline">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
              </ul>

              
            </div>
          </div>
          <div className="img-text">
            <h4>Alma Cleto</h4>
            <h5>Back-End Developer</h5>
          </div>
        </div>
      </div>
        </div>
        </div>
        </div>
    );
}

export default About;