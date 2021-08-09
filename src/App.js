import './App.css';

function App() {
  return (
    <div className="App">

    <nav className="navbar navbar-default navbar-fixed-top before-color">
      <div className="container">
          <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand alo" href="index.html">MFS Bazaar</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right scroll-to">
                  <li className="active"><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#work">Work</a></li>
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="post-single.html">Blog Post</a></li>                      
                  <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">Pages <span className="caret"></span></a>
                      <ul className="dropdown-menu" role="menu">
                          <li><a href="typography.html">Typography</a></li>
                          
                      </ul>
                  </li>
                  <li><a href="#contact">Contact</a></li>

              </ul>
          </div>
      </div>
     </nav>

      <div className="fullwidthbanner" id="home">
        <div className="tp-banner">
          <ul>

              <li data-transition="fade" data-slotamount="7" data-masterspeed="1500">

                  <img src="images/bg-1.jpg" alt="desk" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat"/>

                  <div className="tp-caption slider-title" data-x="center" data-y="center"  data-voffset="-30" data-speed="500" data-start="1200" data-easing="Power4.easeInOut">
                      welcome to <span>MFS Bazaar</span>
                  </div>

                  <div className="tp-caption slider-caption" data-x="center" data-y="center" data-voffset="40" data-speed="500" data-start="1800" data-easing="Power4.easeInOut" data-captionhidden="on">
                    An internationally recognized, independent business management firm
                  </div> 

                  
                  <div className="tp-caption slider-button scroll-to" data-x="center" data-y="center" data-voffset="120" data-speed="500" data-start="2400" data-easing="Power4.easeInOut" data-captionhidden="on">
                      <a className="btn btn-white" href="#about">See more</a>
                  </div> 
              </li>

              <li data-transition="fade" data-slotamount="7" data-masterspeed="1500">

                  <img src="images/bg-3.jpg" alt="desk" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat"/>

                  
                  <div className="tp-caption slider-title" data-x="center" data-y="center"  data-voffset="-30" data-speed="500" data-start="1200" data-easing="Power4.easeInOut">
                      mfs <span>Agency</span>
                  </div> 

            
                  <div className="tp-caption slider-caption" data-x="center" data-y="center" data-voffset="40" data-speed="500" data-start="1800" data-easing="Power4.easeInOut" data-captionhidden="on">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit aute irure
                  </div> 

                 
                  <div className="tp-caption slider-button scroll-to" data-x="center" data-y="center" data-voffset="120" data-speed="500" data-start="2400" data-easing="Power4.easeInOut" data-captionhidden="on">
                      <a className="btn btn-white" href="#about">See more</a>
                  </div> 
              </li>
          </ul>
      </div>
  </div>

<section id="about" className="section-padding">
      <div className="container">
          <div className="row">
              <div className="col-sm-8 col-sm-offset-2 text-center">
                  <div className="section-title">
                      <h1>MFS <span className="alo">Bazaar</span></h1> 
                      <span className="border-line"></span>
                      <p className="lead subtitle-caption">
                          we are a creative agency located in <span className="colored-text">sydney, australia.</span> It is a long established fact that a reader will be distracted by the readable content.
                      </p>
                  </div>
              </div>
          </div>

          <div className="row">
              <div className="col-sm-6 margin-bottom30">
                  <div className="feature-icon-wrap clearfix">
                      <div className="left-side-icon">
                          <i className="ion-ios-lightbulb-outline front-icon"></i>
                          <i className="ion-ios-lightbulb-outline back-icon"></i>
                      </div>
                      <div className="features-text-right">
                          <h3>creative Designs</h3>                         
                          <p>
                              Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper tellus. Cras porttitor massa.
                          </p>
                      </div>
                  </div>
              </div>
              <div className="col-sm-6 margin-bottom30">
                  <div className="feature-icon-wrap clearfix">
                      <div className="left-side-icon">
                          <i className="ion-ios-gear-outline front-icon"></i>
                          <i className="ion-ios-gear-outline back-icon"></i>
                      </div>
                      <div className="features-text-right">
                          <h3>Great support</h3>                         
                          <p>
                              Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper tellus. Cras porttitor massa.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-6 margin-bottom30">
                  <div className="feature-icon-wrap clearfix">
                      <div className="left-side-icon">
                          <i className="ion-iphone front-icon"></i>
                          <i className="ion-iphone back-icon"></i>
                      </div>
                      <div className="features-text-right">
                          <h3>Fully Responsive</h3>                         
                          <p>
                              Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper tellus. Cras porttitor massa.
                          </p>
                      </div>
                  </div>
              </div>
              <div className="col-sm-6 margin-bottom30">
                  <div className="feature-icon-wrap clearfix">
                      <div className="left-side-icon">
                          <i className="ion-ios-people-outline front-icon"></i>
                          <i className="ion-ios-people-outline back-icon"></i>
                      </div>
                      <div className="features-text-right">
                          <h3>Dedicated Team</h3>                         
                          <p>
                              Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper tellus. Cras porttitor massa.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>    
  </section>   

<div className="funfacts parallax-1">
      <div className="container">
          <div className="row">
              <div className="col-sm-3 margin-bottom30 text-center">
                  <div className="fact-box">
                      <h2>654</h2>                          
                      <h5>Happy Clients</h5>
                      <span className="border-line"></span>
                  </div>
              </div>
              <div className="col-sm-3 margin-bottom30 text-center">
                  <div className="fact-box">
                      <h2>832</h2>                          
                      <h5>Projects finish</h5>
                      <span className="border-line"></span>
                  </div>
              </div>
              <div className="col-sm-3 margin-bottom30 text-center">
                  <div className="fact-box">
                      <h2>800</h2>                          
                      <h5>Pizza ordered </h5>
                      <span className="border-line"></span>
                  </div>
              </div>
              <div className="col-sm-3 margin-bottom30 text-center">
                  <div className="fact-box">
                      <h2>750</h2>                          
                      <h5>Cups of coffee</h5>
                      <span className="border-line"></span>
                  </div>
              </div>

          </div>
      </div>
  </div>

<div className="team">
      <div className="container">
          <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                  <div className="section-title text-center">
                      <h1> <span className="alo">Bonativo</span> team</h1> 
                      <span className="border-line"></span>
                      <p className="lead subtitle-caption">
                          Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper tellus. Cras porttitor massa.
                      </p>
                  </div>
              </div>
          </div>
          <div className="row">

              <div className="col-sm-4 margin-bottom30">
                  <div className="team-box">
                      <img src="images/team-1.jpg" className="img-responsive" alt=""/>

                      <ul className="social list-inline">
                          <li><a href="#"><i className="icon icon-social-twitter"></i></a></li>
                          <li><a href="#"><i className="icon icon-social-facebook"></i></a></li>
                          <li><a href="#"><i className="icon icon-social-dribbble"></i></a></li>
                      </ul>
                  </div>
                  <div className="team-desc">
                      <h4>Daniel Smith</h4>
                      <em>Manager</em>
                  </div>
              </div>
              <div className="col-sm-4 margin-bottom30">
                  <div className="team-box">
                      <img src="images/team-2.jpg" className="img-responsive" alt=""/>                       
                      <ul className="social list-inline">
                          <li><a href="#"><i className="icon icon-social-twitter"></i></a></li>
                          <li><a href="#"><i className="icon icon-social-facebook"></i></a></li>
                          <li><a href="#"><i className="icon icon-social-dribbble"></i></a></li>
                      </ul>
                  </div>
                  <div className="team-desc">
                      <h4>Daniel Smith</h4>
                      <em>Manager</em>
                  </div>
              </div>
              <div className="col-sm-4 margin-bottom30">
                  <div className="team-box">
                      <img src="images/team-3.jpg" className="img-responsive" alt=""/>                     
                      <ul className="social list-inline">
                          <li><a href="#"><i className="icon icon-social-twitter"></i></a></li>
                          <li><a href="#"><i className="icon icon-social-facebook"></i></a></li>
                          <li><a href="#"><i className="icon icon-social-dribbble"></i></a></li>
                      </ul>
                  </div>
                  <div className="team-desc">
                      <h4>Daniel Smith</h4>
                      <em>Manager</em>
                  </div>
              </div>
          </div>
      </div>
  </div>


<section id="services" className="section-padding">
      <div className="container">
          <div className="row">
              <div className="col-sm-8 col-sm-offset-2 text-center">
                  <div className="section-title">
                      <h1>Our <span className="colored-text">Services</span></h1> 
                      <span className="border-line"></span>
                      <p className="lead subtitle-caption">
                          Why you choose <span className="colored-text">Bonativo</span>
                      </p>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-6 margin-bottom30">
                  <div className="feature-icon-wrap services-icons clearfix">
                      <div className="left-side-icon">
                          <i className="ion-ios-paperplane-outline front-icon"></i>
                      </div>
                      <div className="features-text-right">
                          <h3>Marketing</h3>                         
                          <p>
                              Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper tellus. Cras porttitor massa.
                          </p>
                      </div>
                  </div>
              </div>
              <div className="col-sm-6 margin-bottom30">
                  <div className="feature-icon-wrap services-icons clearfix">
                      <div className="left-side-icon">
                          <i className="ion-ios-browsers-outline front-icon"></i>
                      </div>
                      <div className="features-text-right">
                          <h3>Web & Graphics design</h3>                         
                          <p>
                              Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper tellus. Cras porttitor massa.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-6 margin-bottom30">
                  <div className="feature-icon-wrap services-icons clearfix">
                      <div className="left-side-icon">
                          <i className="ion-ios-world-outline front-icon"></i>
                      </div>
                      <div className="features-text-right">
                          <h3>Social Media</h3>                         
                          <p>
                              Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper tellus. Cras porttitor massa.
                          </p>
                      </div>
                  </div>
              </div>
              <div className="col-sm-6 margin-bottom30">
                  <div className="feature-icon-wrap services-icons clearfix">
                      <div className="left-side-icon">
                          <i className="ion-ios-color-wand-outline front-icon"></i>
                      </div>
                      <div className="features-text-right">
                          <h3>Creative ideas</h3>                         
                          <p>
                              Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper tellus. Cras porttitor massa.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-6 margin-bottom30">
                  <div className="feature-icon-wrap services-icons clearfix">
                      <div className="left-side-icon">
                          <i className="ion-ios-crop front-icon"></i>
                      </div>
                      <div className="features-text-right">
                          <h3>Responsive Design</h3>                         
                          <p>
                              Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper tellus. Cras porttitor massa.
                          </p>
                      </div>
                  </div>
              </div>
              <div className="col-sm-6 margin-bottom30">
                  <div className="feature-icon-wrap services-icons clearfix">
                      <div className="left-side-icon">
                          <i className="ion-ios-people-outline front-icon"></i>
                      </div>
                      <div className="features-text-right">
                          <h3>Customer Support</h3>                         
                          <p>
                              Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper tellus. Cras porttitor massa.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
     
     <div className="testimonials parallax-2">
      <div className="container">
          <div className="row">
              <div className="col-sm-8 col-sm-offset-2 text-center">
                  <div className="flexslider testislider">
                      <ul className="slides">
                          <li>
                              <div className="slide-items">
                                  <img src="images/team-1.jpg" alt=""/>
                                  <p>
                                      Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper tellus. 
                                  </p>
                                  <h5>Maria Navratilova - Codeflicks inc.</h5>
                              </div>
                          </li>
                          <li>
                              <div className="slide-items">
                                  <img src="images/team-2.jpg" alt=""/>
                                  <p>
                                      Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper tellus. 
                                  </p>
                                  <h5>Maria Navratilova - Codeflicks inc.</h5>
                              </div>
                          </li>
                          <li>
                              <div className="slide-items">
                                  <img src="images/team-3.jpg" alt=""/>
                                  <p>
                                      Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper tellus. 
                                  </p>
                                  <h5>Maria Navratilova - Codeflicks inc.</h5>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    </div>


    <div className="price-tables section-padding">
      <div className="container">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2 text-center">
                  <div className="section-title">
                      <h1>Our <span className="colored-text">Pricing</span></h1> 
                      <span className="border-line"></span>
                      <p className="lead subtitle-caption">
                           Vivamus congue diam vitae tortor imperdiet congue.
                      </p>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-4 margin-bottom30">
                  <div className="price-box text-center">
                      <div className="header ">
                          <h3>Standard</h3>
                          <div className="price">
                              <h2>$3.99</h2>
                              <span>Start price / month</span>
                          </div>
                      </div>
                      <ul className="list-unstyled">
                          <li>10 GB Storage Space</li>
                          <li>50 GB Bandwidth</li>
                          <li>Unlimited Users</li>
                          <li>No Time Tracking</li>
                          <li>Enhanced Security</li>
                      </ul>
                      <div className="price-footer">
                          <h4><a href="#" className="btn btn-border-black">Buy Now</a></h4>
                      </div>
                  </div>
              </div>
               <div className="col-sm-4 margin-bottom30">
                  <div className="price-box text-center">
                      <div className="header active">
                          <h3>Standard</h3>
                          <div className="price">
                              <h2>$3.99</h2>
                              <span>Start price / month</span>
                          </div>
                      </div>
                      <ul className="list-unstyled">
                          <li>10 GB Storage Space</li>
                          <li>50 GB Bandwidth</li>
                          <li>Unlimited Users</li>
                          <li>No Time Tracking</li>
                          <li>Enhanced Security</li>
                      </ul>
                      <div className="price-footer">
                          <h4><a href="#" className="btn btn-border-theme">Buy Now</a></h4>
                      </div>
                  </div>
              </div>
               <div className="col-sm-4 margin-bottom30">
                  <div className="price-box text-center">
                      <div className="header">
                          <h3>Standard</h3>
                          <div className="price">
                              <h2>$3.99</h2>
                              <span>Start price / month</span>
                          </div>
                      </div>
                      <ul className="list-unstyled">
                          <li>10 GB Storage Space</li>
                          <li>50 GB Bandwidth</li>
                          <li>Unlimited Users</li>
                          <li>No Time Tracking</li>
                          <li>Enhanced Security</li>
                      </ul>
                      <div className="price-footer">
                          <h4><a href="#" className="btn btn-border-black">Buy Now</a></h4>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>

    <div className="cta cta-bg">
          <div className="container text-center scroll-to">
              <h1>WE'VE GOT PLENTY MORE TO SAY</h1>
              <a href="#contact" className="btn btn-white btn-radius btn-lg">Let's talk</a>
          </div>
      </div>

      <section id="work" className="section-padding">
        <div className="container">
          <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                  <div className="section-title text-center">
                      <h1> <span className="alo">Bonativo</span> Portfolio</h1> 
                      <span className="border-line"></span>
                      <p className="lead subtitle-caption">
                          Vivamus congue diam vitae tortor imperdiet congue.
                      </p>
                  </div>
              </div>
          </div>


          <div className="row">
              <div className="col-sm-4">
                  <div className="entry-thumb portfolio-thumb">
                      <div className="imgoverlay text-light">
                          <a href="images/work-1.jpg" className="load-content prettyPhoto" data-gal="prettyPhoto[name_gallery]">
                              <img src="images/work-1.jpg" className="img-responsive" alt=""/>
                              <div className="overlay"><span className="overlaycolor"></span><div className="overlayinfo" style= {{marginTop:'-11px'}} ><h6>Branding</h6></div></div>
                          </a>
                      </div>
                  </div>
              </div>
              <div className="col-sm-4">
                  <div className="entry-thumb portfolio-thumb">
                      <div className="imgoverlay text-light">
                          <a href="images/work-2.jpg" className="load-content prettyPhoto" data-gal="prettyPhoto[name_gallery]">
                              <img src="images/work-2.jpg" className="img-responsive" alt=""/>
                              <div className="overlay"><span className="overlaycolor"></span><div className="overlayinfo" style= {{marginTop:'-11px'}}><h6>Branding</h6></div></div>
                          </a>
                      </div>
                  </div>
              </div>
              <div className="col-sm-4">
                  <div className="entry-thumb portfolio-thumb">
                      <div className="imgoverlay text-light">
                          <a href="images/work-3.jpg" className="load-content prettyPhoto" data-gal="prettyPhoto[name_gallery]">
                              <img src="images/work-3.jpg" className="img-responsive" alt=""/>
                              <div className="overlay"><span className="overlaycolor"></span><div className="overlayinfo" style= {{marginTop:'-11px'}}><h6>Branding</h6></div></div>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-4">
                  <div className="entry-thumb portfolio-thumb">
                      <div className="imgoverlay text-light">
                          <a href="images/work-4.jpg" className="load-content prettyPhoto" data-gal="prettyPhoto[name_gallery]">
                              <img src="images/work-4.jpg" className="img-responsive" alt=""/>
                              <div className="overlay"><span className="overlaycolor"></span><div className="overlayinfo" style= {{marginTop:'-11px'}}><h6>Branding</h6></div></div>
                          </a>
                      </div>
                  </div>
              </div>
              <div className="col-sm-4">
                  <div className="entry-thumb portfolio-thumb">
                      <div className="imgoverlay text-light">
                          <a href="images/work-5.jpg" className="load-content prettyPhoto" data-gal="prettyPhoto[name_gallery]">
                              <img src="images/work-5.jpg" className="img-responsive" alt=""/>
                              <div className="overlay"><span className="overlaycolor"></span><div className="overlayinfo" style= {{marginTop:'-11px'}}><h6>Branding</h6></div></div>
                          </a>
                      </div>
                  </div>
              </div>
              <div className="col-sm-4">
                  <div className="entry-thumb portfolio-thumb">
                      <div className="imgoverlay text-light">
                          <a href="images/work-6.jpg" className="load-content prettyPhoto" data-gal="prettyPhoto[name_gallery]">
                              <img src="images/work-6.jpg" className="img-responsive" alt=""/>
                              <div className="overlay"><span className="overlaycolor"></span><div className="overlayinfo" style= {{marginTop:'-11px'}}><h6>Branding</h6></div></div>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-4">
                  <div className="entry-thumb portfolio-thumb">
                      <div className="imgoverlay text-light">
                          <a href="images/work-7.jpg" className="load-content prettyPhoto" data-gal="prettyPhoto[name_gallery]">
                              <img src="images/work-7.jpg" className="img-responsive" alt=""/>
                              <div className="overlay"><span className="overlaycolor"></span><div className="overlayinfo" style= {{marginTop:'-11px'}}><h6>Branding</h6></div></div>
                          </a>
                      </div>
                  </div>
              </div>
              <div className="col-sm-4">
                  <div className="entry-thumb portfolio-thumb">
                      <div className="imgoverlay text-light">
                          <a href="images/work-8.jpg" className="load-content prettyPhoto" data-gal="prettyPhoto[name_gallery]">
                              <img src="images/work-8.jpg" className="img-responsive" alt=""/>
                              <div className="overlay"><span className="overlaycolor"></span><div className="overlayinfo" style= {{marginTop:'-11px'}}><h6>Branding</h6></div></div>
                          </a>
                      </div>
                  </div>
              </div>
              <div className="col-sm-4">
                  <div className="entry-thumb portfolio-thumb">
                      <div className="imgoverlay text-light">
                          <a href="images/work-9.jpg" className="load-content prettyPhoto" data-gal="prettyPhoto[name_gallery]">
                              <img src="images/work-9.jpg" className="img-responsive" alt=""/>
                              <div className="overlay"><span className="overlaycolor"></span><div className="overlayinfo" style= {{marginTop:'-11px'}}><h6>Branding</h6></div></div>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>  

    <section id="blog" className="section-padding">
      <div className="container">
          <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                  <div className="section-title text-center">
                      <h1> <span className="alo">Bonativo</span> News</h1> 
                      <span className="border-line"></span>
                      <p className="lead subtitle-caption">
                          Vivamus congue diam vitae tortor imperdiet congue.
                      </p>
                  </div>
              </div>
          </div>
      </div>

      <div className="news-wrapper  container-fluid">
          <div className='row'>
          <div className="col-sm-6 text-center no-padding">
              <a className="news-inner" href="post-single.html" style={{background:'url(images/bg-1.jpg) no-repeat; background-size: cover'}}>
                  <div className="post-overlay"></div>
                  <div className="post-preview-content">
                      <h4 className="date">24 April, 2015</h4>
                      <h2 className="title">Clean & Flat one page theme</h2>
                      <span className="border-line"></span>
                      <p className="author">By Maria</p>
                  </div>
              </a>
          </div>
          <div className="col-sm-6 text-center no-padding">
              <a className="news-inner" href="post-single.html" style={{background:'background:url(images/bg-2.jpg) no-repeat; background-size: cover'}}>
                  <div className="post-overlay"></div>
                  <div className="post-preview-content">
                      <h4 className="date">24 April, 2015</h4>
                      <h2 className="title">Clean & Flat one page theme</h2>
                      <span className="border-line"></span>
                      <p className="author">By Maria</p>
                  </div>
              </a>
          </div>
          <div className="col-sm-6 text-center no-padding">
              <a className="news-inner" href="post-single.html"  style={{background:'background:url(images/bg-3.jpg) no-repeat; background-size: cover'}} >
                  <div className="post-overlay"></div>
                  <div className="post-preview-content">
                      <h4 className="date">24 April, 2015</h4>
                      <h2 className="title">Clean & Flat one page theme</h2>
                      <span className="border-line"></span>
                      <p className="author">By Maria</p>
                  </div>
              </a>
          </div>
          <div className="col-sm-6 text-center no-padding">
              <a className="news-inner" href="post-single.html" style={{background:'background:url(images/bg-4.jpg) no-repeat; background-size: cover'}} >
                  <div className="post-overlay"></div>
                  <div className="post-preview-content">
                      <h4 className="date">24 April, 2015</h4>
                      <h2 className="title">Clean & Flat one page theme</h2>
                      <span className="border-line"></span>
                      <p className="author">By Maria</p>
                  </div>
              </a>
          </div>
          </div>
      </div>
      <div className="clearfix"></div>
  </section>


    <div className="cta">
      <div className="container text-center scroll-to">
          <h1>Simple & clean one page template</h1>
          <a href="#contact" className="btn btn-border-black btn-radius btn-lg">Purchase now</a>
      </div>
   </div>

   <section id="contact" className="section-padding">
      <div className="container">
          <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                  <div className="row contact-details">
                      <div className="col-sm-4 margin-bottom30 text-center">
                          <i className="ion-ios-location-outline"></i>
                          <h4>California, Usa</h4>
                      </div>
                      <div className="col-sm-4 margin-bottom30 text-center">
                          <i className="ion-ios-email-outline"></i>
                          <h4>support@Bonativo.com</h4>
                      </div>
                      <div className="col-sm-4 margin-bottom30 text-center">
                          <i className="ion-ios-telephone-outline"></i>
                          <h4>+01 - 4567 - 65678</h4>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-6 col-sm-offset-3">

                  <form name="sentMessage" className="contact-form" method="post" noValidate>
                      <h3>Drop us a line</h3>
                      <div className="row">
                          <div className="col-md-12">
                              <div className="row control-group">
                                  <div className="form-group col-xs-12 controls">
                                      <input type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name."/>
                                      <p className="help-block"></p>
                                  </div>
                              </div>

                          </div>

                          <div className="col-md-12">
                              <div className="row control-group">
                                  <div className="form-group col-xs-12 controls">
                                      <input type="email" className="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address."/>
                                      <p className="help-block"></p>
                                  </div>
                              </div> 
                          </div>
                      </div>
                      <div className="row control-group">
                          <div className="form-group col-xs-12  controls">
                              <input type="tel" className="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number."/>
                              <p className="help-block"></p>
                          </div>
                      </div>
                      <div className="row control-group">
                          <div className="form-group col-xs-12 controls">
                              <textarea rows="5" className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
                              <p className="help-block"></p>
                          </div>
                      </div>
                      <br></br>
                      <div id="success"></div>
                      <div className="row">
                          <div className="form-group col-xs-12 text-right">
                              <button type="submit" className="btn btn-white btn-lg">Send Message</button>
                          </div>
                      </div>
                  </form>

              </div>
          </div>
      </div>
  </section>

       

      <footer className="footer">
      <div className="container text-center">
          <span className="alo">Bonativo</span>
          <ul className="social list-inline">
              <li><a href="#"><i className="icon icon-social-twitter"></i></a></li>
              <li><a href="#"><i className="icon icon-social-facebook"></i></a></li>
              <li><a href="#"><i className="icon icon-social-dribbble"></i></a></li>
          </ul>
          <span className="copyright">&copy; Copyright 2016. Bonativo Created By <a href="http://templatestock.co">Template Stock</a></span>
      </div>
      </footer>
    </div>
  );
}

export default App;
