import React from 'react';
import {useRef} from "react";
import Testimonials from '../Components/Testimonials';
import bannerVid from '../assets/video2.mp4';

const Home = () => {
    const introduction = useRef(null);

    const scrollToSection = (elementRef) =>{
      window.scroll({
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
      });
    };
  return (
    <div className='home-page'>
       
      <div className='container-fluid banner'>
            <div className="content">
              <h1>HAK foodblog</h1>
              <button onClick={() => scrollToSection(introduction)} type="button" className='start-btn' >View Recipies</button>
              
            </div>
          <video src={bannerVid} autoPlay  loop muted />
        <div>
          <div ref={introduction}  className="wrapper intruduction" id='introduction'>
            <h1> this is an intruduction to our site</h1>
              <p>
              rovide a valid href, but still need the element to resemble a link, use a button and change 
              it with appropriate 
              </p>
          </div>
        </div>
      </div>

      <header className="blog-header" >
        <div className="container">
          <div className="nav-scroller py-1 mb-2">
            <nav className="nav nav-menu d-flex  justify-content-between mx-5">
              <a className="p-2 link-secondary" href="#">Menu</a>
              <a className="p-2 link-secondary" href="#">Chicken</a>
              <a className="p-2 link-secondary" href="#">Pork</a>
              <a className="p-2 link-secondary" href="#">Beef</a>
              <a className="p-2 link-secondary" href="#">Pork</a>
              <a className="p-2 link-secondary" href="#">Vegetables</a>
              <a className="p-2 link-secondary" href="#">Desserts</a>
              <a className="p-2 link-secondary" href="#">Food Destinations</a>
            </nav>
          </div>
        </div>
      </header>


      <main className="container my-5">
        <h1 className="section-header">Featured Foods</h1>
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">World</strong>
                <h3 className="mb-0">Featured post</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="stretched-link">Continue reading</a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-mGvg0mSGqSgisWgwGnVji8M8iDxiE2EiUGzRwjJQgeAACvir1XxNj6NqhYVXCxgjg4&usqp=CAU" className="d-block w-100 h-100" preserveAspectRatio="xMidYMid slice" alt="..." />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">Design</strong>
                <h3 className="mb-0">Post title</h3>
                <div className="mb-1 text-muted">Nov 11</div>
                <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="stretched-link">Continue reading</a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShG00v1pL_U6VG_QkptjP-aNrIV9L6euCuvg&usqp=CAU" className="d-block w-100 h-100" preserveAspectRatio="xMidYMid slice" alt="..." />
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">World</strong>
                <h3 className="mb-0">Featured post</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="stretched-link">Continue reading</a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-mGvg0mSGqSgisWgwGnVji8M8iDxiE2EiUGzRwjJQgeAACvir1XxNj6NqhYVXCxgjg4&usqp=CAU" className="d-block w-100 h-100" preserveAspectRatio="xMidYMid slice" alt="..." />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">Design</strong>
                <h3 className="mb-0">Post title</h3>
                <div className="mb-1 text-muted">Nov 11</div>
                <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="stretched-link">Continue reading</a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShG00v1pL_U6VG_QkptjP-aNrIV9L6euCuvg&usqp=CAU" className="d-block w-100 h-100" preserveAspectRatio="xMidYMid slice" alt="..." />
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
          <div className='row'>
            <div className="col-md-7 px-0">
              <h2 className="display-4 fst-italic">What Makes Filipino Food So Special</h2>
              <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
              <p className="lead mb-0"><a href="#" className="text-white fw-bold">Continue reading...</a></p>
            </div>
            <div className="col-5 d-none d-lg-block">
              <img src="https://jaysonrobert.files.wordpress.com/2016/08/philippine-cuisine-pinoy-food.jpg" className="d-block w-100 h-100" preserveAspectRatio="xMidYMid slice" alt="..." />
            </div>
          </div>
        </div>

        <div className="container">
          <h2 className="section-header">Food Recipes</h2>
          <div className="main-content">
            <div className="box">
              <img src="https://i.pinimg.com/736x/6c/52/81/6c528187700fb46afda2b184e7fc11ae.jpg" alt="" />
              <div className="img-text">
                <div className="content">
                  <h2>Food 1</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda nulla aspernatur enim ut, minima.</p>
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn4OV2HGXnUgokhujx8qz2_W_kG-gW3pfPkg&usqp=CAU" alt="" />
              <div className="img-text">
                <div className="content">
                  <h2>Food 2</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda nulla aspernatur enim ut, minima.</p>
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://www.ulampinoy.com/static/images/chopsuey-cooking-wok.jpg?nf_resize=fit&w=960" alt="" />
              <div className="img-text">
                <div className="content">
                  <h2>Food 3</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda nulla aspernatur enim ut, minima.</p>
                </div>
              </div>
            </div>

            <div className="box">
              <img src="https://pbs.twimg.com/media/C3UqzZ4WMAAe1DG.jpg" alt="" />
              <div className="img-text">
                <div className="content">
                  <h2>Food 4</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda nulla aspernatur enim ut, minima.</p>
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://i0.wp.com/hicaps.com.ph/wp-content/uploads/2022/07/sinigang-e1658714142155.jpg?resize=350%2C200&ssl=1" alt="" />
              <div className="img-text">
                <div className="content">
                  <h2>Food 5</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda nulla aspernatur enim ut, minima.</p>
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://www.knorr.com/content/dam/unilever/knorr_world/philippines/photography_and_pictures/pinoy-ulam-list-adobo-85776428-jpg.jpg" alt="" />
              <div className="img-text">
                <div className="content">
                  <h2>Food 6</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda nulla aspernatur enim ut, minima.</p>
                </div>
              </div>
            </div>

            <div className="box">
              <img src="https://pbs.twimg.com/media/C3UqzZ4WMAAe1DG.jpg" alt="" />
              <div className="img-text">
                <div className="content">
                  <h2>Food 4</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda nulla aspernatur enim ut, minima.</p>
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://i0.wp.com/hicaps.com.ph/wp-content/uploads/2022/07/sinigang-e1658714142155.jpg?resize=350%2C200&ssl=1" alt="" />
              <div className="img-text">
                <div className="content">
                  <h2>Food 5</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda nulla aspernatur enim ut, minima.</p>
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://www.knorr.com/content/dam/unilever/knorr_world/philippines/photography_and_pictures/pinoy-ulam-list-adobo-85776428-jpg.jpg" alt="" />
              <div className="img-text">
                <div className="content">
                  <h2>Food 6</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda nulla aspernatur enim ut, minima.</p>
                </div>
              </div>
            </div>
          </div>
          <Testimonials />
        </div>
      </main>
    </div>
  );
}

export default Home;