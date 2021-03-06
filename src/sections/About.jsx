import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import Title from '../components/Title';
import { useScroll } from '../components/useScroll';
import { HiLightBulb } from 'react-icons/hi';
import { BsFillCalendarFill } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';
import { SiGooglemessages } from 'react-icons/si';
import { motion } from 'framer-motion';
// import '../styles/sections/About.scss';
import '../styles/sections/About.css';
import { reveal } from '../utils/Animations';
import { textAnimation, cardAnimation } from '../utils/Animations';
import Schedule from '../components/Schedule/Schedule';
import ImgCard from '../components/ImgCard';
import CryptoImg from '../assets/about_section/crypto_img.svg';
import MetaverseImg from '../assets/about_section/metaverse_img.svg';
import BlockchainImg from '../assets/about_section/blockchain_img.svg';
import NftImg from '../assets/about_section/nft_img.svg';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import '../styles/sections/Schedule.scss';
import '../styles/sections/About.css';
import {
  headerAnimation,
  headerAnimationRight,
  imageAnimation,
} from '../utils/Animations';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { GoPlay } from 'react-icons/go';

function About() {
  const [element, controls] = useScroll();
  return (
    <div className="about schedule-container" id="about" ref={element}>
      <div className="about-content">
        <div className="about-leftContent">
          {/* <h1>About W3Website</h1> */}
          <motion.div
            className="title-container"
            variants={textAnimation}
            animate={controls}
            transition={{
              duration: 1,
            }}
          >
            <Title title="About W3Website" color="blue" lineCenter={false} />
          </motion.div>
          {/* <hr /> */}
          <motion.div
            className="content"
            variants={headerAnimation}
            animate={controls}
            transition={{ delay: 0.35, type: 'tween' }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates, reiciendis, vero soluta vel perferendis doloremque
              perspiciatis neque reprehenderit ratione error voluptatibus a
              consequatur quia ipsa suscipit, totam molestiae nulla nostrum iure
              debitis magni harum porro. Reprehenderit ipsum rem obcaecati
              illum! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates,
              <br />
              <br />
              <br /> reiciendis, vero soluta vel perferendis doloremque
              perspiciatis neque reprehenderit ratione error voluptatibus a
              consequatur quia ipsa suscipit, totam molestiae nulla nostrum iure
              debitis magni harum porro. Reprehenderit ipsum rem obcaecati
              illum!
            </p>
          </motion.div>
        </div>

        <motion.div
          className="image about-leftImage"
          variants={imageAnimation}
          animate={controls}
          transition={{ delay: 0.5, type: 'tween' }}
        >
          <ImgCard
            image={BlockchainImg}
            title="Blockchain"
            // variants={cardAnimation}
            // animate={controls}
          />
          <ImgCard
            image={NftImg}
            title="NFT's"
            // variants={cardAnimation}
            // animate={controls}
          />
        </motion.div>
      </div>
      <div className="about-content">
        <motion.div
          className="image about-rightImage"
          variants={imageAnimation}
          animate={controls}
          transition={{ type: 'tween' }}
        >
          <ImgCard
            image={CryptoImg}
            title="Crypto"
            // variants={cardAnimation}
            // animate={controls}
          />
          <ImgCard
            image={MetaverseImg}
            title="Metaverse"
            // variants={cardAnimation}
            // animate={controls}
          />
        </motion.div>

        <div className="about-rightContent">
          <motion.div
            className="content"
            variants={headerAnimationRight}
            animate={controls}
            transition={{ delay: 0.5, type: 'tween' }}
          >
            <h2>Why you should attend ?</h2>
            <div className="about-contentList">
              <TaskAltOutlinedIcon
                style={{
                  color: 'rgba(58, 160, 243, 1)',
                  width: '20px',
                  height: '20px',
                }}
              />{' '}
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            <div className="about-contentList">
              <TaskAltOutlinedIcon
                style={{
                  color: 'rgba(58, 160, 243, 1)',
                  width: '20px',
                  height: '20px',
                }}
              />{' '}
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            <div className="about-contentList">
              <TaskAltOutlinedIcon
                style={{
                  color: 'rgba(58, 160, 243, 1)',
                  width: '20px',
                  height: '20px',
                }}
              />{' '}
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            <div className="about-contentList">
              <TaskAltOutlinedIcon
                style={{
                  color: 'rgba(58, 160, 243, 1)',
                  width: '20px',
                  height: '20px',
                }}
              />{' '}
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            <div className="about-contentList">
              <TaskAltOutlinedIcon
                style={{
                  color: 'rgba(58, 160, 243, 1)',
                  width: '20px',
                  height: '20px',
                }}
              />{' '}
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
