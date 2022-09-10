
import React, { useEffect, useState } from 'react';
import './Header.css';
import { MdAccountCircle, MdFavorite, MdShoppingCart } from "react-icons/md";
import { IoIosCall } from 'react-icons/io';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Loginform from './Loginform';
import Viewcartitem from '../../Screens/Viewcartitem';
import { useSelector, useDispatch } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { PoductsApi, ChangeName } from '../Redux/Action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from './Banner';


// import Signup {Signup as getCooki} from "..//..//Screens/Signup";


// Header


const Header = () => {
  
  const [acountname, setAcountname] = useState(window.accountname)
  // setAcountname(window.accountname)

  const dispatch = useDispatch()
  const [searchPro, setSearchPro] = useState("")
  const cartItems = useSelector(state => state.Reducer)
  const DepartmentData = useSelector(state => state.ReducerDepData)
  const lengthItem = cartItems.length

  const [X, setX] = useState(false)
  const [toggleLogin, setToggleLogin] = useState(false)
  const [opencart, setOpencart] = useState(false)
  const [depData, setDepData] = useState(null);
  const [ depHading, setDepHading ] = useState();
  const [ sabdepHading, setSabdepHading ] = useState();
//   const[DataDep,setDataDep]=useState()
//   console.log(DataDep)
//   const Newvalue=()=>{
//     dispatch(PoductsApi(localStorage.getItem("DEP"), ''))
// }
// window.addEventListener('scroll',()=>{
//     const {scrollTop,scrollHeight,clientHeight}=document.documentElement;
//     if(scrollTop+clientHeight>=scrollHeight){
//         console.log("i m bottom")
       
//        Newvalue();
      
//     }
// })

  
  

  useEffect(() => {
    if (DepartmentData !== 'abc') {
      const updatedData = DepartmentData.map((item) => {
        item.isShown = false;
        return { ...item }
      })
      setDepData(updatedData)
    }
  }, [DepartmentData])

  // const sbapi = "https://easyapi.sbstorefsd.com"
  //vapeapi.vaperepublic.pk


  const  getCooki = (cookiname) => {
    let cname = cookiname + "=";
    let csplit = document.cookie.split(';');
    for (let i = 0; i < csplit.length; i++) {
        let c = csplit[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) == 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

  const searchHandler = async (key) => {

    // let key = event.target.value;

    if (key.length > 2) {
      console.warn(`Search key ${key}`)
      let result = await fetch(`${window.sbapi}/api/Product/ProductsByName?BusinessId=0000000001&Name=${key}`);
      result = await result.json();
      let sortdata = result.Data;

      if (sortdata.length > 0) {
        const a = sortdata.map(item => {
          item.qty = 1
          item.DepartmentName = item.DepartmentCode
          return { ...item }
        })
        // const b = sortdata.map(item =>{
        // {item.DepartmentName = item.DepartmentDatan} 
        // return {...item}
        // })
        setSearchPro(a)
      }
    }

    else {
      setSearchPro("")
      console.log('Search API No Data Found ')
    }

  }

  return (

    <>

      
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme= "colored"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
         
      

      {/* Topbar use for responsive   */}
      {/* <div className='topbar'>
        <a> <Link to={'/contactus'}> sales@idealbakery.com </Link></a>
        <a href='tel:+923088557555' className='call'> <IoIosCall size='12px' />  +92 3211616328 </a>
      </div> */}

      {/* Navbar or Header */}
      <Banner/>
      <nav className='navbar'>
      

        {/* First Logo */}

        <div className='logo'>
          <Link to={'/'}>
            <img src="Logonpng.png" alt='The Vape House' />
          </Link>

          {/* <div>
            <h2> Ideal Sweets  </h2>
            <h4> FAISALABAD</h4>
          </div> */}
        </div>

        {/* Second Search Bar  */}

        <div className='search-bar' style={{ position: 'relative' }}>
          <input className='input' type="search" placeholder='Search Product' onChange={e => searchHandler(e.target.value)} />
        </div>


        <span className='search-container' >
            {
              searchPro ? searchPro.map((item, key) => {
                return (
                  <Link className='search-product-container' to={'/productdetail'} state={{item}}>
                    <Link className='search-imag' to={'/productdetail'} state={{ item }}  >
                      <img src={`${window.imagesapi}/images/ProductImages/${item.Barcode}.jpg`} />
                    </Link>
                    <Link to={'/productdetail'} state={{ item }}>
                      <p className='item-desc'>{item.Description}</p>
                    </Link>
                    {/* <span className='cr-price'>Rs.{item.UnitRetail}</span> */}
                  </Link>
                )
              })
                : ''
            }
          
        </span>
        <div>
      
        
      
    </div>

        {/* Third Icon or Social Media Part */}

        <div className='social-media'>
          <ul className='social-media-desktop'>
            <li>
              <div>

                <MdAccountCircle className='my-account' onClick={() => setToggleLogin(!toggleLogin)} />
                <span style={{ position: 'relative' }}>
                  <h6 id='accountname'> </h6>
                  
                  <h6 className='accountnamedisplay' id='accountnamedisplay' > {getCooki( window.accountname)} </h6>
                  
                  
                  <span className='login-container' style={{ display: toggleLogin ? 'flex' : 'none' }}>
                    <Loginform setToggleLogin={setToggleLogin} />
                  </span>
                </span>
              </div>

            </li>
            <li>
              <span className='my-favorite'>
                <MdFavorite className='your-favorite' />
                <span className='batch1'>0</span>
              </span>
              {/* <h6> Your Favorite </h6> */}
            </li>
            <li>
              <div>
                <span className='my-cart'>
                  <MdShoppingCart className='your-cart' onClick={() => {
                    if (lengthItem === 0) {
                      setOpencart(false)
                      toast.warn(' Your Cart Is Empty!', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                      })
                    }
                    else {
                      setOpencart(!opencart)
                    }
                  }
                  } />
                  <span className='batch2'>{lengthItem}</span>
                </span>
                <span style={{ position: 'relative' }}>
                  {/* <h6 > My Cart </h6> */}
                  <span className='viewcart_container' style={{ display: opencart ? 'flex' : 'none' }}>

                    <Viewcartitem />
                  </span>
                </span>
              </div>
            </li>
          </ul>

        </div>
      </nav>
      

      {/* Main Menu Naver bar bar  */}

      <nav className='main-menu' >
      <Link to={'/aboutus'} className='menu_container'><p>ABOUT US</p></Link>
        {
          depData?.map((item, index) => {
            return (
              <Link  to={'/productspage'} className='menu_container'
                onMouseOver={() => {
                  depData[index].isShown = true
                  setDepData([...depData])
                }}
                onMouseLeave={() => {
                  depData[index].isShown = false
                  setDepData([...depData])
                }}
                // onClick={() => {
                //   var dep = depData[index].value = item.DepartmentCode;
                //   var gep =  depData[index].value = item.GroupCode;
                //   //alert(gep)
                // }
                // }
                onClick={(e) => {
                  var data = depData[index].value = item.DepartmentName;

                  dispatch(ChangeName(data))
                  var deptt = depData[index].value = item.DepartmentName;
                  var dep = depData[index].value = item.DepartmentCode;
                  localStorage.setItem("DEP",JSON.stringify(dep))
                  // setDataDep(localStorage.getItem("DEP"))
                  dispatch(PoductsApi(dep, ''))

                  e.stopPropagation();
                
                 
                  // if(dep.Data == null){
                  //   return("product Is Not Available")
                  //   // setDepData("Product Is Not Available")
                  // }
                  // alert(window.ghadding)
                }}>
                <p>{item.DepartmentName}</p>
                <span style={{ position: 'absolute' }} className='sab_menu'>
                  {
                    item.Groups.map((it) => {
                      return (
                        item.isShown ?
                          <Link to={'/productspage'}  onClick={(e) => {
                            var data1 = depData[index].value = item.DepartmentName;
                            var depsab = depData[index].value = it.GroupName;
                            var data =  data1 +" >> "+depsab
                            dispatch(ChangeName(data))
                            var dep = depData[index].value = item.DepartmentCode;
                            var grup = depData[index].value = it.GroupCode;
                            localStorage.setItem("GRP",JSON.stringify(grup))
                            // setDataDep(localStorage.getItem("DEP"))
                            console.log("Dep",localStorage.getItem("DEP"))
                            console.log("grp",localStorage.getItem("GRP"))

                            dispatch(PoductsApi(dep, grup));
                            e.stopPropagation();
                            // if(grup.Data == null){
                            //   return(<p>product Is Not Available</p>)
                            // }
                            // alert(window.sabhadding)
                          }} >
                            <p>{it.GroupName}</p>
                          </Link>
                          : null
                      )
                    })
                  }
                </span>
              </Link>
              
            )
          })
        }
        
      <Link to={'/productspage'} className='menu_container'><p>GALLERY</p></Link>
      <Link to={'/contactus'} className='menu_container'><p>CONTACTS</p></Link>
      </nav>

      {/* Second Main Menu For Media Query Responsivenes */}

      <hr color='#772f22' ></hr>

      <nav className='main-menu2'>
        {/* Hambarger Icon and onclick Function for Mian Menu Responsive  */}

        <div className='hamb' >

          <a onClick={() => {
            setX(!X) }} >
            <GiHamburgerMenu size='22px' color='white' align-itamm='left' />
          </a>
          <div className={X ? 'ham-display' : 'ham-not-display'} >

            {
              depData?.map((item, index) => {
                return (
                  <Link to={'/productspage'} className='menu_container'
                    // onTouchStart={() => {
                    //   depData[index].isShown = true
                    //   setDepData([...depData])
                    // }}
                    // onTouchEnd={() => {
                    //   depData[index].isShown = false
                    //   setDepData([...depData])
                    // }}

                    onClick={(e) => {
                      var dep = depData[index].value = item.DepartmentCode;
                      dispatch(PoductsApi(dep, ''))
                      e.stopPropagation();
                      setX(!X)
                    }}
                  >
                    <p>{item.DepartmentName}</p>
                    {/* <span style={{ position: 'absolute' }} className='sab_menu'>
                      {
                        item.Groups.map((it) => {
                          return (
                            item.isShown ?
                              <Link to={'/productspage'} onClick={(e) => {
                                var dep = depData[index].value = item.DepartmentCode;
                                var grup = depData[index].value = it.GroupCode;
                                dispatch(PoductsApi(dep, gr, 12up));
                                e.stopPropagation();
                              }} >
                                <p>{it.GroupName}</p>
                              </Link>
                              : null
                          )
                        })
                      }
                    </span> */}
                  </Link>
                )
              })
            }

          </div>
        </div>

        {/* Responsive Search bar */}

        <div className='search-bar2'>
          <input className='input' type="search" placeholder='Search Product' onChange={e => searchHandler(e.target.value)} />
        </div>

        {/*  Icon or Social Media Part for Responsive  */}

        <div className='social-media2'>

          <div className='mobile_icons'>
            <MdAccountCircle className='my-account' onClick={() => setToggleLogin(!toggleLogin)} />
            <span style={{ position: 'relative' }}>
              <span className='login-container' style={{ display: toggleLogin ? 'flex' : 'none' }}>
                <Loginform setToggleLogin={setToggleLogin} />
              </span>
            </span>
          </div>
          <div className='mobile_icons'>
            <span className='my-favorite'>
              <MdFavorite className='your-favorite' />
              <span className='batch1'>0</span>
            </span>
          </div>
          <div className='mobile_icons'>
            <span className='my-cart'>
              <MdShoppingCart className='your-cart' onClick={() => setOpencart(!opencart)} />
              <span className='batch2'>{lengthItem}</span>
            </span>
            <span style={{ position: 'relative' }}>
              <span className='viewcart_container' style={{ display: opencart ? 'flex' : 'none' }}>
                <Viewcartitem />
              </span>
            </span>
          </div>

        </div>
      </nav>
    </>)
}

export default Header