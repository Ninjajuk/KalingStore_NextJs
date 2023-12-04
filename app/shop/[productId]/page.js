
'use client'
import React, { useState, useEffect } from 'react';

const ProductDetails = ({ params }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Fetch product details from the API based on the productId
        const res = await fetch(`https://dummyjson.com/products/${params.productId}`);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch product with ID ${params.productId}`);
        }

        const productData = await res.json();
        setProduct(productData);
      } catch (error) {
        console.error(error);
        // Handle error, e.g., set an error state
      }
    };

    fetchProduct();
  }, [params.productId]);

  if (!product) {
    // Render loading state, or handle differently
    return <div>Loading...</div>;
  }

  return (


    <div className=" flex flex-col lg:flex-row  ">
      {/* Product info */}
      <div className=" lg:w-1/2 flex flex-col bg-white px-[4rem] py-[4rem]">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl pb-2">{product.title}</h1>
          <div className="w-full h-full overflow-hidden rounded-lg shadow-lg mb-2">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
            <p className="text-sm text-gray-600">{product.description}</p>
  
      </div>

      <div className=" lg:w-1/2  px-[4rem] py-[4rem] bg-white">
        <div className='w-[300px] h-[300px] flex flex-col   mx-auto  rounded-lg shadow-lg px-4 py-4 '>
        <div className="overflow-hidden  rounded-lg">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        {/* <p className="text-xl line-through tracking-tight text-gray-900"> ${product.price}</p> */}
        {/* <p className="text-xl line-through tracking-tight text-gray-900"> ${product.discountPrice}</p> */}

        <p className="text-3xl tracking-tight text-gray-900 py-4">${product.price}</p>
        <div className="w-full ">
          <button className="w-full px-4 py-2 bg-sky-600 rounded-md">
            Add to Cart
          </button>
        </div>
        </div>

 
      </div>

    </div>
  );
};

export default ProductDetails;