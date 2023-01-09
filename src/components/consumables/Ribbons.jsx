import React from 'react'
import { motion } from 'framer-motion'
function Ribbons() {
  return (
    <>
      <div className="h-full bg-gradient-to-r from-green-300 to-blue-300 dark:text-black">
        <div className='flex flex-col items-center justify-center'>
            <h1 className="sm:text-6xl text-3xl sm:my-6 my-2 font-semibold">Industrial Ribbons</h1>
            <motion.p 
            initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            className='items-center justify-center sm:text-lg text-sm text-center font-medium my-2 sm:mx-36 mx-10'>Nextep provides a comprehensive range of ribbons that are compatible with all printers on the market: Zebra, Sato, Datamax, Honeywell, etc. Since we manufacture ribbons as well we can handle all design or modification. Our technical experts will advise you on the best ribbon that suits your application, need and budget.</motion.p>
        </div>
        <div>
            <div className='flex sm:flex-row flex-col items-center justify-evenly mt-0'>
                <motion.div 
                initial={{
                    x: -100,
                    opacity: 0,
                  }}
                  transition={{ duration: 2 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                className='flex items-center justify-center w-[100%] sm:ml-[200px] ml-0 sm:mr-10 mr-0'>
                    <img src="https://www.qodenext.com/images/consumables/ribbon.webp" alt="" className='sm:h-[400px] h-[200px] rounded-xl'/>
                </motion.div>
                <div className='flex flex-col items-center justify-center sm:mr-[200px] mr-0 sm:ml-10 ml-0 w-[100%]'>
                <motion.div 
                initial={{
                    x: 100,
                    opacity: 0,
                  }}
                  transition={{ duration: 2 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                className='mb-3 flex flex-col items-center justify-center sm:mx-0 mx-12'>
                    <h2 className='sm:text-2xl text-md  font-semibold text-gray-500'>Our Ribbons addresses the following complications:</h2>
                    <ul className='space-y-4 sm:text-lg text-sm list-disc list-inside dark:text-gray-900  items-center justify-center text-start mt-3'>
                        <li>The bar within the barcode expands or grow beyond their normal growth</li>
                        <li>Image is light or washed out and poor scanning read rates</li>
                        <li>Dead spots on labels</li>
                        <li>Inconsistent image quality</li>
                        <li>Ribbon Breaks</li>
                        <li>Ribbon wrinkles</li>
                    </ul>
                </motion.div>
                </div>
            </div>

            <div className='flex sm:flex-row-reverse flex-col  items-center justify-evenly mt-20'>
                <motion.div 
                initial={{
                    x: -100,
                    opacity: 0,
                  }}
                  transition={{ duration: 2 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                className='flex items-center justify-center w-[100%] sm:mr-[200px] mr-0 sm:ml-10 ml-0'>
                    <img src="https://www.qodenext.com/images/consumables/wax-ribbon.webp" alt="" className='sm:h-[400px] h-[200px] rounded-xl'/>
                </motion.div>
                <div className='flex flex-col items-center justify-center sm:ml-[200px] ml-0 sm:mr-10 mr-0 w-[100%]'>
                <motion.div 
                initial={{
                    x: 100,
                    opacity: 0,
                  }}
                  transition={{ duration: 2 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                className='mb-3 flex flex-col items-center justify-center sm:mx-0 mx-12 '>
                    <h2 className='sm:text-2xl text-md font-semibold text-gray-500'>Wax Ribbons for Cost-Effective Performance</h2>
                    <ul className='space-y-4 sm:text-lg text-sm list-disc list-inside dark:text-gray-900  items-center justify-center text-start mt-3'>
                        <li>For standards printing on paper materials</li>
                        <li>Compatible with uncoated and coated paper</li>
                        <li>Offers crystal clear text and high-density black ink printing</li>
                        <li>Provides outstanding print quality on bar codes, small font size texts, large symbols and graphics</li>
                    </ul>
                </motion.div>
                </div>
            </div>
           
            <div className='flex sm:flex-row flex-col items-center justify-evenly mt-20'>
                <motion.div 
                 initial={{
                    x: -100,
                    opacity: 0,
                  }}
                  transition={{ duration: 2 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                className='flex items-center justify-center w-[100%] sm:ml-[200px] ml-0 sm:mr-10 mr-0'>
                    <img src="https://www.qodenext.com/images/consumables/wax-rasin.webp" alt="" className='sm:h-[400px] h-[200px] rounded-xl'/>
                </motion.div>
                <div className='flex flex-col items-center justify-center sm:mr-[200px] mr-0 sm:ml-10 ml-0 w-[100%]'>
                <motion.div 
                 initial={{
                    x: 100,
                    opacity: 0,
                  }}
                  transition={{ duration: 2 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                className='mb-3 flex flex-col items-center justify-center sm:mx-0 mx-12'>
                    <h2 className='sm:text-2xl text-md  font-semibold text-gray-500'>Wax/Resin Ribbons for All Around Performance</h2>
                    <ul className='space-y-4 sm:text-lg text-sm list-disc list-inside dark:text-gray-900  items-center justify-center text-start mt-3'>
                        <li>Excellent resistance to chemicals on paper and synthetics</li>
                        <li>Compatible with glossy paper, coated paper and synthetic / thin film materials</li>
                        <li>Anti-scratch and antifouling for long-lasting barcode and image life</li>
                        <li>Excellent chemical corrosion and high temperature resistance</li>
                        <li>Exceptional print quality, even for 90 oC barcode printing</li>
                    </ul>
                </motion.div>
                </div>
            </div>

            <div className='flex sm:flex-row-reverse flex-col  items-center justify-evenly mt-20'>
                <motion.div 
                  initial={{
                    x: -100,
                    opacity: 0,
                  }}
                  transition={{ duration: 2 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                className='flex items-center justify-center w-[100%] sm:mr-[200px] mr-0 sm:ml-10 ml-0'>
                    <img src="https://www.qodenext.com/images/consumables/rasin-ribbon.webp" alt="" className='sm:h-[400px] h-[200px] rounded-xl'/>
                </motion.div>
                <div className='flex flex-col items-center justify-center sm:ml-[200px] ml-0 sm:mr-10 mr-0 w-[100%]'>
                <motion.div 
                  initial={{
                    x: 100,
                    opacity: 0,
                  }}
                  transition={{ duration: 2 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                className='mb-3 flex flex-col items-center justify-center sm:mx-0 mx-12 '>
                    <h2 className='sm:text-2xl text-md font-semibold text-gray-500'>Resin Ribbons for Premium Performance</h2>
                    <ul className='space-y-4 sm:text-lg text-sm list-disc list-inside dark:text-gray-900  items-center justify-center text-start mt-3'>
                        <li>Provide ultimate durability against chemicals and heat on synthetics</li>
                        <li>Compatible with multiple synthetic materials (PVC, PET, PE, PP), semi-gloss paper, glossy coated paper and washable materials</li>
                        <li>Excellent antifouling and anti-scratch performance, maintaining high quality images even when exposed to dissolvent</li>
                        <li>Outstanding resistance to alcohol and unleaded gasoline</li>
                        <li>Superior thermal resistances up to 180oC also suitable for chemical products packaging</li>
                        <li>Highly resistant to industrial laundering and ironing</li>
                    </ul>
                </motion.div>
                </div>
            </div>

        </div>
      <hr class="w-48 h-1 mx-auto mt-10 bg-gray-200 border-0 rounded  dark:bg-gray-700"></hr>

      </div>
    </>
  )
}

export default Ribbons
