import s from './Automation.module.css'
import automation from "../../../assets/automation.jpg";
import List from "../../List/List.jsx";
import {motion} from "framer-motion";
import {useEffect} from "react";

const Automation = () => {

    const listTitle = 'Talent Automation Systems'
    const list = ['Source One work with client to build talent automation process and systems',
        'Source One help client to automate entire recruiting process through tools built on Liferay and Big Data',
        'Source One can provide readily available tools and also work on custom development',
    'Source One can host application at client location or on cloud as per business needs']

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={s.automation}>
            <div className={s.aboutImageText}>
                <img className={s.image} src={automation} alt='automation'/>
                <div className={s.text}>
                    <h1>Talent Automation Systems</h1>
                </div>
            </div>

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
export default Automation
