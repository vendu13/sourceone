import s from './FulltimeRecruitment.module.css'
import recruitment from "../../../assets/recruitment.webp";
import recruitment1 from "../../../assets/recruitment (1).webp";
import recruitment2 from "../../../assets/recruitment2.webp";
import recruitment3 from "../../../assets/recruitment3.webp";
import List from "../../List/List.jsx";
import {motion} from "framer-motion";
import {useEffect} from "react";

const FulltimeRecruitment = () => {

    const listTitle = 'Fulltime Hire'
    const list = ['Dedicated Technical and Domains knowledge Recruiters work on account for sourcing', 'Strong Technical screeners for screening resume', 'Large In-house database search available for recruiters', 'Strong capability on headhunting and referral based sourcing', 'Strong candidate experience and management', 'Scale and Bandwidth to deploy 50-300 recruiters on one account', 'Scale and Bandwidth to onboard 300-500 in a month on one account', 'Specialized search and hunting on Niche and Super Nich skills', 'Strong capability on diversity hiring and enabling client to increase diversity mix on delivery', 'Company can work on turn key or contingency basis or specilised search basis retainership model', 'Specialized Team for sourcing on emerging technologies like Mobile, Digital and Social Media, Cloud, BIg Data and Analytics and Internet of things', 'Faster Turn around, lower renege, better candidates experience and risk and reward model is success key factors at Source One', 'Strong capabilities on sourcing SAP, JAVA, Microsoft, Business Intelligence, Middleware and enterprise architecture, Industry Applications, Hostcentric platform, Testing, Products, Infrastructure and Technical support skills']

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={s.recruitment}>
            <div className={s.aboutImageText}>
                <img className={s.image} src={recruitment} alt='recruitment'/>
                <div className={s.text}>
                    <h1>Fulltime Recruitment</h1>
                </div>
            </div>


            <div className={s.process}>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.3, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -200},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={s.processPart}>
                    <h2>End to End Recruitment Process:</h2>
                    <img src={recruitment1} alt='recruitment'/>
                </motion.div>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.3, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: 200},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={s.processPart}>
                    <h2>Source One Screening Process Flow:</h2>
                    <img src={recruitment2} alt='recruitment'/>
                </motion.div>
            </div>

            <div className={s.line}/>

            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{amount: 0.3, once: true}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y: -200},
                    visible: {opacity: 1, y: 0}
                }}
                className={s.process}>
            <List title={listTitle} list={list}/>
            </motion.div>

            <div className={s.line}/>

            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{amount: 0.3, once: true}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y: 200},
                    visible: {opacity: 1, y: 0}
                }}
                className={s.hire}>
                <h1>Fulltime Hire</h1>
                <img src={recruitment3} alt='recruitment'/>
            </motion.div>
        </div>
    )
}
export default FulltimeRecruitment
