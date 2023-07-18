import s from './Workforce.module.css'
import workforce from "../../../assets/workforce.jpg";
import List from "../../List/List.jsx";
import {motion} from "framer-motion";
import {useEffect} from "react";

const Workforce = () => {

    const listTitle = 'Enterprise Workforce Enabler:'
    const list = ['Source One work with customers on co-hosted employees base on entire recruiting process.',
    'Source One can create infrastructure in terms of facility, seats, connectivity, security and compliance as per client process.',
    'Source One would build team for entire recruiting process through internal sourcing and fulfilment and build capacity on own bandwidth and cost',
    'Client Program Managers manage program as per client process at same premise',
    'Source One bills customers as per headcount mark-up model and per seat fixed rate per month basis.',
    'Source One would manage resource fulfilment and attrition and back-filling',
    'Client has to commit a long term agreement to create infrastructure and ROI']

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={s.workforce}>
            <div className={s.aboutImageText}>
                <img className={s.image} src={workforce} alt='workforce'/>
                <div className={s.text}>
                    <h1>Enterprise Workforce Enabler</h1>
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
export default Workforce
