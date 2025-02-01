import React from 'react'
import {Tilt} from 'react-tilt'; 
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt
      className="w-full sm:w-[250px]"
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-1-2 rounded-[20px] shadow-class"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-center items-center">
          <img src={icon} alt={title} className="w-16 h-16 object-contain mb-4" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>

  )
}

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I'm a skilled software developer with proficiency in a range of different languages and tools. Currently I'm exploring frameworks such as React, Node.js and Three.js.
        I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} /> 
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About, 'about')