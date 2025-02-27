import aboutImg from "../assets/pic 1.jpg";
import { ABOUT_TEXT } from "../constants";
import {motion} from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">About 
            <span className="text-neutral-500"> Me</span>
        </h1>

        {/* <div className="felx flex-wrap lg:flex-nowarp item-center">
            <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
                <div className="flex item-center justify-center">
                    <img className="rounded-2xl" src={aboutImg} alt="about" />
                </div>   
            </div>
            <div className="w-full lg:w-1/2 lp:p-8">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
            </div>
        </div> */}

          {/* Flex container for image and text */}
      <div className="flex flex-wrap lg:flex-nowrap items-center">
        
        {/* Left side: Image */}
        <motion.div
          whileInView={{opacity:1 ,x:0}}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
         className="w-full lg:w-1/2 lg:p-8 flex justify-center">
          <img className="rounded-2xl" src={aboutImg} alt="about" />
        </motion.div>

        {/* Right side: Text */}
        <motion.div 
          whileInView={{opacity:1 ,x:0}}
          initial={{ opacity:0, x:100}}
          transition={{duration: 0.5}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>

    </div>
  )
}

export default About