import React from 'react'
import SingleItemView from './SingleItemView';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {create} from '../apiCalls';

function AddNewItem() {
  const [TITLE, setTITLE] = useState('');
  const [Category, setCategory] = useState('');
  const [UserName, setUserName] = useState('');
  const [SP, setSP] = useState('');
  const [Quantity, setQuantity] = useState('');
  const [Description, setDesc] = useState('');
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function handleSubmit() {
    const data = {
      username: UserName,
      title: TITLE,
      category: Category,
      price: SP,
      quantity: Quantity,
      description: Description,
    };
    console.log(data);
    const res = create("http://localhost:5000/item/create", data);
    if (!res.error) {
      window.alert("Item added successfully");
    } else if (res.error === 11000) {
      window.alert(res.error);
    } else {
      window.alert("Error adding item");
    }
  }

  return (
    <div className="min-w-full	 min-h-screen inline-flex overflow-hidden h-full items-center ">
      <div className="w-1/3  h-full min-h-full inline-flex flex-col	relative aitems-center truncate	 bg-white">
        <div>
          <input type="file" multiple onChange={handleChange} />
          <img src={file} />
        </div>

      </div>

      <div className="w-1/3  h-full min-h-screen inline-flex flex-col	 relative justify-items-center justify-around items-center border-dashed border-x-2 truncate	 bg-gradient-to-r from-[#0071FF] to-blue-200">
        <p className="text-2xl text-center	 text-black py-6"> Username:</p>
        <input type="text" placeholder="UserName" className="w-3/6 sm:w-11/12 h-10 border-2 m-3  border-gray-300 rounded-md p-2" value={UserName} onChange={(e) => setUserName(e.target.value)} />

        <p className="text-2xl text-center	 text-black py-6"> Title:</p>
        <input type="text" placeholder="Title" className="w-3/6 sm:w-11/12 h-10 border-2 m-3  border-gray-300 rounded-md p-2" value={TITLE} onChange={(e) => setTITLE(e.target.value)} />

        <p className="text-2xl text-center	 text-black py-6"> Category:</p>
        <input type="text" placeholder="Category(Electronics,IOT, Dailyuse etc.)" className="w-3/6 sm:w-11/12 h-10 border-2 m-3  border-gray-300 rounded-md p-2" value={Category} onChange={(e) => setCategory(e.target.value)} />


        <p className="text-2xl text-center	 text-black py-6"> Selling Price:</p>
        <input type="text" placeholder="Selling Price" className="w-3/6 sm:w-11/12 h-10 border-2 m-3  border-gray-300 rounded-md p-2" value={SP} onChange={(e) => setSP(e.target.value)} />

        <p className="text-2xl text-center	 text-black py-6"> Quantity:</p>
        <input type="integer" placeholder="Quantity" className="w-3/6 sm:w-11/12 h-10 border-2 m-3  border-gray-300 rounded-md p-2" value={Quantity} onChange={(e) => setQuantity(e.target.value)} />

      </div>

      <div className="w-1/3 h-full min-h-full inline-flex flex-col	 relative items-center truncate	 bg-white" >
        <div className="w-full  h-full  inline-flex flex-col	 relative items-center truncate	 bg-white">
          <textarea
            placeholder="Describe the item"
            className=" sm:w-11/12  min-h-fit	 border-2 m-3  border-gray-300 rounded-md p-2" value={Description} onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <div className="w-[50%]  h-full min-h-full inline-flex flex-col	 relative items-center truncate">
          <button onClick={handleSubmit} className="bg-[#0071FF] text-xl text-white px-8 h-10 rounded-md">Done</button>
        </div>
      </div>
    </div>
  )
}

export default AddNewItem

