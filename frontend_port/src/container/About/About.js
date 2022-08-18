import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './About.scss'
import pic1 from '../../Images/about01.png'
import pic2 from '../../Images/about02.png'
import pic3 from '../../Images/about03.png'

const About = () => {
  const abouts = [
    { title: 'Front-end', description: 'I am a good web developer.', imgUrl: pic1 },
    { title: 'back-end', description: 'I am a good web developer.', imgUrl: pic2 },
    { title: 'web design', description: 'I am a good web developer.', imgUrl: pic3 }
  ];
  return (
    <>
      <h2 className='head-text'>I know That
        <span>Good Design</span><br />means
        <span>Good Business
        </span>
      </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
          whileInView={{ opactiy:1 }}
          whileHover={{ scale: 1.1 }}
          transition={{duration: 0.5,type: 'tween'}}
          className="app__profile-item"
          key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
            <p className='bold-text' style={{marginTop:10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About;