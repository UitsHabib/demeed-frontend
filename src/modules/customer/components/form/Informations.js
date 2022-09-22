// import React from 'react';
// import Label from './label';
// import Selections from './Selections';
// import InputControl from './InputControl';
// import TextAreaControl from './TextAreaControl';

// // import { InputControl } from '../../../core';

// function Informations() {
//     const cuntryList = ['Select Your City..', 'Dhaka', 'Rajshahi', 'Rangpur', 'Kumiolla'];

//     return (
//         <>
//             <Label labelStyle='textLabel'>Full Name :</Label>
//             <div className='md:flex space-y-10 md:space-y-0 md:gap-4'>
//                 <InputControl
//                     myStyle="inputStyle"
//                     type="text"
//                     name="FirstName"
//                     placeholder="First Name..."
//                     divClass="md:w-6/12"
//                 />
//                 <InputControl
//                     myStyle="inputStyle"
//                     type="text"
//                     name="LastName"
//                     placeholder="Last Name..."
//                     divClass="md:w-6/12"
//                 />
//             </div>

//             {/* -------------Addres Area------------- */}
//             <div className='mt-10'>
//                 {/* <InputControl
//                     myStyle="inputStyle"
//                     type="text"
//                     placeholder="Your Address..."
//                     name="Address"
//                     label="Address :"
//                     position="top"
//                     labelStyle="textLabel"
//                 /> */}
//                 <TextAreaControl
//                     className="inputStyle"
//                     cols="30"
//                     rows="4"
//                     name="Address"
//                     label="Address :"
//                     position="top"
//                     labelStyle="textLabel"
//                 />
//                 <div className='md:flex space-y-10 md:space-y-0 my-10 md:gap-4'>
//                     <Selections
//                         className="inputStyle text-sm text-slate-400"
//                         options={cuntryList}
//                         divStyle="md:w-6/12"
//                     />
//                     <InputControl
//                         myStyle="inputStyle"
//                         type="text"
//                         name="Province"
//                         placeholder="State / Province..."
//                         divClass="md:w-6/12"
//                     />
//                 </div>
//                 <InputControl
//                     myStyle="inputStyle"
//                     type="text"
//                     name="Postal"
//                     placeholder="Postal / Zip Code..."
//                     label="Postal Code :"
//                     labelStyle="textLabel"
//                     position="top"
//                 />
//             </div>

//             {/* -------------Contact Area------------ */}
//             <div className='my-10 space-y-10'>
//                 <InputControl
//                     myStyle="inputStyle"
//                     type="text"
//                     name="ContactNumber"
//                     placeholder="(+880)..."
//                     divClass="md:w-6/12"
//                     label="Phone Number :"
//                     labelStyle="textLabel"
//                     position="top"
//                 />

//                 <InputControl
//                     myStyle="inputStyle"
//                     type="text"
//                     name="Email"
//                     placeholder="devschapy71@gmail.com"
//                     divClass="md:w-6/12"
//                     label="Email :"
//                     labelStyle="textLabel"
//                     position="top"
//                 />
//             </div>
//         </>
//     );
// };

// export default Informations;
