import React, { useState } from "react";
import Divider from "../components/Divider";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { useForm } from "react-hook-form";
import Footer from '../components/Footer'

import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css";
import emailjs from 'emailjs-com'




const Contacts = () => {
  const [emailName, setEmailName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      // className: "submit-feedback success",
      // toastId: "notifyToast",
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { emailName, emailAddress, message } = data;
  };

  return (
    <div className="mt-20 h-screen relative font-univers">
      <div className="flex items-center justify-center font-extrabold">
        <h1 className="text-3xl">contact.</h1>
      </div>
      <Divider />
      <div className="mb-auto md:flex px-20 mt-10">
        <div className="border p-8 ">
          <div>
            <h4 className="text-xl text-center">Send me an email</h4>
          </div>
          <div className="mt-5">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div className="my-4">
                <label className="text-sm">Name: </label>

                <div className="mt-2 mb-2 w-full">
                  <input
                    type="text"
                    name="emailName"
                    className="w-full bg-primary border border-input rounded h-10 p-2"
                    onChange={(e) => setEmailName(e.target.value)}
                    {...register("emailName", {
                      required: {
                        value: true,
                        message: "Please enter your name",
                      },
                      maxLength: {
                        value: 30,
                        message: "Please use 30 characters or less",
                      },
                    })}
                  />
                </div>
                {errors.emailName && (
                  <span className="text-red-400">{errors.name.message}</span>
                )}
              </div>
              <div className="my-4">
                <label className="text-sm">Email Address:</label>
                <div className="mt-2 mb-2 w-full">
                  <input
                    type="email"
                    name="emailAddress"
                    className="w-full bg-primary border border-input rounded h-10 p-2"
                    onChange={(e) => setEmailAddress(e.target.value)}
                    {...register("emailAddress", {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    })}
                  />
                </div>
                {errors.email && (
                  <span className="text-red-400">
                    Please enter a valid email address
                  </span>
                )}
              </div>
              <div className="my-4">
                <label className="text-sm">Message:</label>
                <div className="mt-2 mb-2 w-full">
                  <textarea
                    //rows={3}
                    name="message"
                    className="w-full bg-primary border border-input rounded h-60 p-2"
                    onChange={(e) => setMessage(e)}
                    {...register("message", {
                      required: true,
                      maxLength: 150,
                    })}
                  />
                </div>
                {errors.message && (
                  <span className="text-red-400">Please enter a message</span>
                )}
              </div>
              <button
                type="submit"
                disabled={disabled}
                className="border border-primary p-3 hover:text-secondary hover:bg-secondary text-primary bg-primary w-[80px] rounded h-12 mt-3 ml-[90px]"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <ToastContainer />
        <div className="mt-20">
          <div>
            <h4 className="text-md ml-10">connect with me on social media.</h4>
          </div>
          <div className="flex mt-5 items-center justify-center">
            <div className="ml-5">
              <a
                href="http://www.linked.com/in/mbah-favour-chiamaka"
                target="_blank"
                rel="nonreferrer"
              >
                <AiOutlineLinkedin size={24} />
              </a>
            </div>
            <div className="ml-5">
              <a
                href="https://github.com/mbahfavour"
                target="_blank"
                rel="nonreferrer"
              >
                <AiOutlineGithub size={24} />
              </a>
            </div>
            <div className="ml-5">
              <a href="" target="_blank" rel="noreferrer">
                <AiOutlineTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-[240px]">
        <Footer />
      </div>
    </div>
  );
};

export default Contacts;
