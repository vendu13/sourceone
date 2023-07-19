import s from './E-commerce.module.css'
import ecommerce from "../../../assets/e-commerce3.webp";
import ecommerce2 from "../../../assets/e-commerce2.webp";
import {motion} from "framer-motion";
import {useEffect} from "react";

const ECommerce = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={s.ecommerce}>
            <div className={s.aboutImageText}>
                <img className={s.image} src={ecommerce} alt='about'/>
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
                    <h1>E-Commerce</h1>
                    <p>We build secure e-commerce websites, including shopping carts, e-commerce store front & custom commerce websites, which helps you to turn visitors into customers.
                    </p>
                    <p>
                        Integrating financial transactions, communications, data management, logistic management and security considering various audits compliance. We try to ensure that you have a unique experience with us, providing you with the best possible commerce solutions as and when required.
                    </p>
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
                    className={s.liferayImg} src={ecommerce2} alt='liferay1'/>
            </div>
        </div>
    )
}
export default ECommerce
