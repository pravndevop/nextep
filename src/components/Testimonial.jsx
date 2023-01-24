import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

function Testimonial() {
  return (
    <div className="bg-slate-500">
      <h1 className="sm:text-6xl text-3xl sm:py-10 py-2  text-gray-900 flex justify-center">
        What People Says!
      </h1>

      <div className="flex flex-wrap items-center justify-evenly gap-2 ">
        <div className="sm:w-[30%] w-[90%] bg-gray-300 h-[300px] flex flex-col items-center justify-center my-10 rounded-xl shadow-xl shadow-black -skew-x-6">
          <RiDoubleQuotesL className="mr-[90%] text-red-600" />
          <span className="text-center mx-10">
            <p className="text-gray-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              dolores voluptas repudiandae maiores. Nesciunt illo, itaque
              aliquid doloribus rerum, esse exercitationem possimus animi cum
              minus similique unde debitis laboriosam minima.
            </p>
            <RiDoubleQuotesR className="ml-[90%] text-red-700" />
          </span>
          <div className="flex items-center justify-center">
            <span className="flex flex-row gap-2 text-sm">
              <p>person name </p>|<p>company</p>
            </span>
          </div>
        </div>
        <div className="sm:w-[30%] w-[90%] bg-gray-300 h-[300px] flex flex-col items-center justify-center my-10 rounded-xl shadow-xl shadow-black -skew-x-6">
          <RiDoubleQuotesL className="mr-[90%] text-red-700" />
          <span className="text-center mx-10">
            <p className="text-gray-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              dolores voluptas repudiandae maiores. Nesciunt illo, itaque
              aliquid doloribus rerum, esse exercitationem possimus animi cum
              minus similique unde debitis laboriosam minima.
            </p>
            <RiDoubleQuotesR className="ml-[90%] text-red-700" />
          </span>
          <div className="flex items-center justify-center">
            <span className="flex flex-row gap-2 text-sm">
              <p>person name</p>|<p>company</p>
            </span>
          </div>
        </div>
        <div className="sm:w-[30%] w-[90%] bg-gray-300 h-[300px] flex flex-col items-center justify-center my-10 rounded-xl shadow-xl shadow-black -skew-x-6">
          <RiDoubleQuotesL className="mr-[90%] text-red-700" />
          <span className="text-center mx-10">
            <p className="text-gray-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              dolores voluptas repudiandae maiores. Nesciunt illo, itaque
              aliquid doloribus rerum, esse exercitationem possimus animi cum
              minus similique unde debitis laboriosam minima.
            </p>
            <RiDoubleQuotesR className="ml-[90%] text-red-700" />
          </span>
          <div className="flex items-center justify-center">
            <span className="flex flex-row gap-2 text-sm">
              <p>person name</p>|<p>company</p>
            </span>
          </div>
        </div>
        <div className=" sm:w-[30%] w-[90%] bg-gray-300 h-[300px] flex flex-col items-center justify-center my-10 rounded-xl shadow-xl shadow-black -skew-x-6">
          <RiDoubleQuotesL className="mr-[90%] text-red-700" />
          <span className="text-center mx-10">
            <p className="text-gray-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              dolores voluptas repudiandae maiores. Nesciunt illo, itaque
              aliquid doloribus rerum, esse exercitationem possimus animi cum
              minus similique unde debitis laboriosam minima.
            </p>
            <RiDoubleQuotesR className="ml-[90%] text-red-700" />
          </span>
          <div className="flex items-center justify-center">
            <span className="flex flex-row gap-2 text-sm">
              <p>person name</p>|<p>company</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
