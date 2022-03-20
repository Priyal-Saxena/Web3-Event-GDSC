<<<<<<< Updated upstream
import React from 'react'
import image1 from '../utils/Images/image1.png'
import image2 from '../utils/Images/image2.png'
import image3 from '../utils/Images/image3.png'
import image4 from '../utils/Images/image4.png'
import '../styles/sections/About.css'
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
const About  = () => {
  return (
	<div className='about'>
      <div className="about-content">
         
		 <div className="about-leftContent">
		 <h1>About W3Website</h1>
		 <hr />
			<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, reiciendis, vero soluta vel perferendis doloremque perspiciatis neque reprehenderit ratione error voluptatibus a consequatur quia ipsa suscipit, totam molestiae nulla nostrum iure debitis magni harum porro. Reprehenderit ipsum rem obcaecati illum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates,<br /><br /><br /> reiciendis, vero soluta vel perferendis doloremque perspiciatis neque reprehenderit ratione error voluptatibus a consequatur quia ipsa suscipit, totam molestiae nulla nostrum iure debitis magni harum porro. Reprehenderit ipsum rem obcaecati illum!</p>
		 </div>
		 <div className="about-leftImage">
         <div> <img src={image1} alt="" /></div>
          <div><img src={image2} alt="" /></div>
		 </div>
	  </div>
	  <div className="about-content">
	  <div className="about-rightImage">
         <div><img src={image3} alt="" /></div>
         <div><img src={image4} alt="" /></div>
		 </div>
		 <div className="about-rightContent">
		 <h2>Why you should attend ?</h2>
		<div className="about-contentList"><TaskAltOutlinedIcon style={{color : 'rgba(58, 160, 243, 1)',width :'20px',height:'20px'}}/>  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p></div>
		<div className="about-contentList"><TaskAltOutlinedIcon style={{color : 'rgba(58, 160, 243, 1)',width :'20px',height:'20px'}}/>  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p></div>
		<div className="about-contentList"><TaskAltOutlinedIcon style={{color : 'rgba(58, 160, 243, 1)',width :'20px',height:'20px'}}/>  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p></div>
		<div className="about-contentList"><TaskAltOutlinedIcon style={{color : 'rgba(58, 160, 243, 1)',width :'20px',height:'20px'}}/>  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p></div>
		<div className="about-contentList"><TaskAltOutlinedIcon style={{color : 'rgba(58, 160, 243, 1)',width :'20px',height:'20px'}}/>  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p></div>
		
		 </div>
	  </div>
	</div>
  )
=======
import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { HiLightBulb } from "react-icons/hi";
import { BsFillCalendarFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { SiGooglemessages } from "react-icons/si";
import { motion } from "framer-motion";
import "../styles/sections/About.scss";
import { reveal } from "../utils/Animations";
import { textAnimation, cardAnimation } from "../utils/Animations";
import Schedule from "../components/Schedule/Schedule";

function About() {
	const [element, controls] = useScroll();

	return (
		<div className="about-container" id="about" ref={element}>
			<div className="container">
				<motion.div
					className="title-container"
					variants={textAnimation}
					animate={controls}
					transition={{
						duration: 1,
					}}
				>
					<Title title="Schedule" color="blue" lineCenter={true} />
					{/* <p>Our Sponsors</p> */}
				</motion.div>
				<Schedule />
				{/* <p>
						We Believe that everyone deserves to have a website or online store. Innovation and simplicity
						make us happy. Our mission is to help people achieve what they have passionate about it.
					</p>
					<p>We are excited to simplify SEO for everyone through software, education, or cimmunity.</p> */}
				{/* <Button content="Why web3?" /> */}

				{/* <div className="cards" ref={element}>
					<Card title="Innovative Ideas" logo={<HiLightBulb />} animateCustom={controls} />
					<Card title="Planning" logo={<BsFillCalendarFill />} animateCustom={controls} />
					<Card title="Communication" logo={<BiSupport />} animateCustom={controls} />
					<Card title="24 * 7 Support" logo={<SiGooglemessages />} animateCustom={controls} />
				</div> */}
			</div>
		</div>
	);
>>>>>>> Stashed changes
}

export default About 