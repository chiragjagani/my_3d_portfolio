import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../components/Loader";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLaoding] = useState(false);
  const [currentAnimation, setcurrentAnimation] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventdefault();
    setIsLaoding(true);
    setcurrentAnimation("hit");

    emailjs
      .send
      //do it later :- emailJS
      (),
      then(() => {
        setIsLaoding(false);
        // TODO: show success message
        // TODO: Hide an alert

        setTimeout(() => {
          setcurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      }).catch((error) => {
        setIsLaoding(false);
        setcurrentAnimation("idle");
        console.log(error);
        // TODO: show error message
      });
  };

  const handleFocus = () => setcurrentAnimation("walk");
  const handleBlure = () => setcurrentAnimation("idle");

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h7 className="text-transparent bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text">
          *Not Working... I will Fix as soon as possible*
        </h7>
        <h6 className="text-transparent bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text">
          Contact me on (info.chiragjagani@gmail.com)
        </h6>
        <h1 className="head-text blue-gradient_text">Get in Touch</h1>

        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Chirag"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlure}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="chirag@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlure}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlure}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlure}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />

          <ambientLight intensity={0.5} />

          <pointLight position={[5, 10, 0]} intensity={2} />

          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
