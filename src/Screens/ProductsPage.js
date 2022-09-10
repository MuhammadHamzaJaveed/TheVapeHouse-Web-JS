import React, { useEffect, useState } from 'react';
import './ProductsPage.css';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Link } from 'react-router-dom';
import Allapiproduct from '../components/Body/Allapiproduct';
import { PoductsApi } from '../components/Redux/Action';
import { useSelector, useDispatch } from 'react-redux';

const ProductsPage = () => {

    const hddispatch = useDispatch()
    const DepartmentData = useSelector(state => state.ReducerDepData)
    const Changename = useSelector(state => state.ReducerChangeName)
    const [depData, setDepData] = useState(null);
    // const [partdepData, setPartdepData] = useState(null)
    

    // console.log(window.sabhadding)
    // const groop = window.sabhadding

        const [Value,setValue]=useState(null)
   


    useEffect(() => {
        if (DepartmentData !== 'abc') {
            const updatedData = DepartmentData.map((item) => {
                item.isShown = false;
                return { ...item }
            })

            setDepData(updatedData)
           
        }
        
        // setPartdepData(window.ghadding)
    }, [DepartmentData])
    // const Newvalue=()=>{
    //     hddispatch(PoductsApi(Value, ''))
    // }
    // window.addEventListener('scroll',()=>{
    //     const {scrollTop,scrollHeight,clientHeight}=document.documentElement;
    //     if(scrollTop+clientHeight>=scrollHeight){
    //         console.log("i m bottom")
           
    //        Newvalue();
          
    //     }
    // })
    


    return (

        <>

            <Header />

            <div className="productspage">
                <div className="slider-bar">
                    <div className='slidebar_conatainer'>
                        {

                            depData?.map((item, index) => {
                                return (

                                    <Link to={'/productspage'} className='menu_container2'
                                        onMouseOver={() => {
                                            depData[index].isShown = true
                                            setDepData([...depData])
                                        }}
                                        onMouseLeave={() => {
                                            depData[index].isShown = false
                                            setDepData([...depData])
                                        }}
                                        // onClick={() => {
                                        //   var dep = depData[index].value = item.DepartmentCode
                                        //   alert(dep)
                                        // }
                                        // }
                                        onClick={(e) => {
                                            // setValue(depData[index].value = item.DepartmentCode)
                                            var dep = depData[index].value = item.DepartmentCode;
                                            console.warn('dep------>',dep)

                                            e.stopPropagation();
                                            hddispatch(PoductsApi(dep, ''))
                                        
                                        }
                                        }

                                    >

                                        <p>{item.DepartmentName}</p>

                                        <span className='sab_menu2'>
                                            {
                                                item.Groups.map((it) => {
                                                    return (
                                                        item.isShown ?

                                                            <Link to={'/productspage'} onClick={(e) => {
                                                                var dep = depData[index].value = item.DepartmentCode;
                                                                var grup = depData[index].value = it.GroupCode;
                                                                hddispatch(PoductsApi(dep, grup));
                                                                e.stopPropagation();
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
                    </div>
                </div>
                <div className="products">
                    <h1>{Changename}</h1>
                    <div style={{ paddingTop: "50px", backgroundColor: "white" }}>
                        <Allapiproduct />
                    </div>
                </div>

            </div>

            <Footer />

        </>
    )
}




export default ProductsPage;