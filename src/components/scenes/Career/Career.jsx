import s from './Career.module.css'
import career from "../../../assets/career.webp";
import List from "../../List/List.jsx";
import {motion} from "framer-motion";
import {useEffect} from "react";
import career2 from "../../../assets/career2.webp";
import Button from "../../Button/Button.jsx";

const Career = () => {

    const listTitle = 'Source One benefits:'
    const list = ['Our people are our success. We try to make it the best environment for you to work at Source One.',
    'Personal accident & hospitalization insurance policy', 'Flexible relocation and lease breakage policy',
    'Project based training allowances', 'Onsite and Overtime allowances', 'Paid vacations and holidays',
    'Annual Family Tour after project completion', 'Leave travel assistance', 'Benefits linked with Birthdays and Wedding Anniversaries of employees',
    'Subsidized canteen/food facility', 'Recreational facilities', 'Matchless Incentive and Royalty program', 'House, Car and other benefits to all Source One key resources',
    'Fast Track Career growth on remuneration and level for all high performers', 'Career growth purely based on delivery and performance']

    /*useEffect(() => {
        window.scrollTo(0, 0)
    }, [])*/

    return (
        <div className={s.career}>
            <div className={s.aboutImageText}>
                <img className={s.image} src={career} alt='career'/>
                <div className={s.text}>
                    <h1>Careers</h1>
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
                    <h1>Working at Source One</h1>
                    <p>Motivation and Performance are the keywords for Source One while creating Human Resource Policies for its employees. </p>
                    <p>
                        We always create an environment where people think differently and yet work in harmony. We identify the individual's core competencies and provide them with a platform where they can perform to their optimum level. Apart from facilitating employees with highly competitive salaries and perks, we also provide global opportunities, which are positive to individual's career. Our resource management group helps every employee grow in their professional career through company's timely performance appraisal and reward systems. </p>
                </motion.div>
                <motion.img
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.3, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: 200},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={s.liferayImg} src={career2} alt='career2'/>
            </div>

            <a className={s.explore} href='https://hiringnow.com/' target='_blank'><Button text='Explore your opportunities' BGcolor='black'/></a>

            <div className={s.line}/>

            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{amount: 0.3, once: true}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -200},
                    visible: {opacity: 1, x: 0}
                }}
                className={s.process}>
                <List title={listTitle} list={list}/>
            </motion.div>
        </div>
    )
}
export default Career
