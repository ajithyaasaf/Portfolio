import React from 'react';
import { AiFillLinkedin, AiOutlineHome, AiOutlinePhone } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Contact = () => {
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  return (
    <div className='px-6 pt-16 sm:pt-16 sm:pb-16 lg:pb-16 md:h-[130vh] bg-secondary' id="contact">
      <motion.div
        className="mx-auto max-w-7axl px-4 sm:px-6 lg:px-8 py-10 bg-primary rounded-xl md:rounded-full relative bottom-4 md:bottom-0 md:top-7"
        initial="hidden"
        animate="visible"
        variants={formVariants}
      >
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center md:mx-auto">
            <h2 className="mb-4 font-bold tracking-tight text-gray-200 text-3xl sm:text-5xl">
              Let´s Connect
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-400">
              and start working on amazing things
            </p>
          </div>
        </div>

        <div className="flex justify-center w-100">
          <div className="grid md:grid-cols-2">
            <div className="my-auto pr-6">
              <ul>
                <li className="flex">
                  <AiOutlineHome className='w-[70px] h-auto text-cyan-400 ml-3 md:ml-0' />
                  <div className="m-5">
                    <h3 className="text-lg font-bold text-gray-200">Address</h3>
                    <p className="text-gray-400">Annanagar, Chennai</p>
                  </div>
                </li>
                <li className="flex">
                  <AiOutlinePhone className='w-[70px] h-auto text-gray-300 ml-3 md:ml-0' />
                  <div className="m-5">
                    <h3 className="text-lg font-bold text-gray-200">Contact</h3>
                    <p className="text-gray-400">Mobile: 9361577742</p>
                    <p className="text-gray-400">Mail: ajithkannan.ag@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>

            <motion.div
              className="max-w-6xl p-5 md:p-12"
              id="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="mb-4 text-2xl font-bold text-gray-300">Ready to Get Started?</h2>
              <form action="https://formspree.io/f/xpzvkbjy" method="POST">
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <input
                      type="text"
                      id="name"
                      autoComplete="given-name"
                      placeholder="Your name"
                      className="mb-2 w-full rounded-md border border-gray-600 py-2 pl-2 pr-4 bg-secondary-color text-black"
                      name="name"
                    />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <input
                      type="email"
                      id="email"
                      autoComplete="email"
                      placeholder="Your email address"
                      className="mb-2 w-full rounded-md border border-gray-600 py-2 pl-2 pr-4 bg-secondary-color text-black"
                      name="email"
                    />
                  </div>
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                  <textarea
                    id="textarea"
                    name="textarea"
                    cols="30"
                    rows="5"
                    placeholder="Write your message..."
                    className="mb-2 w-full rounded-md border border-gray-600 py-2 pl-2 pr-4 bg-secondary-color text-black"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn w-full bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-3 font-xl rounded-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
