import s from './Transfer.module.css'
import transfer from "../../../assets/transfer.jpg";
import List from "../../List/List.jsx";
import {motion} from "framer-motion";
import {useEffect} from "react";

const Transfer = () => {

    const listTitle = 'Build and Transfer Program'
    const list = ['Source One would build team for entire recruiting process as per agreed terms',
    'Source One would build and operate from client\'s premise using client\'s infrastructure and process',
    'Source One would transfer capability as per agreed terms based on Investment and ROI']

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={s.transfer}>
            <div className={s.aboutImageText}>
                <img className={s.image} src={transfer} alt='transfer'/>
                <div className={s.text}>
                    <h1>Build and Transfer Program</h1>
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
export default Transfer
