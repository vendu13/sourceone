import s from './UIDevelopment.module.css'
import ui from "../../../assets/ui.webp";
import ui1 from "../../../assets/ui1.webp";
import ui2 from "../../../assets/ui2.webp";
import List from "../../List/List.jsx";
import {motion} from "framer-motion";
import {useEffect} from "react";

const UiDevelopment = () => {

    const listTitle = 'Our user interface development services include:'
    const list = ['Code is thoroughly documented inline and supported by a front-end developer\'s guide',
        'Reusable code systems and layouts that provide a systematic solution', 'Advanced HTML CSS and JavaScript Bootstrap page development for scalable deployment in complex systems']

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={s.ui}>
            <div className={s.aboutImageText}>
                <img className={s.image} src={ui} alt='about'/>
                <div className={s.text}>
                    <h1>UI Design & Development</h1>
                </div>
            </div>


            <div className={s.liferayOverview}>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.5, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -100},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={s.liferayOverviewText}>
                    <h1>UI Design & Development</h1>
                    <p>User Experience has become the most important factor in today's fast growing technology world.
                        There was a time there was a focus on creating a beautiful design on first, but now usability
                        and easy to access has become important. Now user interface designs are well supported with rich
                        user components, which give successful user experience.
                    </p>
                    <p>
                        User interface design solutions specialized in Web/Desktop/Mobile User Interface design and
                        development. We provide custom built UI designs which are user friendly, user-centric and easy
                        to use. Our UI Design applications are designed to effectively and efficiently meet today's
                        demanding product users. We bring the user interface design to life as the main component in
                        your web experience.
                    </p>
                    <p>
                        We have the ability to make user interface design stand out Our web developers have broad
                        technology experience, ensuring their code can be integrated into a variety of destination
                        systems.
                    </p>
                </motion.div>
                <motion.img
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.5, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: 100},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={s.liferayImg} src={ui1} alt='liferay1'/>
            </div>

            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{amount: 0.3, once: true}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y: 200},
                    visible: {opacity: 1, y: 0}
                }}
                className={s.uiPhoto}>
                <div className={s.line}/>
                <h1>Our development with UI technologies:</h1>
                <img className={s.uiImg} src={ui2} alt='liferay1'/>
            </motion.div>
            <div className={s.list}>
                <div className={s.line} style={{marginTop: 0}}/>

                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.3, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -200},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={s.overviewPart} style={{flexDirection: "column"}}>
                    <List title={listTitle} list={list}/>
                </motion.div>
            </div>
        </div>
    )
}
export default UiDevelopment
