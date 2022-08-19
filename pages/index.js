import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Typical from "react-typical";

import GithubIcon from "../components/icons/Github.js";
import TwitterIcon from "../components/icons/Twitter.js";
import LinkedinIcon from "../components/icons/Linkedin.js";
const TypingAnimation = React.memo(
  () => { 
  return(
    <Typical
    loop={3}
    wrapper="p"
    steps={[
      "🌐  Web Developer",
      2000,
      "📱  Mobile Developer",
      2000,
      "   IOS Developer",
      2000,
    ]}
    />
  )
},
  (props ,prevProps)=> true
)

export default function Home() {
  return (
   <Layout title={"Portfolio"} description={"description"}>
    <motion.img src='/images/ball-1.svg' alt='ball1' className='hidden md:block h-auto absolute top-48 right-10 z-[1]'
    whileHover={{y:-10, x:-10,rotate:90}}
    drag
    dragConstraints={{top:0,right:0,bottom:0,left:0}}
    />  
    <motion.img src='/images/ball-2.svg' alt='ball2' className='hidden md:block h-auto absolute bottom-10 left-10 z-[1]'
    whileHover={{y:+10, x:+10,rotate:90}}
    drag
    dragConstraints={{top:0,right:0,bottom:0,left:0}}/>
    <main className='w-full h-full'>
    <section className='w-full max-w-5xl mx-auto pt-16 md:pt-8'>
    <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-lg text-gray-800 dark:text-white">
              <span className="text-xl font-normal">Hello,</span> I'm
            </h4>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white">
              Can Balaman
            </h1>
            <div className="mt-5 text-2xl font-normal text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-3">
              <TypingAnimation />
            </div>
            <div className="flex items-center mt-8 space-x-6 md:mt-4">
              <motion.a
                href="https://github.com/canbalaman"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <GithubIcon className={"w-8 h-8 fill-current"} />
              </motion.a>

              <motion.a
                href="https://twitter.com/CanBalaman5"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <TwitterIcon className={"w-8 h-8 fill-current"} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/can-balaman/"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <LinkedinIcon className={"w-8 h-8 fill-current"} />
              </motion.a>
            </div>
              {/* Code Area */}
          <article className="mt-3 prose md:mt-5 md:prose-lg dark:prose-dark ">
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500 text">
                    <span>Portfolio</span>
                  </div>
                  <p>
                    <span className="text-gray-500"></span>{""}
                    <span className="text-purple-300"></span>I'm not sure how it's going, but I'm working on it.
                     Maybe everything will be alright
                  </p>

                  <div className="flex items-center space-x-4">
                    <img 
                      src="https://thumbs2.imgbox.com/d6/36/A1nSA2j7_t.jpg" 
                                   
                      alt="Me"
                      className="w-10 h-10 rounded-full"
                    />

                    <div className="">
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> 📱
                        <span className="font-bold text-pink-300"></span> =
                        ["Flutter","Swift","Kotlin"];{" "}
                      </p>
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> 💻
                        <span className="font-bold text-pink-300"></span> =
                        ["C#", "Java", "Python"];{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                  <Link href="/projects">
                      <a className="transition duration-300">Projects</a>
                    </Link>
                    <Link href="/blogs">
                      <a className="transition duration-300">Blog</a>
                    </Link>
                  </div>
                </code>
              </pre>
            </div>
          </article>
      </div>
    </section>
    </main>
   </Layout>
  )
}
