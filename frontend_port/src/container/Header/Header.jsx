import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import circle from '../../Images/circle.svg'
import sass from '../../Images/sass.png'
import Redux from '../../Images/redux.png'
import reactimg from '../../Images/Reactlogo.png' 
const scaleVariants = {
  whileInView:{
    sclae:[0,1],
    opacity:[0,1],
    transition: {
      duration: 1,
      ease:'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id="home" className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋
            </span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am </p>
              <h1 className='head-text'>Puneet</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Web Developer </p>

          </div>
        </div>
      </motion.div>
      <motion.div
       whileInView={{ x: [-100, 0], opacity: [0, 1] }}
       transition={{ duration: 0.5, delayChildren: 0.5 }}
       className="app__header-img"
      >
        <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f359881d-6bb2-4391-aba6-779f7084edd4/d9vbl4r-3a9ee8b8-4ef4-4476-9b2d-cfbabef9057f.png/v1/fill/w_556,h_1436,strp/iron_man___transparent_by_asthonx1_d9vbl4r-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcL2YzNTk4ODFkLTZiYjItNDM5MS1hYmE2LTc3OWY3MDg0ZWRkNFwvZDl2Ymw0ci0zYTllZThiOC00ZWY0LTQ0NzYtOWIyZC1jZmJhYmVmOTA1N2YucG5nIiwid2lkdGgiOiI8PTYyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.NtD96qyR-MSygZg2yMzEbkOD_ub0ETTTclyDeut0UWQ' />

      <motion.img 
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
       transition={{ duration: 1, ease: 'easeInOut' }}
       className="overlay_circle"
       src={circle}
       alt="overlay_circle" />
      
      </motion.div>


      <motion.div
      variant={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
      >
        {[Redux,reactimg,sass].map((circle,index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src ={circle} alt="circle" />

          </div>

        ))}
      </motion.div>
    </div>
  )
}

export default Header