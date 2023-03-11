import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

const Products: NextPage = () => {
  return (
    <>
      <Head>
        <title>Supply-chain Luxury Goods</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Supply-chain Luxury Goods</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Products;