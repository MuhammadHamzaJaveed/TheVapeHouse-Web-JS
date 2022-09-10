import React from 'react'

const Maps = () => {
  return (
    <>
        <div className='container-fluid px-5 mb-2'>
            <div className='row justify-content-center text-center'>
                <h1 style={{color:"#fb9120",fontSize:" 40px",fontWeight: "500"}}>Near to Me</h1>
            </div>
            <div className='row'>
            <ul className="nav">
  <li className="nav-item">

  <a className="btn btn-outline-warning border-0 nav-link" style={{cursor:"pointer", fontSize:"20px" }} aria-current="page"  onClick={() => {
                                    document.getElementById('Lahore').style.display = "flex"
                                    document.getElementById('Multan').style.display="none"
                                    document.getElementById('Sahiwal').style.display="none"
                                    document.getElementById('Lahoree').style.display = "flex"
                                    document.getElementById('Multane').style.display="none"
                                    document.getElementById('Sahiwale').style.display="none"
                                }}
                                >Lahore</a>  </li>
  <li className="nav-item">
  <a className="btn btn-outline-warning border-0  nav-link" style={{cursor:"pointer",fontSize:"20px"}}  onClick={() => {

                                    document.getElementById('Lahore').style.display = "none"
                                    document.getElementById('Multan').style.display="none"
                                    document.getElementById('Sahiwal').style.display="flex"
                                    document.getElementById('Lahoree').style.display = "none"
                                    document.getElementById('Multane').style.display="none"
                                    document.getElementById('Sahiwale').style.display="flex"
                                }}
                              >Sahiwal</a>  </li>
  <li className="nav-item">
  <a className="nav-link btn btn-outline-warning border-0" style={{cursor:"pointer",fontSize:"20px"}}  onClick={() => {
                                    document.getElementById('Lahore').style.display = "none"
                                    document.getElementById('Multan').style.display="flex"
                                    document.getElementById('Sahiwal').style.display="none"
                                    document.getElementById('Lahoree').style.display = "none"
                                    document.getElementById('Multane').style.display="flex"
                                    document.getElementById('Sahiwale').style.display="none"
                                }}
                              >Multan</a>  </li>
  <li className="nav-item">
  <a className="nav-link disabled"   aria-disabled="true" style={{cursor:"pointer", fontSize:"20px" }}>islamabad</a>
  </li>
</ul>
       
            </div>
            <div className='row mt-3'>
                <div className='col-md-6'>
                    <img src='sahiwal.jpg' id='Sahiwale' style={{display:"none"}}/>
                
                
                    <img src='lhr.jpg' id='Lahoree'/>
                
          
                    <img src='Multan.jpg' id='Multane' style={{display:"none"}}/>
                </div>
                <div className='col-md-6 '>
                
        <div id='Multan' style={{display:"none"}} className="">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55160.307346356014!2d71.473765!3d30.222267!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdcd7261ebae41557!2sTHE%20VAPEHOUSE%20(MULTAN)%20Vape%20Shop%20-%20Electronic%20Cigarettes%20Ecig%20Kits%20Mod%20E-liquids!5e0!3m2!1sen!2sus!4v1659790126931!5m2!1sen!2sus"
         allowfullscreen="" loading="lazy" style= {{width:"100%",  height:"370px", border:0, boxShadow:"rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px" }}></iframe>
            </div>
    
    
        <div id='Lahore' className="" >
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d436209.6921644023!2d74.607888!3d31.33446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905dbd1b429af%3A0x7624e0403b8997e4!2sTHE%20VAPEHOUSE%20(MODEL%20TOWN)-(LHR)%20Vape%20Shop%20-%20Electronic%20Cigarettes%20Ecig%20Kits%20Mod%20E-liquids!5e0!3m2!1sen!2sus!4v1659789878080!5m2!1sen!2sus"
           allowfullscreen="" loading="lazy" style= {{width:"100%",  height:"370px", border:0,  boxShadow:"rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px" }}></iframe>
        </div>



    
        <div id='Sahiwal' style={{display:"none"}} className="" >
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6863.345241846026!2d73.111597!3d30.671346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1ec18141a575916b!2sTHE%20VAPEHOUSE%20(SAHIWAL)%20Vape%20Shop%20-%20Electronic%20Cigarettes%20Ecig%20Kits%20Mod%20E-liquids!5e0!3m2!1sen!2sus!4v1659790654610!5m2!1sen!2sus" 
           allowfullscreen="" loading="lazy" style= {{width:"100%",  height:"370px", border:0,  boxShadow:"rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px" }}></iframe>
        </div>

                </div>
            </div>
        </div>
     
    </>
  )
}

export default Maps
