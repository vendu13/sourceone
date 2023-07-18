import {useEffect} from 'react'
import {motion} from "framer-motion";
import style from './Home.module.css'
import homeVideo from '../../../assets/home.mp4'
import globe from '../../../assets/globe2.jpg'
import {BsPeopleFill, BsCloudFill, BsGearFill} from 'react-icons/bs'
import {PiCrosshairFill} from 'react-icons/pi'
import {HiDevicePhoneMobile} from 'react-icons/hi2'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BiSolidCart} from 'react-icons/bi'
import Button from "../../Button/Button.jsx";
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link.js";
import {Link} from "react-router-dom";


const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={style.home}>
            <div className={style.homeVideoText}>
                <video className={style.video} width="750" height="500" autoPlay={true} loop={true} muted={true}
                       playsInline={true}>
                    <source src={homeVideo} type='video/mp4'/>
                </video>
                <div className={style.title}>
                    <motion.div
                        className={style.text}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{once: true, amount: 0.5}}
                        transition={{duration: 0.3}}
                        variants={{
                            hidden: {opacity: 0, y: 100},
                            visible: {opacity: 1, y: 0}
                        }}
                    >
                        <h1>We create the</h1>
                        <h1 className={style.textSecond}>Future</h1>
                    </motion.div>
                    <AnchorLink href='#about'>Explore</AnchorLink>
                </div>
            </div>
            <div className={style.about} id='about'>
                <div className={style.aboutLeft}>
                    <img src={globe} alt='globe' className={style.globe}/>
                </div>
                <div className={style.aboutRight}>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{amount: 0.5}}
                        transition={{duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, y: 100},
                            visible: {opacity: 1, y: 0}
                        }}
                    >
                        <h2>Who We Are?</h2>
                    </motion.div>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{amount: 0.5}}
                        transition={{duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, y: -100},
                            visible: {opacity: 1, y: 0}
                        }}
                    >
                        <p>
                            We facilitate our clients to be the best in their respective fields by utilizing
                            state-of-the-art technology, services and solutions. While suggesting or implementing any
                            new
                            concept for a particular business, we foresee all the impacts of that concept on that
                            specific
                            business. We provide cost-effective solutions to our clients to maximize their returns. Our
                            versatile business model and unique delivery methodologies help us achieve better results.
                        </p>

                    </motion.div>
                    <div className={style.aboutLinks}>
                        <Button text="Let's talk" BGcolor='black'/>
                    </div>
                </div>
            </div>
            <div className={style.technology}>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, y: 100},
                        visible: {opacity: 1, y: 0}
                    }}
                ><h2>Our Technology</h2></motion.div>
                <div className={style.technologies}>
                    <div className={style.line}/>
                    <div className={style.techBlock}>
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{amount: 0.5}}
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, x: -100},
                                visible: {opacity: 1, x: 0}
                            }}
                            className={style.techItem}>
                            <BsPeopleFill className={style.icon} style={{borderColor: '#fdcb92', color: '#fdcb92'}}/>
                            <h3>Staffing</h3>
                            <p>Full Time Recruitment Contract Staffing</p>
                            <Link to='/services/staffing' className={style.linkTech}>
                                <div>Learn more</div>
                                <AiOutlineArrowRight/>
                            </Link>
                        </motion.div>
                        <div className={style.lineVertical}/>
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{amount: 0.5}}
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, x: 100},
                                visible: {opacity: 1, x: 0}
                            }}
                            className={style.techItem}>
                            <BsCloudFill className={style.icon} style={{borderColor: '#92ddfd', color: '#92ddfd'}}/>
                            <h3>Big Data</h3>
                            <p>Data has become unmanageable with the exponential growth and hence can be managed using
                                BigData</p>
                            <Link to='/technology/bigdata&analytics' className={style.linkTech}>
                                <div>Learn more</div>
                                <AiOutlineArrowRight/>
                            </Link>
                        </motion.div>
                    </div>
                    <div className={style.line}/>
                    <div className={style.techBlock}>
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{amount: 0.5}}
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, x: -100},
                                visible: {opacity: 1, x: 0}
                            }}
                            className={style.techItem}>
                            <PiCrosshairFill className={style.icon} style={{borderColor: '#caa6ee', color: '#caa6ee'}}/>
                            <h3>Liferay</h3>
                            <p>An Enterprise web platform which simplifies development with its advanced features</p>
                            <Link to='/technology/liferay' className={style.linkTech}>
                                <div>Learn more</div>
                                <AiOutlineArrowRight/>
                            </Link>
                        </motion.div>
                        <div className={style.lineVertical}/>
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{amount: 0.5}}
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, x: 100},
                                visible: {opacity: 1, x: 0}
                            }}
                            className={style.techItem}>
                            <BiSolidCart className={style.icon} style={{borderColor: '#fbb2d6', color: '#fbb2d6'}}/>
                            <h3>Commerce</h3>
                            <p>We build secure e-commerce websites, including shopping carts, custom commerce websites,
                                which helps you to turn visitors into customers</p>
                            <Link to='/technology/ecommerce' className={style.linkTech}>
                                <div>Learn more</div>
                                <AiOutlineArrowRight/>
                            </Link>
                        </motion.div>
                    </div>
                    <div className={style.line}/>
                    <div className={style.techBlock}>
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{amount: 0.5}}
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, x: -100},
                                visible: {opacity: 1, x: 0}
                            }}
                            className={style.techItem}>
                            <BsGearFill className={style.icon} style={{borderColor: '#73e3d5', color: '#73e3d5'}}/>
                            <h3>SAP</h3>
                            <p>The leader in enterprise applications. Run simple with the best in cloud, analytics,
                                mobile and IT solutions</p>
                            <a href='http://sourceone.education/' target='_blank' rel='noreferrer' className={style.linkTech}>
                                <div>Learn more</div>
                                <AiOutlineArrowRight/>
                            </a>
                        </motion.div>
                        <div className={style.lineVertical}/>
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{amount: 0.5}}
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, x: 100},
                                visible: {opacity: 1, x: 0}
                            }}
                            className={style.techItem}>
                            <HiDevicePhoneMobile className={style.icon}
                                                 style={{borderColor: '#e37773', color: '#e37773'}}/>
                            <h3>Mobile</h3>
                            <p>Native Android & iOS App Development</p>
                            <Link to='/solutions/mobility' className={style.linkTech}>
                                <div>Learn more</div>
                                <AiOutlineArrowRight/>
                            </Link>
                        </motion.div>
                    </div>
                    <div className={style.line}/>
                </div>
            </div>
        </div>
    )
}
export default Home
