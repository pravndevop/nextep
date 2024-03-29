import React from "react";
import { motion } from "framer-motion";
import abtone from "./asstets/abt1.avif";
import abtfive from "./asstets/abt5.avif";
import abtsix from "./asstets/abt6.avif";
import abtseven from "./asstets/abt7.avif";
import Partner from "../partner/Partner";
import Enquiry from "../enquiry/Enquiry";
import Navbar from "../Navbar";

function AboutUs() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <div id="#about" className=" pt-4 ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex sm:flex-row flex-col justify-evenly px-10"
          >
            <div className="flex justify-center sm:w-[80%] w-[100%]">
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={abtone}
                alt=""
                className="h-[80%] w-[90%] sm:mt-24 mt-10 rounded-3xl "
              />
            </div>
            <div className="w-[100%] sm:pt-24 pt-3">
              <div className="flex justify-start uppercase font-semibold text-lg text-yellow-600">
                <h5>About Us</h5>
              </div>
              <div className="m-3">
                <motion.h2
                  initial={{
                    y: 300,
                    opacity: 0,
                  }}
                  transition={{ duration: 2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="sm:text-lg text-sm font-medium sm:pr-10 pr-0 sm:ml-5 ml-0 text-gray-400 text-justify"
                >
                  Nextep India is one of the leading players in the Indian Label
                  manufacturing industry. We are a “design-to-delivery” Labeling
                  solutions provider with the ability to design, develop and
                  manufacture a diverse product portfolio for a wide range of
                  customers primarily in the automotive and pharmaceutical
                  industries.
                </motion.h2>
                <motion.h3
                  initial={{
                    y: 200,
                    opacity: 0,
                  }}
                  transition={{ duration: 2.3 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className=" sm:text-lg text-sm font-medium sm:pt-5 pt-1 text-gray-400 items-center justify-center text-justify sm:pr-10 pr-0 sm:m-5 m-0"
                >
                  Our product offerings blank labels, pre-printed labels, domes,
                  overlays, aluminum name plates etc., <br />
                  Nextep India has a strong focus on new product development and it
                  has a dedicated ‘new product development’ team. Our products
                  are subject to stringent quality checks and testing in
                  laboratories.
                </motion.h3>
                <motion.h4
                  initial={{
                    y: 100,
                    opacity: 0,
                  }}
                  transition={{ duration: 2.5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className=" sm:text-lg text-sm font-medium sm:pt-5 pt-1 text-gray-400 items-center justify-center text-justify sm:pr-10 pr-0 sm:m-5 m-0"
                >
                  We differentiate ourselves on the basis of the wide range of
                  our product portfolio, quality of our product offerings, our
                  product design and development capabilities and the strength
                  of our relationships with customers located across various
                  industries globally.
                </motion.h4>
              </div>
            </div>
          </motion.div>
        </div>

        <div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="h-full "
        >
          <div className="flex items-center justify-center">
            <h1 className="sm:text-9xl text-5xl sm:font-extrabold font-bold opacity-5 text-cyan-400">
              NEXTEP
            </h1>
          </div>
          <div className="flex sm:flex-row flex-col items-center justify-evenly">
            <div className="flex flex-col items-center justify-center sm:text-start text-center sm:w-[50%] w-[80%]">
              <motion.h2
                initial={{
                  y: 100,
                  opacity: 0,
                }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-bold sm:text-5xl text-2xl sm:mb-5 mb-1 text-blue-700"
              >
                Vision
              </motion.h2>
              <motion.p
                initial={{
                  y: 100,
                  opacity: 0,
                }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gray-400 font-san sm:text-lg text-md sm:font-medium font-medium text-justify"
              >
                Our Vision is aim to be a market leader in design & manufacture
                of self-adhesive labels for engineering & industrial
                applications.
                <br />
                We strive to benchmark product with the very best available.
              </motion.p>
            </div>
            <div className="inset-0 object-cover transform hover:scale-105 transition duration-700 ease-out">
              <motion.img
                initial={{
                  y: -100,
                  opacity: 0,
                }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={abtfive}
                alt=""
                className="sm:h-[350px] h-[200px] sm:w-[500px] w-[280px] rounded-2xl"
              />
            </div>
          </div>

          <div className="flex sm:flex-row flex-col items-center justify-evenly mt-10">
            <div className="inset-0 object-cover transform hover:scale-105 transition duration-700 ease-out">
              <motion.img
                initial={{
                  y: 100,
                  opacity: 0,
                }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={abtsix}
                alt=""
                className="sm:h-[350px] h-[200px] sm:w-[500px] w-[280px] rounded-2xl"
              />
            </div>
            <div className="flex flex-col items-center justify-center sm:text-start text-center sm:w-[50%] w-[80%]">
              <motion.h2
                initial={{
                  y: -100,
                  opacity: 0,
                }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-bold sm:text-5xl text-2xl sm:mb-5 mb-1 text-blue-700"
              >
                Mission
              </motion.h2>
              <motion.p
                initial={{
                  y: -100,
                  opacity: 0,
                }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className=" text-gray-400 font-san sm:text-lg text-md font-medium text-justify"
              >
                To deliver desire. To play with colors, materials, textures and
                most of all, possibilities. To make things that are visually
                exciting. Sensorially pleasing. Delightfully intuitive. To be
                the best in the business of aesthetic and functional industrial
                graphics parts, using specialized design and printing
                technologies.
              </motion.p>
            </div>
          </div>
        </div>

        <div className=" h-full flex sm:flex-row flex-col items-center justify-evenly   mb-10">
          <div className="sm:w-[30%] w-[80%] sm:ml-32 ml-0">
            <img
              src={abtseven}
              alt=""
              className="sm:h-[300px] h-[220px] sm:w-[400px] w-[550px] sm:mt-20 mt-10 sm:my-20 my-0 rounded-3xl"
            />
          </div>
          <div className="w-[70%] sm:mr-32 mr-0 mt-10">
            <div className="flex justify-start uppercase font-semibold text-lg text-yellow-600">
              <h3>who we are</h3>
            </div>
            <div className="flex flex-col sm:gap-0 gap-5">
              <h1 className="sm:text-2xl text-lg font-bold sm:pr-10 pr-0 sm:ml-5 ml-0 mt-3 text-cyan-900">
                Right Partner Right Product.
              </h1>

              <p className="sm:text-lg text-sm font-medium  text-gray-400 items-center text-justify justify-center sm:pr-10 pr-0 sm:m-5 m-1">
                Nextep India was established in the year 2015 as
                manufacturer of specialty labels and printed electronics
                products specific to the electronics, electrical and automobile
                industries. We have an excellent and unique combination of
                expertise and rich array of products providing customers with
                superior solutions to their requirements.
              </p>
              <p className="sm:text-lg text-sm font-medium  text-gray-400 items-center text-justify justify-center sm:pr-10 pr-0 sm:m-5 m-1">
                Manufacturing facility printing with advanced label conversion
                set-up Equipped with all the capability to make veriety of
                printed, security, specialty labels as per industry needs.
              </p>
              <p className="sm:text-lg text-sm font-medium  text-gray-400 items-center text-justify justify-center sm:pr-10 pr-0 sm:m-5 m-1">
                Headquartered in Bengaluru India, Nextep having footprints
                across India, Middle East and Europe continents.
              </p>
              <p className="sm:text-lg text-sm font-medium  text-gray-400 items-center text-justify justify-center sm:pr-10 pr-0 sm:m-5 m-1">
                We harness the power of Barcode, RFID, Vision, Cognitive
                Computing, Predictive Analysis and emerging technologies to
                enable our clients integrate their supply chains and facilitate
                end-to- end visibility and connectivity.
              </p>
              <p className="sm:text-lg text-sm font-medium  text-gray-400 items-center text-justify justify-center sm:pr-10 pr-0 sm:m-5 m-1">
                Our solutions are deployed in mission critical processes by some
                of the best organizations in the world.
              </p>
              <p className="sm:text-lg text-sm font-medium  text-gray-400 items-center text-justify justify-center sm:pr-10 pr-0 sm:m-5 m-1">
                We derive strength from our experienced team of professionals
                who have in-depth domain knowledge and deep technical skills
                which helps Nextep to identify and understand customer problems
                and provide industry best solutions to address them.
              </p>
              <h1 className="text-xl font-semibold text-yellow-600 mb-4">
                Our products Portfolio Includes
              </h1>
              <div className="flex sm:flex-row flex-col sm:gap-[200px] gap-0 items-start justify-center font-medium text-gray-400 sm:text-lg text-sm">
                <ul className="list-disc">
                  <li>Graphic Fascia and panels</li>
                  <li>Membrane overlays</li>
                  <li>Membrane keypads/switches</li>
                  <li>Nameplates, Logo's</li>
                  <li>Automotive Decals/Dials</li>
                </ul>
                <ul className="list-disc">
                  <li>Rating plates</li>
                  <li>Warranty labels, cautions labels</li>
                  <li>PU domes</li>
                  <li>Die-cut insulators, Gaskets and foams</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Partner />
        <Enquiry />
      </div>
    </>
  );
}

export default AboutUs;
