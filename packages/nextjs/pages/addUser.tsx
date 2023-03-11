import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { AddressInput } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");

  return (
    <>
      <Head>
        <title>Supply-chain Luxury Goods</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-14 mx-14">
        <div className="w-full bg-base-100 rounded-3xl shadow-xl border-2 ">
          <h1 className="text-center mb-8 text-primary">
            <span className="block text-2xl mb-2 text-primary">Add User</span>
            <span className="block text-4xl font-bold">Product all products</span>
          </h1>
        </div>
        <div className="w-full bg-base-100 rounded-3xl shadow-xl border-2 ">
          <p className="block text-primary text-3xl mb-2 font-semibold text-center">Add User</p>
          <div className="flex flex-col px-4 pb-8">
            {/* INPUT WRAPPER */}
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
              <AddressInput onChange={e => setAddress(e)} />
            </div>
            {/* INPUT WRAPPER */}
          </div>
          <button className="btn btn-primary btn-md">Add User</button>
        </div>
      </div>
    </>
  );
};

export default Home;
