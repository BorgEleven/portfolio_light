"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const text = "Contact Me";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        form.current, 
        process.env.NEXT_PUBLIC_KEY,
      )
      .then(
        (result) => { 
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        },
      );
  };

  return (
    <motion.div 
      className="h-full" 
      initial={{y:"-200vh"}} 
      animate={{y:"0%"}} 
      transition={{duration: 1}}
      >
      <div className="h-full flex flex-col lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/*  TEXT */}
        <div className="f-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-7xl">
          <div className="mr-20">
            {text.split("").map((letter , index) => (
              <motion.span 
              key={index} 
              initial={{opacity: 1}}
              animate={{opacity: 0}}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: index * 0.1,
              }}
              >
                {letter}
              </motion.span>
            ))}
            
          </div>
        </div>
        {/*  FORM */}
        <form 
          onSubmit={sendEmail}
          ref={form} 
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl flex flex-col gap-8 justify-center p-24">
        <span>Dear Josip Dev,</span>
        <textarea 
          rows={6} 
          className="bg-transparent border-b-2 border-b-black outline-none"
          name="user_message"
        />
        <span>My email adress is:</span>
        <input
          name="user_email" 
          type="text" 
          className="bg-transparent border-b-2 border-b-black outline-none"
        />
        <span>Regards</span>
        <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">Send</button>
        {success && <span className="text-green-600 font-semibold">Message sent successfully</span>}
        {error && <span className="text-red-600 font-semibold">Message not sent</span>}
        </form>
      </div>
      </motion.div>
  )
}

export default ContactPage