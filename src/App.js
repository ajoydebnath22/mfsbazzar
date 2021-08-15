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
              <a className="navbar-brand alo" href="index.html">
                  <img src="images/logo_hader.jpeg"  data-bgrepeat="no-repeat"/>
              </a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right scroll-to">
                  <li className="active"><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#team">Team</a></li>
                  <li><a href="#services">Mission & Vision</a></li>  
                  <li><a href="#why">Why MFS Bazaar</a></li>  
                  <li><a href="#product">Service</a></li>

                                 
                  {/*
                  <li><a href="#work">Work</a></li>
                   <li><a href="#blog">Blog</a></li>
                  <li><a href="post-single.html">Blog Post</a></li>                     
                  <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">Pages <span className="caret"></span></a>
                      <ul className="dropdown-menu" role="menu">
                          <li><a href="typography.html">Typography</a></li>
                          
                      </ul>
                  </li>   */}
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
                  Protect and grow Wealth for clients by delivering outstanding investment results.
                  </div> 

                  
                  <div className="tp-caption slider-button scroll-to" data-x="center" data-y="center" data-voffset="120" data-speed="500" data-start="2400" data-easing="Power4.easeInOut" data-captionhidden="on">
                      <a className="btn btn-white" href="#about">See more</a>
                  </div> 
              </li>

              <li data-transition="fade" data-slotamount="7" data-masterspeed="1500">

                  <img src="images/bg-3.jpg" alt="desk" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat"/>

                  
                  <div className="tp-caption slider-title" data-x="center" data-y="center"  data-voffset="-30" data-speed="500" data-start="1200" data-easing="Power4.easeInOut">
                      MFS <span>Bazaar</span>
                  </div> 

            
                  <div className="tp-caption slider-caption" data-x="center" data-y="center" data-voffset="40" data-speed="500" data-start="1800" data-easing="Power4.easeInOut" data-captionhidden="on">
                   A Better Future Starts with the Right Plan
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
                      <p className="lead subtitle-caption" style={style.fontSize18}>
                          Welcome to MFS Bazaar located in <span className="colored-text">Barasat, WestBengal.</span> It led by some of the most experienced people in the Indian Wealth Management Sector.
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
                          {/* <h3>creative Designs</h3>*/}
                          <p style={style.aboutFontSize}>
                          MFS Bazaar is an internationally recognized, independent business management firm. We provide specialized financial management services to entertainers, athletes, and high-net worth individuals. We will free up your valuable time by taking care of all of your financial needs. 
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
                          {/* <h3>Great support</h3>                          */}
                          <p style={style.aboutFontSize}>
                          Our services include customized financial planning, estate and retirement planning, tax preparation and tax planning, among others.
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
                          {/* <h3>Fully Responsive</h3>                          */}
                          <p style={style.aboutFontSize}>
                          We will also assist in major purchases, such as real estate and automobiles, ensuring that you get the best price possible. We will consult on all of your insurance needs. Finally, we will help you attain financial freedom by maximizing your wealth.
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
                          {/* <h3>Dedicated Team</h3>                          */}
                          <p style={style.aboutFontSize}>
                          With the right plan, your finances can pave the way to a better future and help you to get more out of life. At mfsbazaar, we’ll help you to get a clearer vision of your dreams and goals, then develop the right plan to help get you there.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>    
  </section>   

{/*
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
  */}

<section id="team">
<div className="team">
      <div className="container">
          <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                  <div className="section-title text-center">
                      <h1> <span className="alo">MFS BAZAAR</span> team</h1> 
                      <span className="border-line"></span>
                      <p className="lead subtitle-caption" style={style.fontSize18}>
                      The Cradled establishment of Mr. Soumyajit Roy, Founder and CERTIFIED FINANCIAL PLANNER (CFPCM), is one of the leading financial planner and experienced Wealth Manager in India.
                      </p>
                  </div>
              </div>
          </div>
          <div className="row">
             
              <div className="col-sm-4 margin-bottom30" style={{visibility:'hidden'}}>
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
                      <img src="images/team-2.png" className="img-responsive" alt=""/>                       
                      <ul className="social list-inline">
                          <li><a href="https://twitter.com/login?lang=en" target="_blank"><i className="icon icon-social-twitter"></i></a></li>
                          <li><a href="https://www.facebook.com/" target="_blank"><i className="icon icon-social-facebook"></i></a></li>
                          {/* <li><a href="#"><i className="icon icon-social-dribbble"></i></a></li> */}
                      </ul>
                  </div>
                  <div className="team-desc">
                      <h4 style={style.fontSize18}>Mr. Soumyajit Roy</h4>
                      <em>FOUNDER and CERTIFIED FINANCIAL PLANNER (CFPCM)</em>
                  </div>
              </div>
              {/*<div className="col-sm-4 margin-bottom30">
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
              </div>*/}
          </div>
      </div>
  </div>

  </section>


<section id="services" className="section-padding">
      <div className="container">
          <div className="row">
              <div className="col-sm-8 col-sm-offset-2 text-center">
                  <div className="section-title">
                      <h1>Our Mission and<span className="colored-text"> Vision</span></h1> 
                      <span className="border-line"></span>
                      {/* <p className="lead subtitle-caption">
                          Why you choose <span className="colored-text">MFS BAZAAR</span>
                      </p> */}
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
                          {/*<h3>Marketing</h3>*/}                        
                          <p style={style.aboutFontSize}>
                          Excellence in service and client engagement.
                          Efficiency in operations and compliance.
                          Respect, Autonomy, Recognition, and Reward for team members.
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
                          {/* <h3>Web & Graphics design</h3>                          */}
                          <p style={style.aboutFontSize}>
                          We assist the ambitious “FEW” to make the tangible progress in their wealth with an enterprising mix of long term, conservative and responsible non speculative investments to give nancial security and peace of mind.
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
                          {/* <h3>Social Media</h3> */}
                          <p style={style.aboutFontSize}>
                          We are a competent team founded on fairness, dignity and respect for everyone. We enjoy the pursuit of high quality, error free work.
                          We actively partner with ethical associates having common objectives and values.
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
                          {/* <h3>Creative ideas</h3>                          */}
                          <p style={style.aboutFontSize}>
                          To generate returns in a manner this would address short term and long terms objectives of clients.
                          To manage our clients’ wealth by striking a balance between growth and safety of the investments.
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
                          {/* <h3>Responsive Design</h3>                          */}
                          <p style={style.aboutFontSize}>
                          Strong belief in achieving excellence not only in our processes but also our knowledge based and skills.
                          Total commitment to rational approach to investing with strong emphasis on values and ethics.
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
                          {/* <h3>Customer Support</h3>                          */}
                          <p style={style.aboutFontSize}>
                          Adherence to long term conservative approach by scrupulously avoiding speculation.
                          Shared values of our team are fairness, dignity and respect for everyone.
                          We strive to be one of the best in the domain of investment.  
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>

    {/* 
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
  */}

   <section id="why">
    <div className="price-tables section-padding">
      <div className="container">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2 text-center">
                  <div className="section-title">
                      <h1>WHY <span className="colored-text">MFS Bazaar</span></h1> 
                      <span className="border-line"></span>
                      <p className="lead subtitle-caption">
                      The more your money works for you, the less you have to work for money.
                      </p>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-4 margin-bottom30">
                  <div className="price-box text-center">
                      <div className="header ">
                          <h3>WHY</h3>
                          <div className="price">
                              {/* <h2>$3.99</h2>
                              <span>Start price / month</span> */}
                          </div>
                      </div>
                      <ul className="list-unstyled">
                          <li>We provide comprehensive financial planning solutions to our esteemed clients.</li>
                          <li>Using the six step process, we examine the client’s current financial situations followed by gathering quantitative and qualitative data’s with fact finding session.</li>
                          <li>We  give a lot of weightage to qualitative information along with quantitative data. After 
                              analyzing the whole data, we proceed with our recommendation and writing the financial plans according to your financial goal.</li>              
                      </ul>
                      {/* <div className="price-footer">
                          <h4><a href="#" className="btn btn-border-black">Buy Now</a></h4>
                      </div> */}
                  </div>
              </div>
               <div className="col-sm-4 margin-bottom30">
                  <div className="price-box text-center">
                      <div className="header active">
                          <h3>MFS</h3>
                          <div className="price">
                              {/* <h2>$3.99</h2>
                              <span>Start price / month</span> */}
                          </div>
                      </div>
                      <ul className="list-unstyled">
                          <li>All financial plans being unique, that is no two cases are the same.</li>
                          <li>We provide, customized, recommendation to each of our clients keeping all the clients data fully 
                            confidential. 
                          </li>
                          <li>We keep in mind the insurance need, investment need with changing the tax structure and ensure that, in case of certain laws being amended/modified, 
                              changes in the investment strategy can be made with minimum cost implications.
                          </li>
                      </ul>
                  </div>
              </div>
               <div className="col-sm-4 margin-bottom30">
                  <div className="price-box text-center">
                      <div className="header">
                          <h3>Bazaar</h3>
                          <div className="price">
                              {/* <h2>$3.99</h2>
                              <span>Start price / month</span> */}
                          </div>
                      </div>
                      <ul className="list-unstyled">
                          <li>Each recommendation in the financial plan is expected to bring you closer and 
                              achieve your financial goals smoothly.
                          </li>
                          <li>
                            We understand the importance of proper implementation and review of the plan for 
                            ensuring that the plan meets its objective. 
                          </li>
                          <li>All our services are independent in nature and we pledge our commitment of providing high quality services to our valued clients. 
                            Looking forward, we hope for the best. 
                          </li>
                          
                      </ul>
                      {/* <div className="price-footer">
                          <h4><a href="#" className="btn btn-border-black">Buy Now</a></h4>
                      </div> */}
                  </div>
              </div>
          </div>
      </div>
  </div>
  </section>

    <div className="cta cta-bg">
          <div className="container text-center scroll-to">
              <h1>WE'VE GOT PLENTY MORE TO SAY</h1>
              <a href="#contact" className="btn btn-white btn-radius btn-lg">Let's talk</a>
          </div>
    </div>


      <section id="product" className="section-padding">
        <div className="container">
          <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                  <div className="section-title text-center">
                      <h1> <span className="alo">MFS Bazaar</span> Services</h1> 
                      <span className="border-line"></span>
                      {/* <p className="lead subtitle-caption">
                          Vivamus congue diam vitae tortor imperdiet congue.
                      </p> */}
                  </div>
              </div>
          </div>


          <div className="row">
              <div className="col-sm-3">
                  <div className="entry-thumb portfolio-thumb">
                      <div className="imgoverlay text-light">
                          <a href="javascript:void(0)" className="load-content prettyPhoto">
                              <img src="images/product_broker.jpg" className="img-responsive" alt=""/>
                              <div className="overlay"><span className="overlaycolor"></span><div className="overlayinfo" style= {{marginTop:'-11px'}} ><h6>Broking</h6></div></div>
                          </a>
                      </div>
                  </div>
              </div>
              <div className="col-sm-3">
                  <div className="entry-thumb portfolio-thumb">
                      <div className="imgoverlay text-light">
                          <a href="javascript:void(0)" className="load-content prettyPhoto">
                              <img src="images/product_startinvestment.jpg" className="img-responsive" alt=""/>
                              <div className="overlay"><span className="overlaycolor"></span><div className="overlayinfo" style= {{marginTop:'-11px'}}><h6>Investment Product</h6></div></div>
                          </a>
                      </div>
                  </div>
              </div>
              <div className="col-sm-3">
                  <div className="entry-thumb portfolio-thumb">
                      <div className="imgoverlay text-light">
                          <a href="javascript:void(0)" className="load-content prettyPhoto">
                              <img src="images/product_financialconsultant.jpg" className="img-responsive" alt=""/>
                              <div className="overlay"><span className="overlaycolor"></span><div className="overlayinfo" style= {{marginTop:'-11px'}}><h6>Financial Consultancy</h6></div></div>
                          </a>
                      </div>
                  </div>
              </div>
              <div className="col-sm-3">
                  <div className="entry-thumb portfolio-thumb">
                      <div className="imgoverlay text-light">
                          <a href="javascript:void(0)" className="load-content prettyPhoto">
                              <img src="images/product_forexservice.webp" className="img-responsive" alt=""/>
                              <div className="overlay"><span className="overlaycolor"></span><div className="overlayinfo" style= {{marginTop:'-11px'}}><h6>FOREX Service</h6></div></div>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              
              <div className="col-sm-3">
                  <div className="entry-thumb portfolio-thumb">
                      <div className="imgoverlay text-light">
                          <a href="javascript:void(0)" className="load-content prettyPhoto">
                              <img src="images/product_FinancialPlanning.png" className="img-responsive" alt=""/>
                              <div className="overlay"><span className="overlaycolor"></span><div className="overlayinfo" style= {{marginTop:'-11px'}}><h6>Financial Planning</h6></div></div>
                          </a>
                      </div>
                  </div>
              </div>
              <div className="col-sm-3">
                  <div className="entry-thumb portfolio-thumb">
                      <div className="imgoverlay text-light">
                          <a href="javascript:void(0)" className="load-content prettyPhoto">
                              <img src="images/product_insurance.jpg" className="img-responsive" alt=""/>
                              <div className="overlay"><span className="overlaycolor"></span><div className="overlayinfo" style= {{marginTop:'-11px'}}><h6>Insurance</h6></div></div>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>  

 {/*
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

   */}

   <section id="contact" className="section-padding">
      <div className="container">
          <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                  <div className="row contact-details">
                      <div className="col-sm-4 margin-bottom30 text-center">
                          <i className="ion-ios-location-outline"></i>
                          <h4>Barasat, Kolkata-700126</h4>
                      </div>
                      <div className="col-sm-4 margin-bottom30 text-center">
                          <i className="ion-ios-email-outline"></i>
                          <h4>info@mfsbazaar.com</h4>
                      </div>
                      <div className="col-sm-4 margin-bottom30 text-center">
                          <i className="ion-ios-telephone-outline"></i>
                          <h4>+91 - 8910604323</h4>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-6 col-sm-offset-3">

                  <form name="sentMessage" className="contact-form" method="post" noValidate >
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
                              <button type="button" onClick="javascript:void(0)" className="btn btn-white btn-lg">Send Message</button>
                          </div>
                      </div>
                  </form>

              </div>
          </div>
      </div>
  </section>

       

      <footer className="footer">
      <div className="container text-center">
          <span className="alo">MFS Bazaar</span>
          <ul className="social list-inline">
             <li><a href="https://twitter.com/login?lang=en" target="_blank"><i className="icon icon-social-twitter"></i></a></li>
              <li><a href="https://www.facebook.com/" target="_blank"><i className="icon icon-social-facebook"></i></a></li>
              {/* <li><a href="#"><i className="icon icon-social-dribbble"></i></a></li> */}
          </ul>
          <span className="copyright">&copy; Copyright 2021. MFS Bazaar </span>
          {/* <a href="http://templatestock.co">Template Stock</a> */}
      </div>
      </footer>
    </div>
  );
}

export default App;


const style = {

    aboutFontSize : {
        fontSize:'18px',
        fontStyle: 'oblique',
        fontWeight: 'bold'
    },
    
    fontSize18 : {
        fontSize:'18px',
        fontStyle: 'italic',
    }
    


}