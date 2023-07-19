import style from './Header.module.css'
import {AnimatePresence, motion} from "framer-motion";
import logo from '../../assets/logo.webp'
import {Link} from "react-router-dom";
import Arrow from "../Arrow/Arrow.jsx";
import {useState} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import useMediaQuery from "../../hooks/useMediaQuery.js";

const Header = ({isTopOfPage, show}) => {
    const navbarStyle =
        isTopOfPage
            ?
            {backgroundColor: ''}
            :
            {backgroundColor: 'black'}

    const [isMenuToggled, setIsMenuToggled] = useState(false)


    const [part1, setPart1] = useState(false)
    const [part2, setPart2] = useState(false)
    const [part3, setPart3] = useState(false)

    const [styleHeader, setStyleHeader] = useState(false)
    const [showTechnology, setShowTechnology] = useState(false)
    const [showSolutions, setShowSolutions] = useState(false)
    const [showServices, setShowServices] = useState(false)


    const disableAll = () => {
        setShowTechnology(false)
        setShowSolutions(false)
        setShowServices(false)
    }

    const isAboveMobileScreens = useMediaQuery('(min-width: 1040px)');

    return (
        <AnimatePresence>
            {show && isAboveMobileScreens &&
                <motion.nav
                    initial='hidden'
                    whileInView='visible'
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, y: -80},
                        visible: {opacity: 1, y: 0},
                    }}
                    exit={{opacity: 0, y: -80}}
                    className={style.header}
                    style={navbarStyle}
                    onMouseOverCapture={() => {
                        if (showTechnology) {
                            setShowTechnology(true)
                        }
                        if (showServices) {
                            setShowServices(true)
                        }
                        if (showSolutions) {
                            setShowSolutions(true)
                        }
                    }}

                    onMouseLeave={() => {
                        setShowTechnology(false)
                        setShowSolutions(false)
                        setShowServices(false)
                        setStyleHeader(false)
                    }}
                >
                    <div className={style.headerContainer}
                         style={styleHeader ? {backgroundColor: "black"} : {}}
                    >
                        <img src={logo} alt='logo' className={style.logo}/>
                        <ul className={style.menu}>
                            <li
                                onMouseOver={() => {
                                    setStyleHeader(true)
                                    disableAll()
                                }}
                            >
                                <Link className={style.link} to='/'>Home</Link>
                            </li>
                            <li
                                onMouseOver={() => {
                                    setStyleHeader(true)
                                    disableAll()
                                }}
                            >
                                <Link className={style.link} to='/aboutus'>About Us</Link>
                            </li>
                            <li
                                onMouseOver={() => {
                                    setShowTechnology(true)
                                    setStyleHeader(true)
                                    setShowServices(false)
                                    setShowSolutions(false)
                                }}
                                onMouseLeave={() => {
                                    setShowTechnology(false)
                                }}
                            >
                                Technology <Arrow focus={showTechnology}/>
                            </li>
                            <li
                                onMouseOver={() => {
                                    setShowSolutions(true)
                                    setStyleHeader(true)
                                    setShowServices(false)
                                    setShowTechnology(false)
                                }}
                                onMouseLeave={() => {
                                    setShowSolutions(false)
                                }}
                            >Solutions
                                <Arrow focus={showSolutions}/>
                            </li>
                            <li
                                onMouseOver={() => {
                                    setShowServices(true)
                                    setStyleHeader(true)
                                    setShowTechnology(false)
                                    setShowSolutions(false)
                                }}
                                onMouseLeave={() => {
                                    setShowServices(false)
                                }}
                            >Services
                                <Arrow focus={showServices}/>
                            </li>
                            <li
                                onMouseOver={() => {
                                    setStyleHeader(true)
                                    disableAll()
                                }}
                            >
                                <Link className={style.link} to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {showTechnology &&
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, y: -50},
                                visible: {opacity: 1, y: 0},
                            }}
                            style={showTechnology || showServices || showSolutions ? {backgroundColor: "black"} : {}}
                            className={style.additionalHeader}
                            onMouseOver={() => {
                                if (showTechnology) {
                                    setShowTechnology(true)
                                }
                            }}
                            onMouseLeave={() => {
                                setShowTechnology(false)
                            }}
                        >
                            <ul
                                className={style.technology}
                            >
                                <li><Link className={style.link} to='/technology/liferay'>Liferay</Link></li>
                                <li><Link className={style.link} to='/technology/bigdata&analytics'>BigData &
                                    Analytics</Link></li>
                                <li><Link className={style.link} to='/technology/ecommerce'>E-Commerce</Link></li>
                                <li><a href='http://sourceone.education/' target="_blank" rel='noreferrer'
                                       className={style.link}>SAP</a></li>
                            </ul>
                        </motion.div>
                    }
                    {showServices &&
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, y: -50},
                                visible: {opacity: 1, y: 0},
                            }}
                            className={style.additionalHeader}
                            style={showTechnology || showServices || showSolutions ? {
                                backgroundColor: "black",
                                height: 100,
                                padding: '1rem 3rem'
                            } : {}}
                            onMouseOver={() => {
                                if (showServices) {
                                    setShowServices(true)
                                }
                            }}
                            onMouseLeave={() => {
                                setShowServices(false)
                            }}
                        >
                            <ul
                                className={style.technology}
                                style={{flexDirection: "column", gap: '0.5rem', padding: 0}}
                            >
                                <div className={style.tech} style={{width: '90%'}}>
                                    <li><Link className={style.link} to='/services/outsourcing'>Recruitment Process
                                        Outsourcing</Link></li>
                                    <li><Link className={style.link} to='/services/supplier'>Master Supplier
                                        Program</Link></li>
                                    <li><Link className={style.link} to='/services/automation'>Talent Automation
                                        Systems</Link></li>
                                    <li><Link className={style.link} to='/services/workforce'>Enterprise Workforce
                                        Enabler</Link></li>
                                </div>

                                <div className={style.tech}>
                                    <li><Link className={style.link} to='/services/deployment'>Training & Deployment
                                        Services</Link>
                                    </li>
                                    <li><Link className={style.link} to='/services/recruitment'>Fulltime
                                        Recruitment</Link></li>
                                    <li><Link className={style.link} to='/services/transfer'>Build and Transfer
                                        Program</Link></li>
                                    <li><Link className={style.link} to='/services/staffing'>Contract Staffing</Link>
                                    </li>
                                    <li><a href='http://sourceone.education/' target="_blank" rel='noreferrer'
                                           className={style.link}>SAP Services</a></li>
                                </div>
                            </ul>
                        </motion.div>
                    }
                    {showSolutions &&
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, y: -50},
                                visible: {opacity: 1, y: 0},
                            }}
                            className={style.additionalHeader}
                            style={showTechnology || showServices || showSolutions ? {backgroundColor: "black"} : {}}
                            onMouseOver={() => {
                                if (showSolutions) {
                                    setShowSolutions(true)
                                }
                            }}
                            onMouseLeave={() => {
                                setShowSolutions(false)
                            }}
                        >
                            <ul
                                className={style.technology}
                            >
                                <li><Link className={style.link} to='/solutions/business'>Business Process
                                    Outsourcing</Link>
                                </li>
                                <li><Link className={style.link} to='/solutions/mobility'>Mobility</Link></li>
                                <li><Link className={style.link} to='/solutions/uidevelopment'>UI Development</Link>
                                </li>
                            </ul>
                        </motion.div>
                    }

                </motion.nav>}
            {!isAboveMobileScreens &&
                <motion.nav
                    initial='hidden'
                    whileInView='visible'
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, y: -80},
                        visible: {opacity: 1, y: 0},
                    }}
                    exit={{opacity: 0, y: -80}}
                    className={style.header}
                    style={show ? {backgroundColor: 'black'} : {}}
                >
                    <div className={style.headerContainer2}
                         style={styleHeader ? {backgroundColor: "black"} : {}}
                    >
                        {show && !isAboveMobileScreens && <img src={logo} alt='logo' className={style.logo}/>}
                        <div></div>
                        <button
                            className={style.menuButton}
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className={style.menuIcon}/>
                        </button>
                    </div>
                </motion.nav>
            }


            {!isAboveMobileScreens && isMenuToggled && (
                <nav className={style.header}>
                    <div className={style.mobileNavbar}>
                        {/* CLOSE ICON */}
                        <div className={style.headerContainer2}>
                            <img src={logo} alt='logo' className={style.logo}/>
                            <button className={style.mobileCloseButton}
                                    onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <XMarkIcon className={style.mobileCloseIcon}/>
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className={style.mobileItems}>
                            <div className={style.line}/>
                            <div className={style.part}>
                                <Link className={style.link} to='/'
                                      onClick={() => {
                                          setIsMenuToggled(!isMenuToggled)
                                      }}>Home</Link>
                            </div>
                            <div className={style.line}/>
                            <div className={style.part}>
                                <Link className={style.link} to='/aboutus'
                                      onClick={() => {
                                          setIsMenuToggled(!isMenuToggled)
                                      }}>About Us</Link>
                            </div>
                            <div className={style.line}/>
                            <div className={style.part} onClick={() => setPart1(!part1)}
                                 style={part1 ? {backgroundColor: '#0e052d'} : {}}>
                                <div className={style.link}>Technology</div>
                                <Arrow style={{fontSize: '1rem'}} focus={part1}/>
                            </div>
                            {part1 && <div className={style.mobilePart}>
                                <div className={style.mobileLinks}>
                                    <Link className={style.link} to='/technology/liferay'
                                          onClick={() => {
                                              setIsMenuToggled(!isMenuToggled)
                                              setPart1(!part1)
                                          }}
                                    >Liferay</Link>
                                    <Link className={style.link} to='/technology/bigdata&analytics'
                                          onClick={() => {
                                              setIsMenuToggled(!isMenuToggled)
                                              setPart1(!part1)
                                          }}
                                    >BigData &
                                        Analytics</Link>
                                    <Link className={style.link} to='/technology/ecommerce'
                                          onClick={() => {
                                              setIsMenuToggled(!isMenuToggled)
                                              setPart1(!part1)
                                          }}
                                    >E-Commerce</Link>
                                    <a href='http://sourceone.education/' target="_blank" rel='noreferrer'
                                       className={style.link}>SAP</a>
                                </div>
                            </div>}


                            <div className={style.line}/>
                            <div className={style.part} onClick={() => setPart2(!part2)}
                                 style={part2 ? {backgroundColor: '#0e052d'} : {}}>
                                <div className={style.link}>Solutions</div>
                                <Arrow style={{fontSize: '1rem'}} focus={part2}/>
                            </div>
                            {part2 && <div className={style.mobilePart}>
                                <div className={style.mobileLinks}>
                                    <Link className={style.link} to='/solutions/business'
                                          onClick={() => {
                                              setIsMenuToggled(!isMenuToggled)
                                              setPart2(!part2)
                                          }}
                                    >Business Process
                                        Outsourcing</Link>
                                    <Link className={style.link} to='/solutions/mobility'
                                          onClick={() => {
                                              setIsMenuToggled(!isMenuToggled)
                                              setPart2(!part2)
                                          }}
                                    >Mobility</Link>
                                    <Link className={style.link} to='/solutions/uidevelopment'
                                          onClick={() => {
                                              setIsMenuToggled(!isMenuToggled)
                                              setPart2(!part2)
                                          }}
                                    >UI Development</Link>
                                </div>
                            </div>}


                            <div className={style.line}/>
                            <div className={style.part} onClick={() => setPart3(!part3)}
                                 style={part3 ? {backgroundColor: '#0e052d'} : {}}>
                                <div className={style.link}>Services</div>
                                <Arrow style={{fontSize: '1rem'}} focus={part3}/>
                            </div>
                            {part3 && <div className={style.mobilePart}>
                                <div className={style.mobileLinks}>
                                    <Link className={style.link} to='/services/outsourcing'
                                          onClick={() => {
                                              setIsMenuToggled(!isMenuToggled)
                                              setPart3(!part3)
                                          }}
                                    >Recruitment Process
                                        Outsourcing</Link>
                                    <Link className={style.link} to='/services/supplier'
                                          onClick={() => {
                                              setIsMenuToggled(!isMenuToggled)
                                              setPart3(!part3)
                                          }}
                                    >Master Supplier
                                        Program</Link>
                                    <Link className={style.link} to='/services/automation'
                                          onClick={() => {
                                              setIsMenuToggled(!isMenuToggled)
                                              setPart3(!part3)
                                          }}
                                    >Talent Automation
                                        Systems</Link>
                                    <Link className={style.link} to='/services/workforce'
                                          onClick={() => {
                                              setIsMenuToggled(!isMenuToggled)
                                              setPart3(!part3)
                                          }}
                                    >Enterprise Workforce
                                        Enabler</Link>
                                    <Link className={style.link} to='/services/deployment'
                                          onClick={() => {
                                              setIsMenuToggled(!isMenuToggled)
                                              setPart3(!part3)
                                          }}
                                    >Training & Deployment
                                        Services</Link>
                                    <Link className={style.link} to='/services/recruitment'
                                          onClick={() => {
                                              setIsMenuToggled(!isMenuToggled)
                                              setPart3(!part3)
                                          }}
                                    >Fulltime
                                        Recruitment</Link>
                                    <Link className={style.link} to='/services/transfer'
                                          onClick={() => {
                                              setIsMenuToggled(!isMenuToggled)
                                              setPart3(!part3)
                                          }}
                                    >Build and
                                        Transfer
                                        Program</Link>
                                    <Link className={style.link} to='/services/staffing'
                                          onClick={() => {
                                              setIsMenuToggled(!isMenuToggled)
                                              setPart3(!part3)
                                          }}
                                    >Contract
                                        Staffing</Link>
                                    <a href='http://sourceone.education/' target="_blank" rel='noreferrer'
                                       className={style.link}>SAP Services</a>
                                </div>
                            </div>}
                            <div className={style.line}/>
                            <div className={style.part}>
                                <Link className={style.link} to='/contact'
                                      onClick={() => {
                                          setIsMenuToggled(!isMenuToggled)
                                      }}
                                >Contact</Link>
                            </div>
                            <div className={style.line}/>
                        </div>
                    </div>
                </nav>
            )}
        </AnimatePresence>
    )
}
export default Header
