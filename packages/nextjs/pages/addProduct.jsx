import React, { useState } from 'react'
import Head from "next/head";
import axios from "axios";
import {Spinner} from "../components/Spinner"
import toast from "react-hot-toast";
import { AddressInput } from "~~/components/scaffold-eth";
import { ArrowUpOnSquareIcon, CheckIcon } from "@heroicons/react/20/solid";
function addProduct() {
      const [productName, setProductName] = useState("")
      const [manuName, setManuName] = useState("")
      const [manuDate, setManuDate] = useState("")
      const [expDate, setExpDate] = useState("")
      const [productType, setProductType] = useState("0")
      const [image, setImage] = useState("")
      const [price, setPrice] = useState("")
      const [desc, setDesc] = useState("")
      const [barCodeId, setbarCodeId] = useState("")
      const [address, setAddress] = useState("")
      const [productUri, setProductUri] = useState("")
      const [loading, setLoading] = useState(false)
      console.log(new Date(manuDate)?.getTime());
      const imageUpload = async e => {
            const file = e.target.files[0];
            try {
              const formData = new FormData();
              formData.append("file", file);
              setLoading(true);
              const resFile = await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                data: formData,
                headers: {
                  pinata_api_key: process.env.NEXT_PUBLIC_PINATA_KEY,
                  pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_SECRET,
                  "content-type": "multipart/form-data",
                },
              });
              const imageUrl = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
              setImage(imageUrl);
              console.log("image ",imageUrl);
              setLoading(false);
              toast.success("Image uploaded successfully");
            } catch (error) {
              console.log("error ", error);
            }
      };
  // Uplaod json data in ipfs and to get tokenURI //
  async function uploadToIPFS(){
      if(!desc || ! price || !image) return;
      // setLoading('loading');
      try {
            var jsonData =JSON.stringify({
                  'pinataMetadata':{
                        "name":`${productName}.json`
                  },
                  'pinataContent':{
                        expDate:new Date(expDate)?.getTime(),productName,productType,barCodeId,address,manuDate:new Date(manuDate)?.getTime(),manuName,price,desc,image
                  }
            })
            const resFile = await axios({
                  method:"post",
                  url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
                  data: jsonData ,
                  headers:{
                  pinata_api_key: process.env.NEXT_PUBLIC_PINATA_KEY,
                  pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_SECRET,
                        "Content-type": 'application/json',
                  }
            })
            const tokenUrl = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
            return tokenUrl;

      } catch (error) {
            console.log("error in uploading json ", error);
      }
}
const submit = async e => {
    e.preventDefault();
    try {
      const uri= await uploadToIPFS();
      console.log("uri ",uri);
      setProductUri(uri)
      toast.success("Product uploaded successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
      <>
      <Head>
        <title>Supply-chain Luxury Goods</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>
      <div className="mx-auto my-14">
        <form onSubmit={submit} className="md:w-[500px] w-[300px] lg:w-[800px] bg-base-100 rounded-3xl shadow-xl border-2 ">
          <p className="block text-primary text-3xl mb-2 font-semibold text-center">Add Product</p>
          <p className="font-semibold text-xl ml-1 my-0 break-words px-4">Click to upload</p>
          {!loading ? (
            <label className='' htmlFor='forId'>
                  <ArrowUpOnSquareIcon className="h-12 mx-4 cursor-pointer w-12"/>
            </label>
          ) : (
            <div className='flex justify-center'><progress className="progress my-3 text-primary w-56 "></progress></div>
            
          )}

            <input type="file" accept="image/png, image/gif, image/jpeg" hidden onChange={imageUpload} id="forId" />
          <div className="flex flex-col px-4 pb-8">
            <div className="flex flex-col space-y-1 w-full my-1">
              <p className="font-semibold text-xl ml-1 my-0 break-words">Product Name</p>
              <div
                className={`flex items-center justify-between border-2 border-base-300 bg-base-200 rounded-full text-accent w-full`}
              >
                <input
                  type="text"
                  value={productName}
                  onChange={e => setProductName(e.target.value)}
                  className="input input-ghost focus:outline-none focus:bg-transparent focus:text-gray-400 h-[2.2rem] min-h-[2.2rem] border w-full font-medium placeholder:text-accent/50 text-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1 w-full my-1">
              <p className="font-semibold text-xl ml-1 my-0 break-words">Manufacturer Name</p>
              <div
                className={`flex items-center justify-between border-2 border-base-300 bg-base-200 rounded-full text-accent w-full`}
              >
                <input
                  value={manuName}
                  onChange={e => setManuName(e.target.value)}                
                  type="text"
                  className="input input-ghost focus:outline-none focus:bg-transparent focus:text-gray-400 h-[2.2rem] min-h-[2.2rem] border w-full font-medium placeholder:text-accent/50 text-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1 w-full my-1">
              <p className="font-semibold text-xl ml-1 my-0 break-words">Expiration Date</p>
              <div
                className={`flex items-center justify-between border-2 border-base-300 bg-base-200 rounded-full text-accent w-full`}
              >
                <input
                  value={expDate}
                  onChange={e => setExpDate(e.target.value)}                   
                  type="date"
                  className="input input-ghost focus:outline-none focus:bg-transparent focus:text-gray-400 h-[2.2rem] min-h-[2.2rem] border w-full font-medium placeholder:text-accent/50 text-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1 w-full my-1">
              <p className="font-semibold text-xl ml-1 my-0 break-words">Product Type</p>
              <select onChange={e => setProductType(e.target.value)}  
                      value={productType} className="select border-primary h-[2.2rem] min-h-[2.2rem] bg-primary select-info">
                  <option value="0">JEWELRY</option>
                  <option value="1">CLOTHES</option>
                  <option value="2">WINE</option>
                  <option value="3">ACCESSORIES</option>
            </select>
            </div>

            <div className="flex flex-col space-y-1 w-full my-1">
              <p className="font-semibold text-xl ml-1 my-0 break-words">Manufactured Date</p>
              <div
                className={`flex items-center justify-between border-2 border-base-300 bg-base-200 rounded-full text-accent w-full`}
              >
                <input
                  value={manuDate}
                  onChange={e => setManuDate(e.target.value)}                   
                  type="date"
                  className="input input-ghost focus:outline-none focus:bg-transparent focus:text-gray-400 h-[2.2rem] min-h-[2.2rem] border w-full font-medium placeholder:text-accent/50 text-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1 w-full my-1">
              <p className="font-semibold text-xl ml-1 my-0 break-words">Price</p>
              <div
                className={`flex items-center justify-between border-2 border-base-300 bg-base-200 rounded-full text-accent w-full`}
              >
                <input
                  value={price}
                  onChange={e => setPrice(e.target.value)}                   
                  type="number"
                  className="input input-ghost focus:outline-none focus:bg-transparent focus:text-gray-400 h-[2.2rem] min-h-[2.2rem] border w-full font-medium placeholder:text-accent/50 text-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1 w-full my-1">
              <p className="font-semibold text-xl ml-1 my-0 break-words">Description</p>

              <textarea className='textarea textarea-bordered border-primary focus:outline-none focus:bg-transparent focus:text-gray-400 p-3 h-24 w-full '  value={desc}
                  onChange={e => setDesc(e.target.value)}   />
            </div>
            <div className="my-[10px] w-full">
            <button className="btn btn-primary w-full font-black">Upload</button>
          </div>
            {/* INPUT WRAPPER */}
          </div>
        </form>
      </div>
    </>
  )
}

export default addProduct