import s from './BusinessProcess.module.css'
import {motion} from "framer-motion";
import businessProcess from "../../../assets/businessProcess.webp";
import businessProcess2 from "../../../assets/businessProcess2.webp";
import insurance from "../../../assets/insurance.webp";
import banking from "../../../assets/banking.webp";
import payroal from "../../../assets/payroal.webp";
import List from "../../List/List.jsx";
import {useEffect} from "react";

const BusinessProcess = () => {

    const list = ['Transaction Processing', 'Application Processing', 'Claim Processing', 'Demographic', 'Medical History', 'Hazardous Questionnaire', 'Commissions and Licensing', 'Case Management']
    const list2 = ['Transaction Processing', 'Loan Processing (Origination to Closing)', 'Cheque Processing', 'Accounting Services']
    const list3 = ['Maintenance of Employee Database', 'Payroll Processing', 'Tax & Compliance Management', 'Benefits Administration']

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={s.businessProcess}>
            <div className={s.aboutImageText}>
                <img className={s.image} src={businessProcess} alt='businessProcess'/>
                <div className={s.text}>
                    <h1>Business Process Outsourcing</h1>
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
                    <h1>Business Process Outsourcing</h1>
                    <p>
                        Source One's Back Office services provide access to world-class technology and infrastructure.
                        Our strategic and integrated approach of delivering cross-border, multi-process, end-to-end business
                        solutions ensures that we are able to provide sustainable service delivery, strong internal controls,
                        and the scalability/ flexibility to support growth in different countries.
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
                    className={s.liferayImg} src={businessProcess2} alt='liferay1'/>
            </div>


            <div className={s.solutions}>
                <h1 style={{textAlign: "center"}}>We provide a full range of the following Back Office Services:</h1>
                <div className={s.line}/>

                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.3, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: 200},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={s.overviewPart} style={{paddingBottom: 0}}>
                    <img className={s.imagePart} src={insurance} alt='businessProcess'/>
                    <div className={s.overviewPart2}>
                        <h1 className={s.overviewPart2H} style={{margin: '0 0 3rem 0'}}>Insurance</h1>
                        <h4 className={s.overviewPart2h}>
                            Source One offers a full range of back office services for the insurance industry. Our solutions would help client achieve substantial cost savings without compromising on quality.
                        </h4>
                        <h4 className={s.overviewPart2h}>
                            We provide the following services specific to the Insurance industry:
                        </h4>
                    </div>
                </motion.div>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.3, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -200},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={s.overviewPart} style={{flexDirection: "column", paddingTop: 0}}>
                    <List title={''} list={list} style={{marginTop: 0}} />
                </motion.div>




                <div className={s.line}/>

                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.3, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: 200},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={s.overviewPart} style={{paddingBottom: 0}}>
                    <div className={s.overviewPart2}>
                        <h1 className={s.overviewPart2H} style={{margin: '0 0 3rem 0'}}>Banking</h1>
                        <h4 className={s.overviewPart2h}>
                            Source One offers comprehensive back office solutions for banks and financial institutions. Our solutions would help client focus on their core activities and achieve substantial cost savings.
                        </h4>
                        <h4 className={s.overviewPart2h}>
                            We provide the following services specific to the Banking industry:
                        </h4>
                    </div>
                    <img className={s.imagePart} src={banking} alt='businessProcess'/>
                </motion.div>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.3, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -200},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={s.overviewPart} style={{flexDirection: "column", paddingTop: 0}}>
                    <List title={''} list={list2} style={{marginTop: 0}} />
                </motion.div>




                <div className={s.line}/>

                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.3, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: 200},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={s.overviewPart} style={{paddingBottom: 0}}>
                    <img className={s.imagePart} src={payroal} alt='businessProcess'/>
                    <div className={s.overviewPart2}>
                        <h1 className={s.overviewPart2H}>Payroll Management</h1>
                        <h4 className={s.overviewPart2h}>
                            Source One provides a comprehensive range of payroll services to meet client business requirements. We endeavor to provide quality services at substantial cost savings for client to help manage their business and focus on their core activities. We have the resources and the people to manage and administer your back office payroll activities.
                        </h4>
                        <h4 className={s.overviewPart2h}>
                            Our services relating to Payroll Management consist of:
                        </h4>
                    </div>
                </motion.div>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.3, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -200},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={s.overviewPart} style={{flexDirection: "column", paddingTop: 0}}>
                    <List title={''} list={list3} style={{marginTop: 0}} />
                </motion.div>
            </div>
        </div>
    )
}
export default BusinessProcess
