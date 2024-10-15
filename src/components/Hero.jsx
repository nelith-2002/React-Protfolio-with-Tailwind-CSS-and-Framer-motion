import {HERO_CONTENT} from "../constants";
import profilePic from "../assets/pic 2.jpg";
import { motion } from "framer-motion";

const container= (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible:{
        x: 0,
        opacity: 1,
        transition: {
            delay:0.5 ,delay: delay
        },
    },
});

const Hero = () => {
  return (
    <div className="border-b border-netural-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col item-center lg:item-start">
                    <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-16 text-6xl font-thin tracking-tight lg:mt-16">Nelith Nethsanda
                    </motion.h1>
                    <motion.span 
                      variants={container(0.5)} initial="hidden" animate="visible"
                      className="bg-gradient-to-r from-blue-300 via-slate-500 to-green-500 bg-clip-text tracking-tight text-3xl text-transparent">Front-End Developer
                        
                    </motion.span>
                    <motion.p 
                        variants={container(1)} initial="hidden" animate="visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img
                     initial={{x:-100, opacity:0}}
                     animate={{x:0, opacity:1}}
                     transition={{duration:1 ,delay:1.2}}
                     src={profilePic} 
                     alt="Kevin Rush"
                     className="rounded-2xl"
                      />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero