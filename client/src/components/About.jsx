import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { isFirefox, isBrowser } from 'react-device-detect';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { PupperCanvas } from './canvas';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full orange-red-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-[#402d21] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="flex flex-col xl:flex-row">
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-[#e6a377] text-[17px] max-w-3xl leading-[30px]"
        >
          I am a proud fur pup dad, and with the support of my friends and family, have been able to gain a deep understanding of each of my interests.
          I am a skilled software developer with experience in TypeScript and JavaScript, proficiency in React, Node.js, and Three.js frameworks, and knowledege in WordPress.
          I am a fast learner and work closely with clients to design and implement practical, scalable, and user-friendly solutions that effectively tackle real-world issues.
          Let's team up to transform your concepts into reality! 
        </motion.p>
        {(isBrowser && isFirefox) && <PupperCanvas />}
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");