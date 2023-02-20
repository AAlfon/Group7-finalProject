import React from 'react';
import { useRef } from "react";
import Testimonials from '../Components/Testimonials';
import bannerVid from '../assets/video2.mp4';

const Home = () => {

  const introduction = useRef(null);

  return (
      
    <div> 
      <video id="myVideo" loop autoPlay muted >
        <source src={bannerVid} type="video/mp4" />
      </video>

      <div className="content">
      <h1>HAK  Filipino foodblog</h1>
         {/* button link */}
         <a href="./#introduction"><button className='btn start-btn'>Click to View Recipies</button></a>
     </div>
     

     
<div  >
    
      <main className="container my-5">
        <h1 className="section-header  titles1" id='introduction' ref={introduction}>Menu</h1>
        <header  className="blog-header intruduction">
        <div className="container-fluid">
          <div className="nav-scroller py-1 mb-2">
            <nav className="nav nav-menu d-flex  justify-content-between mx-5">
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
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">Kare-Kare</strong>
                <h3 className="mb-0">Panlasang Pinoy</h3>
                <div className="mb-1 text-muted">Dec 19</div>
                <p className="card-text mb-auto">Kare-kare is a Philippine stew that features a thick savory peanut sauce.
                </p>
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
                <strong className="d-inline-block mb-2 text-success">Bicol Express</strong>
                <h3 className="mb-0">Lechon Kawali Bicol Express</h3>
                <div className="mb-1 text-muted">Dec 19</div>
                <p className="mb-auto">Crispy Bicol Express. This involves making crispy lechon kawali out of pork belly.</p>                
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
                <strong className="d-inline-block mb-2 text-primary">Humba with pineapple</strong>
                <h3 className="mb-0">Kawaling Pinoy</h3>
                <div className="mb-1 text-muted">Dec 19</div>
                <p className="card-text mb-auto">Humba with pineapple. This Visayan version of adobo is easy to make and sure to be a family favorite.</p>
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
                <strong className="d-inline-block mb-2 text-success">Lechon Baboy</strong>
                <h3 className="mb-0">The World’s Best Roasted Pig</h3>
                <div className="mb-1 text-muted">Nov 11</div>
                <p className="mb-auto">Litson Baboy is a classic Filipino dish, and it originated in the Philippines.</p>
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
              <h2 className="display-4 fst-italic">Three Major Parts in the Philippines</h2>
              <p className="lead my-3">Luzon, Visayas, and Mindanao. Food is one of the basic necessities of life. Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes.</p>
              <p className="lead mb-0"><a href="#" className="text-white fw-bold">Continue reading...</a></p>
            </div>
            <div className="col-5 d-none d-lg-block">
              <img src="https://jaysonrobert.files.wordpress.com/2016/08/philippine-cuisine-pinoy-food.jpg" className="d-block w-100 h-100" preserveAspectRatio="xMidYMid slice" alt="..." />
            </div>
          </div>
        </div>

        <div className="container">
          <h2 className="section-header titles">Food Recipes</h2>
          <div className="main-content">
            <div className="box">
              <img src="https://panlasangpinoyrecipes.b-cdn.net/wp-content/uploads/2013/07/MAGIC-PORK-PATA-SALO-SALO1-680x350.jpg" alt="" />
              <div className="img-text">
<<<<<<< Updated upstream
                <div className="content1">
                  <h2>Food 1</h2>
                  <p>ietur adipisicing elit. Quam assumenda nulla aspernatur enim ut, minima.</p>
=======
                <div className="content">
                  <h2>Pork Sinigang Recipe</h2>
                  <p>Ingredients</p>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
>>>>>>> Stashed changes
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://www.unileverfoodsolutions.com.ph/dam/global-ufs/mcos/SEA/calcmenu/recipes/PH-recipes/the-vegetarian-butcher/sisig/vegetarian-sisig-main-header.jpg" alt="" />
              <div className="img-text">
<<<<<<< Updated upstream
                <div className="content1">
                  <h2>Food 2</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda nulla aspernatur enim ut, minima.</p>
=======
                <div className="content">
                  <h2>Vegetarian Sisig</h2>
                  <p>Ingredients</p>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
>>>>>>> Stashed changes
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://panlasangpinoy.com/wp-content/uploads/2009/06/Pinakbet-Ilocano-Recipe-Panlasang-Pinoy.jpg" alt="" />
              <div className="img-text">
<<<<<<< Updated upstream
                <div className="content1">
                  <h2>Food 3</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda nulla aspernatur enim ut, minima.</p>
=======
                <div className="content">
                  <h2>Pakbet</h2>
                  <p>Ingredients</p>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
>>>>>>> Stashed changes
                </div>
              </div>
            </div>

            <div className="box">
              <img src="https://cdn.phonebooky.com/blog/wp-content/uploads/2019/09/13140031/Ricos.jpg" alt="" />
              <div className="img-text">
<<<<<<< Updated upstream
                <div className="content1">
                  <h2>Food 4</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda nulla aspernatur enim ut, minima.</p>
=======
                <div className="content">
                  <h2>Lechon</h2>
                  <p>Ingredients</p>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
>>>>>>> Stashed changes
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://panlasangpinoy.com/wp-content/uploads/2011/10/Batchoy.jpg" alt="" />
              <div className="img-text">
<<<<<<< Updated upstream
                <div className="content1">
                  <h2>Food 5</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda nulla aspernatur enim ut, minima.</p>
=======
                <div className="content">
                  <h2>Bachoy</h2>
                  <p>Ingredients</p>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
>>>>>>> Stashed changes
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.6435-9/106941582_1250406865306630_8594428839783895975_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE74LWuBWHPgbPIWJFP4bxeYgvW5o15609iC9bmjXnrTzDlzGVRBpV-VUvTPhXvEeHB0vRfHyb3a4K8kohkEcis&_nc_ohc=hMY5AW-aimcAX9YaNxf&_nc_ht=scontent.fdvo2-1.fna&oh=00_AfCBQxAuV-NfjKcZL5UdC-53IIStOmPoEWxdHgaNDWtkaQ&oe=641A95BD" alt="" />
              <div className="img-text">
<<<<<<< Updated upstream
                <div className="content1">
                  <h2>Food 6</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda nulla aspernatur enim ut, minima.</p>
=======
                <div className="content">
                  <h2>SuToKil</h2>
                  <p>Ingredients</p>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
>>>>>>> Stashed changes
                </div>
              </div>
            </div>

            <div className="box">
              <img src="https://pbs.twimg.com/media/C3UqzZ4WMAAe1DG.jpg" alt="" />
              <div className="img-text">
                <div className="content1">
                  <h2>Food 4</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda nulla aspernatur enim ut, minima.</p>
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://i0.wp.com/hicaps.com.ph/wp-content/uploads/2022/07/sinigang-e1658714142155.jpg?resize=350%2C200&ssl=1" alt="" />
              <div className="img-text">
                <div className="content1">
                  <h2>Food 5</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam assumenda nulla aspernatur enim ut, minima.</p>
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://www.knorr.com/content/dam/unilever/knorr_world/philippines/photography_and_pictures/pinoy-ulam-list-adobo-85776428-jpg.jpg" alt="" />
              <div className="img-text">
                <div className="content1">
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
    </div>
  );
}

export default Home;