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
                <strong className="d-inline-block mb-2 text-primary">Kare-kare</strong>
                <h3 className="mb-0">Panlasang Pinoy</h3>
                <div className="mb-1 text-muted">Feb 20</div>
                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="stretched-link">Continue reading</a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src="https://st2.depositphotos.com/1354142/9956/i/950/depositphotos_99569856-stock-photo-kare-kare-filipino-oxtail-stew.jpg" className="d-block w-100 h-100" preserveAspectRatio="xMidYMid slice" alt="..." />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">Bikol express</strong>
                <h3 className="mb-0">Crispy Bikol express</h3>
                <div className="mb-1 text-muted">Nov 11</div>
                <p className="mb-auto">This involves making crispy lechon kawali out of pork belly. 
                It is then finished by pouring a rich, creamy, and spicy sauce on top.</p>
                <a href="#" className="stretched-link">Continue reading</a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src="https://panlasangpinoy.com/wp-content/uploads/2018/06/crispy-bicol-express-recipe-panlasang-pinoy.jpg" className="d-block w-100 h-100" preserveAspectRatio="xMidYMid slice" alt="..." />
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">Pork Humba</strong>
                <h3 className="mb-0">Kawaling Pinoy</h3>
                <div className="mb-1 text-muted">Nov 13</div>
                <p className="card-text mb-auto">Humba is a dish of tender pork, salted black beans, and an assortment of spices.</p>
                <a href="#" className="stretched-link">Continue reading</a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src="https://homefoodie.com/uploads/2019/11/Humba.jpg" className="d-block w-100 h-100" preserveAspectRatio="xMidYMid slice" alt="..." />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">Pininyahang Manok sa Gata</strong>
                <h3 className="mb-0">Pineapple Chicken in Coconut Milk</h3>
                <div className="mb-1 text-muted">Nov 11</div>
                <p className="mb-auto">A chicken with pineapple recipe in a coconut milk dish is the ideal chicken stew from the Philippine cuisine that you may make for your family.</p>
                <a href="#" className="stretched-link">Continue reading</a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src="https://i0.wp.com/yummyfood.ph/wp-content/uploads/2023/02/pininyahang-manok-sa-gata-recipe.jpg?w=768&ssl=1" className="d-block w-100 h-100" preserveAspectRatio="xMidYMid slice" alt="..." />
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
          <div className='row'>
            <div className="col-md-7 px-0">
              <h2 className="display-4 fst-italic">Three Major Parts in the 
              Philippines</h2>
              <p className="lead my-3">The Philippines is composed of three major islands known as Luzon, Visayas and Mindanao. 
              Food is one of the basic necessities of life. 
              Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes.</p>
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
              <img src="https://homefoodie.com/uploads/2020/3/Pork%20Sinigang_00A0255.jpg" alt="" />
              <div className="img-text">
                <div className="content1">
                  <h2>Pork Sinigang Recipe</h2>
                  <p>Ingredients:</p>
                  <ul>
                    <li>5 cups rice washing or water</li>
                    <li>1 kg. sliced pork pata</li>
                    <li>1 pc. medium onion (sliced)</li>
                    <li>2 pcs. medium tomato (sliced)</li>                                       
                  </ul>
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://www.unileverfoodsolutions.com.ph/dam/global-ufs/mcos/SEA/calcmenu/recipes/PH-recipes/the-vegetarian-butcher/sisig/vegetarian-sisig-main-header.jpg" alt="" />
              <div className="img-text">
                <div className="content1">
                  <h2>Vegetarian Sisig</h2>
                  <p>Ingredients:</p>
                  <ul>
                    <li>200.0g Lady's Choice Real Mayonnaise 5.5L
                        /50.0ml Knorr Liquid Seasoning 3.8L
                        /50.0g Calamansi Juice
                        /20.0ml Vinegar
                        /1.0g Black Pepper, ground</li>                   
                  </ul>
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://www.cookmunitybyajinomoto.com/wp-content/uploads/2022/03/Offline_Pakbet.jpg" alt="" />
              <div className="img-text">
                <div className="content1">
                  <h2>Pakbet</h2>
                  <p>Ingredients:</p>
                  <ul>
                    <li>4 pieces round eggplant cut in half
                        /2 pieces small bitter melon ampalaya, quartered
                        /½ bundle string beans cut into 2 inch length
                        /1 piece sweet potato kamote, quartered
                      </li>                    
                  </ul>
                </div>
              </div>
            </div>

            <div className="box">
              <img src="https://cdn.phonebooky.com/blog/wp-content/uploads/2019/09/13140031/Ricos.jpg" alt="" />
              <div className="img-text">
                <div className="content1">
                  <h2>Lechon</h2>
                  <p>Ingredients:</p>
                  <ul>
                    <li>Whole pig
                        /20 garlic cloves
                        /1 bunch cilantro, trimmed
                        /1 cup loosely packed fresh oregano leaves
                        /5 tablespoons kosher salt
                    </li>                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://panlasangpinoy.com/wp-content/uploads/2011/10/Batchoy.jpg" alt="" />
              <div className="img-text">
                <div className="content1">
                  <h2>Bachoy</h2>
                  <p>Ingredients:</p>
                  <ul>
                    <li>1 lb miki noodles boiled for 1 minute and drained
                        1 lb pork
                        1 lb pig's intentesines; cleaned boiled, and sliced
                        1/4 lb pig liver sliced into strips
                      </li>                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://scontent.fdvo2-2.fna.fbcdn.net/v/t1.6435-9/106777927_1250406835306633_3489755315153353188_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFHeUw3QCo6riMsr9xj1R_7udS1UmoFmdu51LVSagWZ2_bn3Zq0kaAOZhOdcmaNdBWLp9sg3CEnIlBoz3mD2jah&_nc_ohc=DuJ6Q5lczMUAX_SC3Qh&_nc_ht=scontent.fdvo2-2.fna&oh=00_AfB-AFpWH9lhIN_LYhssOI7iExeiakU8vt_9IBdO-0yK7g&oe=641AB336" alt="" />
              <div className="img-text">
                <div className="content1">
                  <h2>Sutokil</h2>
                  <p>Ingredients:</p>
                  <ul>
                    <li>Sutokil which stands for the verbs sugba 
                        (to grill), tola (to cook a fish/chicken-veggie soup dish) and kilaw 
                        (to prepare raw fish marinated in vinegar and spices).                                               
                      </li>                    
                  </ul>
                </div>
              </div>
            </div>

            <div className="box">
              <img src="https://homefoodie.com.ph/uploads/2019/13/Piyanggang%20Manok.jpg" alt="" />
              <div className="img-text">
                <div className="content1">
                  <h2>Piyanggang Manok</h2>
                  <p>Ingredients:</p>
                  <ul>
                    <li>4 large bone-in chicken thighs
                        2 whole coconuts, green husks removed
                      </li>                   
                  </ul>
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://www.lutongbahayrecipe.com/wp-content/uploads/2019/10/lutong-bahay-inihaw-na-panga-640x381.jpg" alt="" />
              <div className="img-text">
                <div className="content1">
                  <h2>Inihaw na Panga</h2>
                  <p>Ingredients:</p>
                  <ul>
                    <li>2 kg Large Fish (Tuna, Hapuka, Grouper) Jaw
                        1/2 cup soy sauce
                        juice from 1 lemon
                        salt
                        freshly ground black pepper
                      </li>                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="box">
              <img src="http://1.bp.blogspot.com/-aKDtr3h7HNg/TbrNWJh1OxI/AAAAAAAAAR0/4wJ0xHxYHjA/s1600/hinalang.JPG" alt="" />
              <div className="img-text">
                <div className="content1">
                  <h2>Food 6</h2>
                  <p>Ingredients:</p>
                  <ul>
                    <li>2 lbs Beef cut into strips.
                        1 ½ cup Beef stock.
                        ¾ cup Spring onions cut into 1-inch long.
                        6 pcs Green chilies cut into ½-inch long.
                      </li>                    
                  </ul>
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