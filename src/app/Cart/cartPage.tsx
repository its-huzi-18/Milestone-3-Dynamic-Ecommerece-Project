"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Cartcard from "@/app/component/ProductCard";
import React from "react";
import Image from "next/image";
import { FaRegTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import { useAppDispatch } from "@/redux/hooks";
import { addItem, subItem, deleteItem } from "@/redux/AddToCart/cartSlice";
import StarRating from "@/app/component/StarRating";

const CartPage = () => {
  const cartlist = useSelector((state: RootState) => state.cart.items);
  const cartTotal = cartlist.reduce(
    (total: number, item: { price: number; quantity: number }) => {
      return total + item.price * item.quantity;
    },
    0
  );

  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 bg-white dark:bg-zinc-950">
        {cartlist.length === 0 ? (
          <div className="col-span-2">
            <Cartcard />
          </div>
        ) : (
          <ul className="col-span-2">
            {cartlist.map((item, index) => (
              <li key={item.id}>
                <div className="flex flex-row px-3 items-center">
                  {/* Image */}
                  <Image
                    src={Array.isArray(item.image) ? item.image[0] : item.image}
                    alt={"Product Image"}
                    height={300}
                    width={300}
                    className="w-[170px] md:w-[190px] h-[280px] object-contain rounded-md p-4"
                  />

                  {/* Content */}
                  <div className="flex flex-col md:flex-row pl-8 w-[70%] items-center justify-between mt-4 md:mt-0">
                    <div className="w-full md:w-auto">
                      {/* Title */}
                      <h2 className=" text-gray-600 font-medium text-[17px] md:text-xl leading-6 line-clamp-1">
                        {item.title}
                      </h2>
                      <h3 className="mb-[3px] font-bold text-cyan-600 text-[17px]">
                        ${item.price}
                      </h3>

                      <div className="mb-2 text-cyan-700 font-medium gap-2 flex">
                        <span className="text-black border-r-[2px] pr-2 dark:text-gray-500 border-black/70">
                          Category
                        </span>
                        {(String(item.category) || "Unknown")
                          .charAt(0)
                          .toUpperCase() +
                          (String(item.category) || "Unknown").slice(1)}
                      </div>
                      <StarRating rating={item.rating.rate} />

                      {/* Quantity */}
                      <div className="flex mt-4 items-center">
                        <button
                          onClick={() => dispatch(addItem(item))}
                          className="bg-slate-950 group hover:bg-white hover:border-[1px] hover:border-zinc-800 text-white hover:text-slate-950 duration-300 w-fit h-fit py-2 px-3 rounded-md text-base"
                        >
                          <FaPlus className="h-2 w-3 group-hover:text-black" />
                        </button>
                        <div className="px-2 scroll-m-20 font-medium text-base tracking-tight">
                          {item.quantity}
                        </div>
                        <button
                          onClick={() => dispatch(subItem(item))}
                          className="bg-slate-950 group hover:bg-white text-white hover:border-[1px] hover:border-zinc-800 hover:text-slate-950 duration-300 w-fit h-fit py-2 px-3 rounded-md text-base"
                        >
                          <FaMinus className="h-2 w-3 group-hover:text-black" />
                        </button>
                      </div>

                      {/* Mobile Price and Delete */}
                      <div className="md:hidden flex flex-col gap-2 mt-3 items-start">
                        <h2 className="text-lg text-black font-semibold line-clamp-1 leading-none">
                          Price information
                        </h2>
                        <FaRegTrashAlt
                          onClick={() => dispatch(deleteItem(item.id))}
                          className="text-xl text-red-500 cursor-pointer leading-none font-semibold"
                        />
                      </div>
                    </div>

                    {/* Desktop Price and Delete */}
                    <div className="hidden md:flex flex-col gap-2 mt-3 md:mt-0 items-start">
                      <h2 className="text-lg text-black font-semibold line-clamp-1 leading-none">
                        {/* Price information */}
                      </h2>
                      <FaRegTrashAlt
                        onClick={() => dispatch(deleteItem(item.id))}
                        className="text-xl text-red-500 cursor-pointer font-semibold"
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Order Summary */}
      <div className="bg-gray-900 p-[3.5rem_2rem_1.75rem_2rem] justify-center items-center w-[30%] rounded-xl fixed top-20 right-0 mt-9 mr-4">
        <h1 className="text-white scroll-m-20 text-lg capitalize lg:text-2xl font-semibold tracking-tight">
          Order Summary
        </h1>

        <div className="divider mt-0 mb-1"></div>

        <div className="text-sm lg:text-lg font-medium tracking-tight text-white my-2">
          {/* Pricing */}
          <div className="flex justify-between my-1 items-center capitalize">
            <h2>Sub total</h2>
            <h2>${cartTotal.toFixed(3)}</h2>
          </div>
          <div className="flex justify-between my-1 items-center capitalize">
            <h2>Delivery Charges</h2>
            <h2>TBD</h2>
          </div>
          <div className="flex justify-between my-1 items-center capitalize">
            <h2>Sales Tax</h2>
            <h2>TBD</h2>
          </div>
        </div>

        <div className="divider mt-0 mb-1"></div>

        <div className="flex justify-between items-center text-sm lg:text-lg tracking-tight text-white font-semibold capitalize">
          <h2>Estimated Total</h2>
          <h2>${cartTotal.toFixed(3)}</h2>
        </div>

        <div className="divider mt-4 mb-1"></div>

        <div className="flex justify-center pb-8 items-center w-full">
          <button className="bg-white dark:bg-slate-700 text-gray-900-900 hover:text-white dark:hover:text-zinc-900 hover:bg-black/50 lg:text-lg duration-300 scroll-m-20 text-base hover:shadow-md font-semibold tracking-tight p-4 capitalize rounded-xl px-8">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
