import style from './AboutUs.module.css'
import {motion} from "framer-motion";
import about from '../../../assets/about.jpg'
import people from '../../../assets/people.jpg'
import vision from '../../../assets/about-vision.jpg'
import mission from '../../../assets/about-mission.jpg'
import carousel from '../../../assets/carousel.webp'
import team from '../../../assets/team1.jpg'
import Carousel from "../../Carousel/Carousel.jsx";
import {useEffect} from "react";

const AboutUs = () => {

     useEffect(() => {
         window.scrollTo(0, 0)
     }, [])

    const peopleArray = ['Brandon Show', 'Floyd Stephens', 'Kate Clark', 'Eunice Doyle', 'Virgina Aguilar', 'Jeffrey Goodin', 'Beatrice Williamson', 'Roger Dawson']
    const peopleJobArray = ['Founder & CEO', 'Chief Technology Officer', 'Director of people', 'Software Engineer', 'Software Engineer', 'Sr Manager, Content and Growth', 'Product Designer', 'Senior Account Executive']

    const headers = ['Customer Delight', 'Leadership', 'Integrity', 'Passion']
    const paragraphs = ['A commitment to exceed expectations.', 'Setting standards in business processes.',
        'Being transparent and professional in all our transactions.', 'A Passion for Excellence']

    return (
        <div className={style.about}>
            <div className={style.aboutImageText}>
                <img className={style.image} src={about} alt='about'/>
                <div
                    className={style.text}
                >
                    <h1>Work Human, Inspire Lives</h1>
                </div>
            </div>


            <div className={style.overview}>
                <h1 className={style.overviewTitle}>Company Overview</h1>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.5, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, y: 100},
                        visible: {opacity: 1, y: 0}
                    }}
                    className={style.overviewPart}>
                    <h1 className={style.overviewPart1H}>
                        We build bridges <br></br>between <span className={style.span}>companies<br></br> and customers</span>
                    </h1>
                    <p className={style.overviewPart1P}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </motion.div>
                <img className={style.people} src={people} alt='people'/>
                <div className={style.line}/>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.5, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -100},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={style.overviewPart}>
                    <h1 className={style.overviewPart2H}>Together we <br></br> are strong</h1>
                    <div className={style.overviewPart2}>
                        <h4 className={style.overviewPart2h}>
                            Source One: A 15 years old ISO certified company & is one of the fastest growing IT
                            Services, Consulting, Recruitment and Outsourcing company from India with offices currently
                            in Bangalore (HQ) and New Delhi.
                        </h4>
                        <p className={style.overviewPart2P}>
                            We facilitate our clients to be the best in their respective fields by utilizing
                            state-of-the-art technology, services and solutions. While suggesting or implementing any
                            new concept for a particular business, we foresee all the impacts of that concept on that
                            specific business.
                            We provide cost-effective solutions to our clients to maximize their returns. Our versatile
                            business model and unique delivery methodologies help us achieve better results.
                            We ensure that our clients get quality and timely solutions by keeping abreast with the
                            latest trends in the industry.
                            Source One is Liferay India service partner for solutions, enterprise integration and
                            implementation and license sales.
                            Source One is an authorized SAP Partner and offers SAP Education services in Academic
                            Training,Corporate Training and Student Academy for Colleges and Universities. Source One
                            have the best infrastructure to offer SAP Education through live SAP German Server for
                            Global Certifications.
                        </p>
                    </div>
                </motion.div>
            </div>


            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{amount: 0.1, once: true}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y: 100},
                    visible: {opacity: 1, y: 0}
                }}
                className={style.peopleTeam}>
                <h1 className={style.overviewPart2H}>Meet our <br></br> amazing team</h1>
                <div style={{width: '100%', margin: '2rem 0'}} className={style.line}/>
                <div className={style.team}>
                    {peopleArray.map((el, index) => (
                        <div key={index} className={style.teamOne}>
                            <img src={team} alt='team'/>
                            <h2>{el}</h2>
                            <p>{peopleJobArray[index]}</p>
                        </div>
                    ))}
                </div>
            </motion.div>


            <div className={style.our}>
                <div style={{width: '100%', margin: '4rem 0'}} className={style.line}/>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.5, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -100},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={style.vision}>
                    <div className={style.ourPart} style={{marginBottom: '7%'}}>
                        <h1>Our Vision</h1>
                        <p>To be a globally respected and accepted organization that provides best-of-breed business
                            solutions leveraging on technology delivered by the best-in-class people resulting in
                            maximum customer satisfaction.</p>
                    </div>
                    <img src={vision} alt='our vision'/>
                </motion.div>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.5, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: 100},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={style.mission}>
                    <img src={mission} alt='our mission'/>
                    <div className={style.ourPart}>
                        <h1>Our Mission</h1>
                        <p>We achieve our objectives through committed efforts towards our clients, employees, vendors,
                            society and stake holders.</p>
                    </div>
                </motion.div>
            </div>

            <div className={style.carousel}>
                <h1>We are driven by</h1>
                <Carousel img={carousel} headers={headers} paragraphs={paragraphs}/>
            </div>
        </div>
    )
}
export default AboutUs
