// import React, { useState } from 'react';
// import OtpInput from 'react-otp-input';
// import './Otpmodal.css';
// import { GiCrossedBones } from 'react-icons/gi';

// const Otpmodal = (props) => {
//   // state = { otp: '' };
//   // handleChange = (otp) => this.setState({ otp });
//     const [value1, setValue1] =useState()
//     const [value2, setValue2] =useState()
//     const [value3, setValue3] =useState()
//     const [value4, setValue4] =useState()
//     const [value5, setValue5] =useState()
//     const [value6, setValue6] =useState()
//     const [value7, setValue7] =useState()
//     const [value8, setValue8] =useState()

//    const foucmove = (first, second) => {
//     if (first.value.lenghth) {
//       document.getElementById(second).focus()
//     }
//   }

  
//     return (
//       <>
//         <div className='main-div'>
//           <div className='container-div'>
//             <span >
//               <button className='cancel-btnn'> <GiCrossedBones onClick={props.closeOtpmodal(false)} />  </button>
//             </span>
//             <form className='formstyle'>

//               <div className='center-div'>
//                 <p>Enter verification code</p>
//               </div>
//               <div className='center-div'>
//                 <input id='1' type="text" maxLength={1} className='inputestyle' value={value1} onChange={(e) =>setValue1(e.target.value)} autoComplete='off' onKeyUp={foucmove(this, 2)} />
//                 <input id='2' type="text" maxLength={1} className='inputestyle' value={value2} onChange={(e) =>setValue2(e.target.value)} autoComplete='off' onKeyUp={foucmove(this, 3)} />
//                 <input id='3' type="text" maxLength={1} className='inputestyle' value={value3} onChange={(e) =>setValue3(e.target.value)} autoComplete='off' onKeyUp={foucmove(this, 4)} />
//                 <input id='4' type="text" maxLength={1} className='inputestyle' value={value4} onChange={(e) =>setValue4(e.target.value)} autoComplete='off' onKeyUp={foucmove(this, 5)} />
//                 <input id='5' type="text" maxLength={1} className='inputestyle' value={value5} onChange={(e) =>setValue5(e.target.value)} autoComplete='off' onKeyUp={foucmove(this, 6)} />
//                 <input id='6' type="text" maxLength={1} className='inputestyle' value={value6} onChange={(e) =>setValue6(e.target.value)} autoComplete='off' onKeyUp={foucmove(this, 7)} />
//                 <input id='7' type="text" maxLength={1} className='inputestyle' value={value7} onChange={(e) =>setValue7(e.target.value)} autoComplete='off' onKeyUp={foucmove(this, 8)} />
//                 <input id='8' type="text" maxLength={1} className='inputestyle' value={value8} onChange={(e) =>setValue8(e.target.value)} autoComplete='off' onKeyUp={foucmove(this, 8)} />
//               </div>
//               <div className='center-div'>
//                 <button className='buttonn'>Sign Up</button>
//               </div>
//             </form>
//           </div>
//         </div>

//       </>
//     );
//   }
// export default Otpmodal;


import './Otpmodal.css';
import OtpInput from "react-otp-input";
import React, { useState } from "react";
import { GiCrossedBones } from 'react-icons/gi';

const Otpmodal = (props) => {
  const [code, setCode] = useState("");
  const handleChange = (code) => setCode(code);


  const otpMobile = () => {
    console.log(" OTP " + window.otpphone + code)
    if (window.otpphone === code ||  window.otpfoget === code) {
      props.closeOtpmodal(false)
      document.getElementById("geuserdata").style.display="block";
      document.getElementById("getotp").style.display="none";
    } else {
      alert(window.otpMobile + code);
    }
  }

  return (
    <div className="otpmodal">
      
      <div className="main-div">
      <span>
        <button className='cancel-btnn' onClick={()=>props.closeOtpmodal(false)}> <GiCrossedBones />  </button>
      </span>
        <h1 className='center-div'>Enter verification code</h1>
        <div className='center-div'>
          <OtpInput
            value={code}
            onChange={handleChange}
            numInputs={8}
            separator={<span style={{ width: "8px" }}></span>}
            isInputNum={true}
            shouldAutoFocus={true}
            inputStyle={{
              border: "1px solid rgb(3, 86, 156)",
              borderRadius: "8px",
              width: "54px",
              height: "54px",
              fontSize: "20px",
              color: "#000",
              fontWeight: "400",
              caretColor: "blue"
            }}
            focusStyle={{
              border: "1px solid #CFD3DB",
              outline: "none"
            }}
          />
        </div>
        <div className='center-div'>
          {/* <p>{window.otpphone}</p> */}
          <button className='buttonn' onClick={otpMobile}>Submit</button>
        </div>
      </div>
    </div>
  );
};
export default  Otpmodal;
