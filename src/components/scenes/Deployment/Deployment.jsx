import s from './Deployment.module.css'
import deployment from "../../../assets/deployment.webp";
import List from "../../List/List.jsx";
import {motion} from "framer-motion";
import {useEffect} from "react";

const Deployment = () => {

    const listTitle = 'Training & Deployment Services'
    const list = ['Source One can take Training and Deployment assignment only on few skills like Liferay, JAVA, Mobile and Big Data',
        'Source One hire base skills from market based on technical interview and BG check process and deploy on training program.',
        'After successful training candidates are presented at client interview',
        'On client interview selection, candidates are deployed for contracting or contract to hire assignment. (We don\'t work on this model for Fulltime hire)',
        'Source One can hire or engage trained resource on further upgrading technical skills',
        'Source One would not charge for training and bill client on all inclusive model',
        'Source One commit 75% conversion post training',
    'Source One has experienced and seasoned trainer on-house employees on Liferay, Java, Mobile and Big Data technologies.']

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={s.deployment}>
            <div className={s.aboutImageText}>
                <img className={s.image} src={deployment} alt='deployment'/>
                <div className={s.text}>
                    <h1>Training & Deployment Services</h1>
                </div>
            </div>

            <div className={s.line}/>

            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{amount: 0.2, once: true}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -100},
                    visible: {opacity: 1, x: 0}
                }}
                className={s.process}>
                <List title={listTitle} list={list}/>
            </motion.div>
        </div>
    )
}
export default Deployment
