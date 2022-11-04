import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return <>
    <div className="overflow-x:hidden w-3/4 h-3/4 mx-auto sm:mx-0 mt-10 sm:mt-20">
      <div className="flex flex-col justify-center items-center bg-[#F9F9F9] pr-2 pb-4 rounded-sm">
        <div className="title text-center">
          <p className="text-2xl text-black py-6"> Login to <b>VIT MarketPlace</b></p>
        </div>
        <div className="form py-4 flex flex-col item-center">
            <input type="text" placeholder="Name" className="w-5/6 md:1 sm:w-11/12 h-10 border-2 m-3  border-gray-300 rounded-md p-2" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Email" className="w-5/6 md:1 sm:w-11/12 h-10 border-2 m-3  border-gray-300 rounded-md p-2" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Password" className="w-5/6 md:1 sm:w-11/12 h-10 border-2 m-3  border-gray-300 rounded-md p-2" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="button">
          <button className="bg-[#0071FF] text-xl text-white px-8 h-10 rounded-md">Sign Up</button>
        </div>
        <div className="pb-8">
          <p className="text-sm text-black py-6">Already have a account? <b onClick={() => { navigate('/login') }}>Login</b></p>
          <br /><br />
        </div>        
      </div>
    </div>
  </>;
};

export default SignUp;
