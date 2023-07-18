import s from './Supplier.module.css'
import supplier from "../../../assets/supplier.jpg";
import supplier1 from "../../../assets/supplier1.png";
import supplier2 from "../../../assets/supplier2.png";
import List from "../../List/List.jsx";
import {motion} from "framer-motion";
import {useEffect} from "react";

const Supplier = () => {

    const listTitle = 'Master Supplier Program'
    const list = ['Dedicated Technical and Domains knowledge Recruiters work on account for sourcing',
    'Strong pool of capability aligned suppliers on specialized capability and skills', 'Robust process on suppliers screening and evaluation and compliance as per SC-CSR principles',
    'Suppliers agreements and empanelment process and team structure to handle suppliers queries, grievances and payment',
    'In-house tools available to manage suppliers on PartnersCenter tools for allocating demand, resume inflow, screening resume, providing feedback, candidates interview, candidates on boarding, Invoicing and payment and candidates exit process management with help of tools and strong partners team',
    'Partners Training program, timely payment and scaling up partners to the next level is few key success at Source One MSP.']

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className={s.supplier}>
            <div className={s.aboutImageText}>
                <img className={s.image} src={supplier} alt='supplier'/>
                <div className={s.text}>
                    <h1>Master Supplier Programm</h1>
                </div>
            </div>

            <h1 className={s.hSup}>Source One Master Supplier Programm</h1>
            <div className={s.process}>
                <motion.img
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.3, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -200},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={s.processPart1} src={supplier1} alt='supplier'/>
                <motion.img
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.3, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: 200},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={s.processPart} src={supplier2} alt='supplier'/>
            </div>

            <div className={s.line}/>

            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{amount: 0.5, once: true}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y: -200},
                    visible: {opacity: 1, y: 0}
                }}
                className={s.process}>
                <List title={listTitle} list={list}/>
            </motion.div>
        </div>
    )
}
export default Supplier
