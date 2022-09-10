import React, { useEffect, useState } from 'react';
import './Body.css';
import Apiproduct from './Apiproduct';
import { Link } from 'react-router-dom';
import SimpleImageSlider from "react-simple-image-slider";
import { useSelector, useDispatch } from 'react-redux';
import { PoductsApi } from '../Redux/Action';
import { BsChevronDoubleRight } from 'react-icons/bs';
import { FaChevronRight } from 'react-icons/fa';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { GiBallHeart, GiWheat } from 'react-icons/gi';
import ReactVisibilitySensor from 'react-visibility-sensor';
import Allapiproduct from './Allapiproduct'
import { IoIosCall } from 'react-icons/io';
import Modal from 'react-modal';
import '../Header/Header.css';
import CarouselSlider from '../../Screens/CarouselSlider';
import Maps from '../../Screens/Maps';
import Reviews from '../../Screens/Reviews';
import Pakistan from '../../Screens/Pakistan';
import Brands from '../../Screens/Brands';
import Promotion from '../../Screens/Promotion';
import ReviewSlider from '../../Screens/ReviewSlider';













// Main Body

const Body = () => {
    const fetchAp = useSelector(state => state.Reducerprodata)
    const DepartmentData = useSelector(state => state.ReducerDepData)
    const [depData, setDepData] = useState(null);
    const [proData, setProData] = useState(null);
    const [proData1, setProData1] = useState(null);
    const [scroll, setScroll] = useState()
    const hddispatch = useDispatch()
    const [openmodal,SetmodalOpen]=useState(true);


    useEffect(() => {
        if (DepartmentData !== 'abc') {
            const updatedData = DepartmentData.map((item) => {
                item.isShown = false;
                return { ...item }
            })
            setDepData(updatedData)
        }
    }, [DepartmentData])


    const sliderImages = [
        URL = 'slider2.jpg',
        URL='slider1.jpg',
        URL='Slider3.jpg'

    ]

    // const sliderText = [
    //  Text = 'Hello',
    //  Text = 'H',
    //  Text = 'g',
    //  Text = 'f',
    //  Text = 'l',
    // ]
    useEffect(() => {
        if (fetchAp !== 'abc') {
            // console.log(fetchAp)
            setProData(fetchAp.newArrival)
            setProData1(fetchAp.promotional)
        }
    }, [fetchAp])

    // var settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 100,
    //     slidesToShow: 3,
    //     slidesToScroll: 1
    // };

    const counter = (val) => {
        let client = 0;
        let years = 0;
        let fresh = 0;
        let ingree = 0;
        if (val) {

            const timer = setInterval(() => {
                document.getElementById('ingreedent').innerHTML = ++ingree;
                if (ingree === 105) clearInterval(timer);
            }, 10 / 105);


            const timer1 = setInterval(() => {
                document.getElementById('client').innerHTML = ++client;
                if (client === 600) clearInterval(timer1);
            }, 10 / 600);

            const timer2 = setInterval(() => {
                document.getElementById('years').innerHTML = ++years;
                if (years === 50) clearInterval(timer2);
            }, 10 / 50);

            const timer3 = setInterval(() => {
                document.getElementById('halal').innerHTML = ++fresh;
                if (fresh === 100) clearInterval(timer3);
            }, 10 / 100);
        }
    }
   
    return (
        <>
        <Modal isOpen={openmodal} className="modal-content" >
      
      <div className="">
                    <h4 className="modal-title">AGE VERIFICATION</h4>
                </div>
                <div className="modalBody"><br/>

                    <img className="model-logo" src="Logonpng.png" alt="Vape House"/>
                    
                    <h3 className="modalp">You must be 18 years old to visit this site.</h3>                        
                    <p className="modalp">
                        Some of the products available on this website contain nicotine.<br/>
                        Only proceed if you are over 18 years of age.
                    </p><br/>
                        <div className='row'>
                            <div className='col-7 justify-content-center text-center'>
                            <button id="confirm-btn" className="btn btn-lg text-light  justify-content-center mb-2 ms-1" onClick={()=>SetmodalOpen(false)} alt="YES, I AM OF LEGAL AGE"><span>YES, I AM OF LEGAL AGE</span></button>
                    
                            </div>
                            <div className='col-5 justify-content-center text-center'>
                            <a className='justify-content-center text-center' href='https://www.google.com/'><button className='btn btn-lg btn-outline-dark' >No, I am Not</button></a></div>
                        </div>
                </div>
                    
               
      

      </Modal>
   
            <div className='all-body-items'>
                <div className='display-image'>
                    <div className='slider-image'>

                        <div className='banner-image'>
                            {/* <img src={require("./assets/banner.jpg")} /> */}
                            <SimpleImageSlider
                                width={'100%'} 
                                height={'24vw'}
                                images={sliderImages}
                                showBullets={false}
                                showNavs={false}
                                autoPlay={true}
                                autoPlayDelay={2}
                                style={{ position: 'relative' }}
                            />
                        </div>

                    </div>

                    <div className='mobile-image-slider'>
                        <SimpleImageSlider
                            width={'100%'}
                            height={'40vw'}
                            images={sliderImages}
                            showBullets={false}
                            showNavs={false}
                            autoPlay={true}
                            autoPlayDelay={2}
                            style={{ position: 'relative' }}
                        />
                    </div>

                </div>
                <div className='main-deiv3'>

                    <div className='firstt-div'>

                        <div className='firstt-inner'>
                            <h5 className='main-hadd'> E-Liquids</h5>
                            <div>
                                <Link to={'/productspage'} onClick={(e) => {
                                    var dep = "0001";
                                    hddispatch(PoductsApi(dep, ''))
                                    e.stopPropagation();
                                }}>
                                    <button className='rtin-buttton'> <FaChevronRight /> see more</button>
                                </Link>

                            </div>
                        </div>
                        <div className='second-inner' >
                            <img src="cardspic/Eliquids.jpg" />
                        </div>

                    </div>

                    <div className='centerr-div'>
                        <div className='centerr-inner'>
                            <h5 className='main-hadd'>Devices</h5>
                            <div>
                                <Link to={'/productspage'} onClick={(e) => {
                                    var dep = "0002";
                                    hddispatch(PoductsApi(dep, ''))
                                    e.stopPropagation();
                                }}>
                                    <button className='rtin-buttton'> <FaChevronRight /> see more</button>
                                </Link>
                            </div>
                        </div>
                        <div className='second-inner' >
                            <img src="cardspic/Device.jpg" />
                        </div>
                    </div>
                    <div className='lastt-div'>
                        <div className='lastt-inner'>
                            <h5 className='main-hadd'> Tanks </h5>
                            <div>
                                <Link to={'/productspage'} onClick={(e) => {
                                    var dep = "0003";
                                    hddispatch(PoductsApi(dep, ''))
                                    e.stopPropagation();
                                }}>
                                    <button className='rtin-buttton'> <FaChevronRight /> see more</button>
                                </Link>
                            </div>
                        </div>
                        <div className='second-inner' >
                            <img src="cardspic/Tanks.jpg" />
                        </div>
                    </div>
                    <div className='lastt-div'>
                        <div className='lastt-inner'>
                            <h5 className='main-hadd'>Accessories</h5>
                            <div>
                                <Link to={'/productspage'} onClick={(e) => {
                                    var dep = "0004";
                                    hddispatch(PoductsApi(dep, ''))
                                    e.stopPropagation();
                                }}>
                                    <button className='rtin-buttton'> <FaChevronRight /> see more</button>
                                </Link>
                            </div>
                        </div>
                        <div className='second-inner' >
                            <img src="cardspic/Accessories.jpg"/>
                        </div>
                    </div>


                </div>

                <div className='sec-section'>
                    <div className='eliment-container'>
                        <div className='eliment-row'>
                            <div className='eliment-wrap'>
                                <div className='eliment-sec1'>
                                   
                                    <h2 className="rtin-title" style={{color:"#F54826"}} >We Offer People Best Way </h2>
                                    <h2 className="rtin-title" style={{color:"#F54826"}}>  To Use Best Vape </h2>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='menu-top-pro'>
                        <ul className='menu-top-con'>
                            <li className=' nav-item active ' id="all" onClick={() => {
                                    document.getElementById('all-procont').style.display = "flex"
                                    document.getElementById('pro-cont').style.display = "none"
                                }}>
                                All
                            </li>
                            {
                                depData?.map((item, index) => {

                                    return (

                                        <li className=' nav-item' onClick={(e) => {
                                            var dep = depData[index].value = item.DepartmentCode;
                                            hddispatch(PoductsApi(dep, ''))
                                            e.stopPropagation();
                                
                                            document.getElementById('all-procont').style.display = "none"
                        
                                            document.getElementById('pro-cont').style.display = "flex"
                                        }}>{item.DepartmentName}</li>

                                    )
                                })
                            }
                        </ul>
                        <div id='all-procont' style={{ maxWidth: "1200px", marginLeft: "auto", marginRight: "auto"  }}>
                            <Apiproduct proData={proData1} setProData={setProData1} />
                        </div>
                        <div className='proo-container' id='pro-cont'>
                            <Allapiproduct />
                        </div>

                    </div>

                    {/* <div className='menu-top-pro'>
                        <ul className='menu-top-con'>

                            <li className='nav-item current' onClick={() => {
                                document.getElementById('all-products').style.display = "flex"
                                document.getElementById('dontes').style.display = "none"
                                document.getElementById('pizza').style.display = "none"
                                document.getElementById('drinkss').style.display = "none"
                                document.getElementById('sandwitch').style.display = "none"
                            }}>ALL</li>

                            <li className='nav-item'
                                onClick={() => {

                                    document.getElementById('dontes').style.display = "flex"
                                    document.getElementById('all-products').style.display = "none"
                                    document.getElementById('pizza').style.display = "none"
                                    document.getElementById('drinkss').style.display = "none"
                                    document.getElementById('sandwitch').style.display = "none"
                                }}
                            >DONUTS</li>

                            <li className='nav-item' onClick={() => {
                                document.getElementById('pizza').style.display = "flex"
                                document.getElementById('all-products').style.display = "none"
                                document.getElementById('dontes').style.display = "none"
                                document.getElementById('drinkss').style.display = "none"
                                document.getElementById('sandwitch').style.display = "none"

                            }}>PIZZA</li>

                            <li className='nav-item' onClick={() => {
                                document.getElementById('drinkss').style.display = "flex"
                                document.getElementById('all-products').style.display = "none"
                                document.getElementById('dontes').style.display = "none"
                                document.getElementById('sandwitch').style.display = "none"
                                document.getElementById('pizza').style.display = "none"

                            }}>DRINKS</li>

                            <li className='nav-item' onClick={() => {
                                document.getElementById('sandwitch').style.display = "flex"
                                document.getElementById('drinkss').style.display = "none"
                                document.getElementById('all-products').style.display = "none"
                                document.getElementById('dontes').style.display = "none"
                                document.getElementById('pizza').style.display = "none"
                            }}>SANDWICH</li>

                        </ul>

                        <div className='proo-container' id='all-products'>
                            <div className='food-boxx'
                                onMouseOver={() => {
                                    document.getElementById('viewop').style.display = "block"
                                }}
                                onMouseLeave={() => {
                                    document.getElementById('viewop').style.display = "none"
                                }}
                            >
                                <div className='item-image'>
                                    <img src={require('./assets/maxpiza.png')} />
                                </div>
                                <div className='button-wrep' id='viewop'>
                                    <button className='cart-btoon'> View Opation</button>
                                </div>
                                <div className='item-contant'>
                                    <h3 className='item-tital'>Burgur Kingo</h3>
                                    <p>Gorgonzola, mozzarella, taleggio Red onions, capers, olives</p>
                                </div>
                            </div>

                            <div className='food-boxx'
                                onMouseOver={() => {
                                    document.getElementById('viewop1').style.display = "block"
                                }}
                                onMouseLeave={() => {
                                    document.getElementById('viewop1').style.display = "none"
                                }}
                            >
                                <div className='item-image'>
                                    <img src={require('./assets/maxpiza.png')} />
                                </div>
                                <div className='button-wrep' id='viewop1' >
                                    <button className='cart-btoon'> View Opation</button>
                                </div>
                                <div className='item-contant'>
                                    <h3 className='item-tital'>Burgur Kingo</h3>
                                    <p>Gorgonzola, mozzarella, taleggio Red onions, capers, olives</p>
                                </div>
                            </div>


                            <div className='food-boxx'
                                onMouseOver={() => {
                                    document.getElementById('viewop2').style.display = "block"
                                }}
                                onMouseLeave={() => {
                                    document.getElementById('viewop2').style.display = "none"
                                }}
                            >
                                <div className='item-image'>
                                    <img src={require('./assets/maxpiza.png')} />
                                </div>
                                <div className='button-wrep' id='viewop2'>
                                    <button className='cart-btoon'> View Opation</button>
                                </div>
                                <div className='item-contant'>
                                    <h3 className='item-tital'>Burgur Kingo</h3>
                                    <p>Gorgonzola, mozzarella, taleggio Red onions, capers, olives</p>
                                </div>
                            </div>

                            <div className='food-boxx'
                                onMouseOver={() => {
                                    document.getElementById('viewop3').style.display = "block"
                                }}
                                onMouseLeave={() => {
                                    document.getElementById('viewop3').style.display = "none"
                                }}
                            >
                                <div className='item-image'>
                                    <img src={require('./assets/maxpiza.png')} />
                                </div>
                                <div className='button-wrep' id='viewop3'>
                                    <button className='cart-btoon'> View Opation</button>
                                </div>
                                <div className='item-contant'>
                                    <h3 className='item-tital'>Burgur Kingo</h3>
                                    <p>Gorgonzola, mozzarella, taleggio Red onions, capers, olives</p>
                                </div>
                            </div>
                        </div>


                        <div className='proo-container' id='dontes' style={{ display: "none" }}>

                            <div className='food-boxx'
                                onMouseOver={() => {
                                    document.getElementById('viewdontes').style.display = "block"
                                }}
                                onMouseLeave={() => {
                                    document.getElementById('viewdontes').style.display = "none"
                                }}
                            >
                                <div className='item-image'>
                                    <img src={require('./assets/maxpiza.png')} />
                                </div>
                                <div className='button-wrep' id='viewdontes'>
                                    <button className='cart-btoon'> View Opation</button>
                                </div>
                                <div className='item-contant'>
                                    <h3 className='item-tital'>Donuts</h3>
                                    <p>Gorgonzola, mozzarella, taleggio Red onions, capers, olives</p>
                                </div>
                            </div>

                            <div className='food-boxx'
                                onMouseOver={() => {
                                    document.getElementById('viewdontes1').style.display = "block"
                                }}
                                onMouseLeave={() => {
                                    document.getElementById('viewdontes1').style.display = "none"
                                }}
                            >
                                <div className='item-image'>
                                    <img src={require('./assets/maxpiza.png')} />
                                </div>
                                <div className='button-wrep' id='viewdontes1'>
                                    <button className='cart-btoon'> View Opation</button>
                                </div>
                                <div className='item-contant'>
                                    <h3 className='item-tital'>Donuts</h3>
                                    <p>Gorgonzola, mozzarella, taleggio Red onions, capers, olives</p>
                                </div>
                            </div>
                        </div>


                        <div className='proo-container' id='pizza' style={{ display: "none" }}>

                            <div className='food-boxx'
                                onMouseOver={() => {
                                    document.getElementById('viewpiz').style.display = "block"
                                }}
                                onMouseLeave={() => {
                                    document.getElementById('viewpiz').style.display = "none"
                                }}
                            >
                                <div className='item-image'>
                                    <img src={require('./assets/maxpiza.png')} />
                                </div>
                                <div className='button-wrep' id='viewpiz'>
                                    <button className='cart-btoon'> View Opation</button>
                                </div>
                                <div className='item-contant'>
                                    <h3 className='item-tital'>Pizza</h3>
                                    <p>Gorgonzola, mozzarella, taleggio Red onions, capers, olives</p>
                                </div>
                            </div>


                        </div>

                        <div className='proo-container' id='drinkss' style={{ display: "none" }}>

                            <div className='food-boxx'
                                onMouseOver={() => {
                                    document.getElementById('viewdrinks').style.display = "block"
                                }}
                                onMouseLeave={() => {
                                    document.getElementById('viewdrinks').style.display = "none"
                                }}
                            >
                                <div className='item-image'>
                                    <img src={require('./assets/maxpiza.png')} />
                                </div>
                                <div className='button-wrep' id='viewdrinks'>
                                    <button className='cart-btoon'> View Opation</button>
                                </div>
                                <div className='item-contant'>
                                    <h3 className='item-tital'>Drinks</h3>
                                    <p>Gorgonzola, mozzarella, taleggio Red onions, capers, olives</p>
                                </div>
                            </div>

                            <div className='food-boxx'
                                onMouseOver={() => {
                                    document.getElementById('viewdrinks1').style.display = "block"
                                }}
                                onMouseLeave={() => {
                                    document.getElementById('viewdrinks1').style.display = "none"
                                }}
                            >
                                <div className='item-image'>
                                    <img src={require('./assets/maxpiza.png')} />
                                </div>
                                <div className='button-wrep' id='viewdrinks1'>
                                    <button className='cart-btoon'> View Opation</button>
                                </div>
                                <div className='item-contant'>
                                    <h3 className='item-tital'>Drinks</h3>
                                    <p>Gorgonzola, mozzarella, taleggio Red onions, capers, olives</p>
                                </div>
                            </div>
                        </div>


                        <div className='proo-container' id='sandwitch' style={{ display: "none" }}>

                            <div className='food-boxx'
                                onMouseOver={() => {
                                    document.getElementById('viewsand').style.display = "block"
                                }}
                                onMouseLeave={() => {
                                    document.getElementById('viewsand').style.display = "none"
                                }}
                            >
                                <div className='item-image'>
                                    <img src={require('./assets/maxpiza.png')} />
                                </div>
                                <div className='button-wrep' id='viewsand'>
                                    <button className='cart-btoon'> View Opation</button>
                                </div>
                                <div className='item-contant'>
                                    <h3 className='item-tital'>Sandwitch</h3>
                                    <p>Gorgonzola, mozzarella, taleggio Red onions, capers, olives</p>
                                </div>
                            </div>

                            <div className='food-boxx'
                                onMouseOver={() => {
                                    document.getElementById('viewsand1').style.display = "block"
                                }}
                                onMouseLeave={() => {
                                    document.getElementById('viewsand1').style.display = "none"
                                }}
                            >
                                <div className='item-image'>
                                    <img src={require('./assets/maxpiza.png')} />
                                </div>
                                <div className='button-wrep' id='viewsand1'>
                                    <button className='cart-btoon'> View Opation</button>
                                </div>
                                <div className='item-contant'>
                                    <h3 className='item-tital'>Sandwitch</h3>
                                    <p>Gorgonzola, mozzarella, taleggio Red onions, capers, olives</p>
                                </div>
                            </div>
                        </div>



                    </div> */}
                </div>
                <CarouselSlider/>

                {/* <div className='bg-fixed'>
                    <div className='bg-contant'>
                        <div className='bgleft-content'>
                            <h2 className='leftcontent'>
                                We Have <span style={{ color: "#fcb302" }}>Excellent</span> <br />
                                Of <span style={{ color: "#fcb302" }}>Quality</span> Cakes
                            </h2>
                            <div >
                                <Link className='leftbutton' to={'/productspage'} onClick={(e) => {
                                    var dep = "0003";
                                    hddispatch(PoductsApi(dep, ''))
                                    e.stopPropagation();
                                }}>
                                    <button >SEE ALL MENU <FaChevronRight style={{ alignItems: "center" }} /></button>
                                </Link>
                            </div>
                        </div>
                        <div className='bgright-content'>
                            <img className='bgright-content-img'  src={require('./assets/largecake.png')} />
                            <span className='dicoshap'>
                                <img src={require('./assets/shape21.png')} />
                                <h2 className='shapetital'>
                                    <span style={{ color: "#f43127" }}>40%</span><br />Off
                                </h2>
                            </span>
                        </div>
                    </div>
                </div> */}
                <div className='container-fluid'>
                <div className='row '>
                    <img src="vapehouse.jpg"/>
                </div>
                </div>
                <Promotion/>

                 {/* <div className='bannersec-main'>
                    <div className='bannersec'>
                        <div className='bannersec1'>
                            <div className='bannerimg'>
                                <img src={require('./assets/client.png')} />

                            </div>
                        
                        </div>
                        <div className= 'row bannertext'>
                            <div className='col-md-10 bg-dark'></div>
                        </div>

                        <span className='right-shape'>
                            <img src={require('./assets/shape32.png')} />
                        </span>
                        <span className='left-shape'>
                            <img src={require('./assets/shape31.png')} />
                        </span>

                    </div>
                </div>  */}
             <div className='container-fluid  ' id="comments">
             <div className='row' id="Comments">
                    <div className='col-md-6 col-sm-6 justify-content-center commenpntpic'>
                                <img src={require('./assets/oo.png')} id="commentpic" />
                    </div>
                    <div className='col-md-6 col-sm-12 col-xs-12 commenpntpic2  ' >
                        <div className='row'>
                            <div className='col-md-10 justify-content-center '>
                            <div id="slidee" className='justify-content-center'><Reviews/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>

                <div className='highlight-pro'>
                    <div className='highlight1'>
                        <Link to={'/productspage'} onClick={(e) => {
                            var dep = "0001";
                            hddispatch(PoductsApi(dep, ''))
                            e.stopPropagation();
                        }}>
                            <img src={require('./assets/ELIQUID.jpg')} />
                            <span className='hetitital'>
                                <p>E-liquids</p>
                            </span>
                            </Link>
                    </div>
                    <div className='highlight1'>
                    <Link to={'/productspage'} onClick={(e) => {
                            var dep = "0003";
                            hddispatch(PoductsApi(dep, ''))
                            e.stopPropagation();
                        }}>
                        <img src={require('./assets/TANK.jpg')} />
                        <span className='hetitital'>
                            <p>Tanks</p>
                        </span>
                        </Link>
                    </div>
                    <div className='highlight1'>
                    <Link to={'/productspage'} onClick={(e) => {
                            var dep = "0001";
                            hddispatch(PoductsApi(dep, ''))
                            e.stopPropagation();
                        }}>
                        <img src={require('./assets/ACCESSORIES.jpg')} />
                        <span className='hetitital'>
                            <p>Accessories</p>
                        </span>
                        </Link>
                    </div>
                </div>
                <Pakistan/>


                <ReactVisibilitySensor onChange={counter}>
                    <div className='bg-fixed1'>
                        <div className='bg-colors'>
                            <div className='bg-contant1'>
                                <div className='bg-row'>
                                    <div className='row-cont1'>
                                        <div className='img-icon' >
                                            <GiWheat color='#FCB302' size='48px' />
                                        </div>
                                        <div className="rtinn-counter">
                                            <span id='ingreedent' className="counter"></span>
                                        </div>
                                        <h3 className="rtinn-title">Ingredients</h3>
                                    </div>
                                    <div className='row-cont1'>
                                        <div className='img-icon' >
                                            <VscAccount color='#FCB302' size='48px' />
                                        </div>
                                        <div className="rtinn-counter">
                                            <span id='client' className="counter"></span>
                                        </div>
                                        <h3 className="rtinn-title">Clients Daily</h3>
                                    </div>
                                    <div className='row-cont1'>
                                        <div className='img-icon' >
                                            <BsFillCalendarCheckFill color='#FCB302' size='48px' />
                                        </div>
                                        <div className="rtinn-counter">
                                            <span id='years' className="counter"></span>
                                        </div>
                                        <h3 className="rtinn-title">Years </h3>
                                    </div>
                                    <div className='row-cont1'>
                                        <div className='img-icon' >
                                            <GiBallHeart color='#FCB302' size='48px' />
                                        </div>
                                        <div className="rtinn-counter">
                                            <span id='halal' className="counter"></span>
                                        </div>
                                        <h3 className="rtinn-title">Fresh & Halal</h3>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </ReactVisibilitySensor>





                {/* <div className='items-sec'>
                        <h2> PROMOTIONAL ITEMS </h2>
                        <span className='view-more'>
                            <Link className='viewmore-text' to={'/productspage'} onClick={(e) => {
                                var dep = "0010";
                                hddispatch(PoductsApi(dep, ''))
                                e.stopPropagation();
                            }}>
                                View More <BsChevronDoubleRight style={{ textAlign: "center" }} />
                            </Link>
                        </span>
                    </div> */}



                <div className='delviry-sec'>
                    <div className='delviry-sec2'>
                        <div className='bg-colorr'>
                            <div className='delviry-bike'>
                                <img src={require('./assets/bike.png')} />
                            </div>
                            <div className='bg-imgg'>
                                <center className='content-box'>
                                    <div className='left-content'>
                                        <h2>
                                            Get Free Delivery
                                        </h2>
                                        <p>As well known and we are very busy all days beforeso we can guarantee your seat.</p>
                                    </div>
                                    <div className='right-content'>
                                        <h3>
                                            <a href='tel:+923088557555'>  <IoIosCall style={{ marginRight: "10px", fontSize: "40px" }} />
                                                Call: 03006800812
                                            </a></h3>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
    








            </div>
            
        
            <Brands/>
        
            
            
         
        </>
    )
}

export default Body;