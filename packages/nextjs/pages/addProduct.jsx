import React from 'react'
import Head from "next/head";
import { AddressInput } from "~~/components/scaffold-eth";

function addProduct() {
  return (
      <>
      <Head>
        <title>Supply-chain Luxury Goods</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>
      <div className="mx-auto my-14">
        <div className="w-[500px] bg-base-100 rounded-3xl shadow-xl border-2 ">
          <p className="block text-primary text-3xl mb-2 font-semibold text-center">Add Product</p>
          <div className="flex flex-col px-4 pb-8">
            <div className="flex flex-col space-y-1 w-full my-1">
              <p className="font-semibold text-xl ml-1 my-0 break-words">Name</p>
              <div
                className={`flex items-center justify-between border-2 border-base-300 bg-base-200 rounded-full text-accent w-full`}
              >
                <input
                  type="text"
                  className="input input-ghost focus:outline-none focus:bg-transparent focus:text-gray-400 h-[2.2rem] min-h-[2.2rem] border w-full font-medium placeholder:text-accent/50 text-gray-400"
                />
              </div>
            </div>
            {/* INPUT WRAPPER */}
            {/* INPUT WRAPPER */}
            <div className="flex flex-col space-y-1 w-full my-1">
              <p className="font-semibold text-xl ml-1 my-0 break-words">Email</p>
              <div
                className={`flex items-center justify-between border-2 border-base-300 bg-base-200 rounded-full text-accent w-full`}
              >
                <input
                  type="text"
                  className="input input-ghost focus:outline-none focus:bg-transparent focus:text-gray-400 h-[2.2rem] min-h-[2.2rem] border w-full font-medium placeholder:text-accent/50 text-gray-400"
                />
              </div>
            </div>
            {/* INPUT WRAPPER */}
            {/* INPUT WRAPPER */}
            <div className="flex flex-col space-y-1 w-full my-1">
              <p className="font-semibold text-xl ml-1 my-0 break-words">Address</p>
              <AddressInput />
            </div>
            {/* INPUT WRAPPER */}
          </div>
        </div>
      </div>
    </>
  )
}

export default addProduct