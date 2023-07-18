import React, {useEffect, useState} from "react";
import s from './Stuffing.module.css'
import stuffing from "../../../assets/staffing.webp";
import stuffing1 from "../../../assets/staffing1.png";
import stuffing2 from "../../../assets/staffing2.png";
import {motion} from "framer-motion";

const Staffing = () => {
    const [selected, setSelected] = useState([])
    const [selected2, setSelected2] = useState([])
    const [selected3, setSelected3] = useState([])
    const servicesH = [
        'Source One Contract Staffing',
        'List of Main Processes: List down all processes/activities supporting customer:',
        'Potential Threats Envisaged: List down potential threats which can impact these processes and measures taken to prevent the probability of their occurrence:',
        'Sequence of Action:List down sequence of action from Occurrence of Incident to Recovery of Products and Services:'
    ]
    const servicesP = [
        ['Dedicated Technical and Domains knowledge Recruiters work on account for sourcing\n',
            'Strong Technical screeners for screening resume\n',
            'Large In-house database, Bench Resources search available for recruiters\n',
            'Strong capability on headhunting and referral based sourcing\n',
            'Specialized search and hunting on Niche and Super Nich skills\n',
            'Specialized Team for sourcing on emerging technologies like Mobile, Digital and Social Media, Cloud, Big Data and Analytics and Internet of things\n',
            'Strong capabilities on sourcing SAP, JAVA, Microsoft, Business Intelligence, Middleware and enterprise architecture, Industry Applications, Hostcentric platform, Testing, Products, Infrastructure and Technical support skills\n',
            'Faster Turn around, lower renege, Lower cost, better quality, lower attrition and better resource management is success key factors at Source One\n',
            'Source One brand helps mobilizing quality pool of resources to join on contract and contract to hire positions.\n',
            'Key Account Management team work with deployed resources and client for better delivery and experience as program\n',
            'Source One in-house capability on Big Data, Digital Liferay and Java and PHP helps to retain and cross train resources on emerging technologies and upscale resources for effective productivity\n',
            'Strong capability on diversity hiring and enabling client to increase diversity mix on delivery\n',
            'Source One can execute Train and hire model on Liferay, Big Data and JAVA technologies'],
        ['Demand and Delivery planning and internal resources mapping processes for sending right resume',
            'Market Pool research analysis, Cost and quality Analysis, search aligning and mechanism process to hunt right pool',
            'Market awareness, brand and competitive advantage selling process to mobilize and block right pool',
            'Delivery process on floor; Candidate\'s profile mapping processes and consistent supply of quality mapped resumes to the system to process by customers',
            'Quality screening Check and audit process before any resume submission',
            'Follow Up with candidate and customer process for resume tracking and closure',
            'Queries and escalation handling process',
            'Blocking sizable talents at marketplace; sold and unsold resource pool and Retention Process',
            'Candidate and Customer Feedback process',
            'Research and development on developing and adopting new strategy and implementation based on market dynamics',
            'Source One has created a team to protect the efforts and investment made while delivering recruitment. After recession it was noticed that organization can grow by 30% more without extra investment and efforts if investment and efforts are utilized properly and protected and used and re-used for the growth.'],
        ['Infrastructure and Resources: Planned multilocations and multi modules processes with backup plan to keep consistent work flow on committed business recursions.',
            'Key Recruiters and leaders on work: Planned multiple team at a single delivery at one time to commit desired result on time without any failure.',
            'Quality Check and Audit: Part of every activities as a process to minimize any risk at delivery',
            'Bandwidth usability: Matured forecast systems and strong re-deployment ability and execution to use all critical resources and processes effectively to keep organization daily productivity intact.',
            'Holding Brand Equity : Constant in touch with marketplace and customers reduce any such threat to overcome any future hidden business loss and threat.',
            'Blocking sold market pool: Run on solid process to keep strong awareness about customers and protect pool from any competitive threat in market to give competitive advantage to customers and retain sold talents and business.',
            'Process Breakdown: Planned multi modules to work at backend hidden process on every front delivery force and team to sustain any invisible performance threat and commit delivery.',
            'Facility Breakdown: Delivery floor based on multiple offices and multiple connectivity vendors help reducing any such threat',
            'Process aging: Continuous innovation and research help adopting unique and proprietary process and systems in place to commit delivery and reducing any threat due to process aging',
            'Change Management: quick roll out plan and education help complete work force to align as per customers\' process change and deliver without any breakdown.',
            'Reduce Dependency: Planned resources with minimum dependency on any external vendors or process to run internal process effectively and produce desired result.',
            'Any hidden threat: Constant watch on every element of delivery at micro level by our key people and management help smooth working of every process and avoid any hidden threat.'],
        ['1. Central Jobs.guru Database systems: help recovery of any critical information on candidates even one recruiter leaves and computer breakdown.',
            '2. Multilocations email download: Help re-storing critical information and use them ontime without any systems or human error breakdown.',
            '3. Multilocation offices in same city: with three offices at Bangalore and other city like Delhi, help us re-storing any critical resources without loosing any time.',
            '4. Quick Resource deployment: Large bandwidth and multi process running in parallel helps to re-strong any delivery or process in case of one failure.',
            '5. Multi vendor for connectivity: Help running process at different connectivity in case of one vendor\'s failure like internet, phone etc.',
            '6. Customer\'s systems and process breakdown: plan helps quick deployment of key resources at other delivery and re-deployment model helps quick alignment of resources. Its possible by multitasking ability and by creating subject matter expertise across our key resources to be ready for any critical processes anytime.',
            '7. Market watch and escalation mechanism: Easy reach to the management and management active participation at ground level market place helps re-strong any such breakdown due to competition anti-selling and any escalation which comes on way.',
            '8. Resources mobility and transportation: re-store quickly and deploy resources at floor with internal backup plan and strategy.',
            '9. Power Breakdown: re-store plan by UPS and generator backup',
            '10. Multiple Team and multiple process to fill gaps of under performance and leakage']
    ]

    const servicesH2 = ['Forced Labor:', 'Child Labor:', 'Wages and Benefits:', 'Working Hours:', 'Nondiscrimination:', 'Respect and Dignity:', 'Freedom of Association:', 'Health and Safety:', 'Protection of the Environment:', 'Laws, Including Regulations and Other Legal Requirements:', 'Ethical Dealings:', 'Communications:', 'Monitoring/Record Keeping:']
    const servicesP2 = ['Source One will not use forced or involuntary labor of any type (e.g., forced, bonded, indentured or involuntary prison labor); employment is voluntary.', 'Source One will not use child labor. The term refers to any person employed under the age of 15 (or 14 where the law of the country permits), or under the age for completing compulsory education, or under the minimum age for employment in the country, whichever is greatest. We support the use of legitimate workplace apprenticeship programs which comply with all laws and regulations applicable to such apprenticeship programs', 'Source One will, at a minimum, comply with all applica- ble wage and hour laws and regulations, including those relating to minimum wages, overtime hours, piece rates and other elements of compensation, and provide legally mandated benefits', 'Source One will not exceed prevailing local work hours and will appropriately compensate overtime. Workers shall not be required to work more than 60 hours per week, including overtime, except in extraordi nary business circumstances with their consent. In countries where the maximum work week is less, that standard shall apply. Employees should be allowed at least one day off per seven-day week', 'Source One will not discriminate in hiring and employment practices on grounds of race, religion, age, nationality, social or ethnic origin, sexual orientation, gender, gender identity or expression, marital status, pregnancy, political affiliation, or disability', 'Source One will treat all employees with respect and will not use corporal punishment, threats of violence or other forms of physical coercion or harassment', 'Source One shall respect the legal rights of employees to join or to refrain from joining worker organizations, including trade unions. Suppliers have the right to establish favorable employment conditions and to maintain effective employee communication programs as a means of promoting positive employee relations that make employees view third-party representation as unnecessary.', 'Source One will provide their employees with a safe and healthy workplace in compliance with all applicable laws and regulations. Consistent with these obligations, Source One Suppliers must have and implement effective programs that encompass life safety, incident investigation, chemical safety, ergonomics, etc., and provide the same standard of health and safety in any housing that is provided for employees. Suppliers should strive to implement management systems to meet these requirements', 'Source One will operate in a manner that is protective of the environment. At a minimum, suppliers must comply with all applicable environmental laws, regulations and standards, such as requirements regarding chemical and waste management and disposal, recycling, industrial waste water treatment and discharge, air emissions con- trols, environmental permits and environmental repor ting. Suppliers must also comply with any additional environs- mental requirements specific to the products or services being provided to Source One as called for in design and product specifications, and contract documents. Suppliers should strive to impl ement management systems to meet these requirements', 'Source One will comply with all applicable laws and regulations in all locations where they conduct business.', 'Source One expects our suppliers to conduct their business in accordance with the highest ethical standards. Suppliers must strictly comply with all laws and regulations on bribery, corruption and prohibited business practices', 'Suppliers must make the Source One Conduct Principles and other relevant information available to employees in the native language(s) of the employees and supervisors', 'Suppliers must maintain documentation necessary to demonstrate compliance with Source One Conduct Principles and must provide Source One with access to that documentation upon Source One\'s request']

    const servicesH3 = [
        'Business Recovery Team: Roles and Responsibilities with contact details-email & mobile ,Designation',
        'Communication plan with customer in a event of BCP: How will the Company inform customer. Contact details of customer POC',
        'Escalation (with contact details-email & mobile #/Designation)/communication plan within the vendor organization. How will they communicate internally to ensure recovery',
        'Plan Review Frequency :',
        'Dependency if any Identified: List of external dependencies if any'
    ]
    const servicesP3 = [
        ['Facility, vendor, Power and Administration process recovery: Nirmala BV nirmala@msourceone.com -9342412859 - AGM- Corporate Functions & Business Process',
            'Candidate\'s data, MIS, follow up and others: Sona Anand sona.anand@msourceone.com - 9663811338 AGM - HR Services',
            'Resources deployment, re-deployment, Quality Check, Process watch and recover on floor and floor process management and delivery and others: Nirmala BV, Sona Anand,Omprakash Singh',
            'Change Management, any hidden and unseen threat, forecast and any kind of process breakdown and recovery: Sanjay Anand sanjay@msourceone.com.',
            'People Audit Team: Nirmala and Sanjay: In recession Industry has removed uncultured and uner-performance people and team works to safeguard its business from such people hiring in company.'],
        ['Customer-Reference'],
        ['Every process owner communicates to their immediate supervisor via email or personal meeting and Supervisor inturn connects to the Management as per the circumstances anytime via email or personal meeting',
            'Management and the Supervisors have review meeting as per the agenda.',
            'First level Escalation - Sona Anand (sona.anand@msourceone.com,9663811338) Final level escalation - Sanjay Anand (sanand@msourceone.com,9845822415)'],
        ['Every three months, depending upon the review of every 3 months we make the necessary changes as required.'],
        ['1. Connectivity vendors for Internet and phone- Multi facility',
            '2. BESCOM for electricity and power',
            '3. Power Vendor: UPS, Generator',
            '4. Security: Security and floor cleaning and management',
            '5. Transportation: Cab vendor',
            '6. Food and catering, water and Tea vendor.',
            '7. Internal Database ATS running on open source software and Sun Server and applications management vendor',
            '8. Lead generation tools and medium based on internet portals and referrals',
            '9. Brand Equity and its trend, market trend or any other hidden market factor',
            '10. Application Tracking Systems Jobs.guru Software',
        ]
    ]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={s.stuffing}>
            <div className={s.aboutImageText}>
                <img className={s.image} src={stuffing} alt='stuffing'/>
                <div className={s.text}>
                    <h1>Source One <br></br> Contract Staffing Process</h1>
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
                    <h1>Model</h1>
                    <img src={stuffing1} alt='staffing'/>
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
                    <h1>Process Flow</h1>
                    <img src={stuffing2} alt='staffing'/>
                </motion.div>
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
                className={s.services}>
                {servicesH.map((el, index) => (
                    <div key={index} className={s.service}>
                        <div style={{width: '100%', margin: '0'}} className={s.line}/>
                        <div
                            className={s.serviceH}
                            onClick={() => {
                                if (selected.includes(el)) {
                                    setSelected(selected.filter(e => e !== el))
                                } else {
                                    setSelected([...selected, el])
                                }
                            }}>
                            <h3 style={selected.includes(el) ? {color: "black"} : {}}>
                                {el}
                            </h3>
                            {!selected.includes(el)
                                ? <h3 className={s.plus}>+</h3>
                                :
                                <h3 className={s.plus}
                                    style={selected.includes(el) ? {color: "black"} : {}}>-</h3>
                            }
                        </div>
                        {servicesP[index].map((sEl, sindex) => (
                            <p key={`${index}${sindex}`} style={selected.includes(el) ? {display: "block"} : {}}
                               className={s.parag}>
                                {sEl}
                            </p>
                        ))}
                    </div>
                ))}
                <div style={{width: '100%', margin: '0'}} className={s.line}/>
            </motion.div>


            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{amount: 0.3, once: true}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y: 200},
                    visible: {opacity: 1, y: 0}
                }}
                className={s.services}>
                <h1>SC-CSR-Guidelines - Compliance</h1>
                <h2>Source One is 100% SC-CSR compliant company on below principles</h2>
                {servicesH2.map((el, index) => (
                    <div key={index} className={s.service}>
                        <div style={{width: '100%', margin: '0'}} className={s.line}/>
                        <div
                            className={s.serviceH}
                            onClick={() => {
                                if (selected2.includes(el)) {
                                    setSelected2(selected2.filter(e => e !== el))
                                } else {
                                    setSelected2([...selected2, el])
                                }
                            }}>
                            <h3 style={selected2.includes(el) ? {color: "black"} : {}}>
                                {el}
                            </h3>
                            {!selected2.includes(el)
                                ? <h3 className={s.plus}>+</h3>
                                :
                                <h3 className={s.plus}
                                    style={selected2.includes(el) ? {color: "black"} : {}}>-</h3>
                            }
                        </div>
                        <p style={selected2.includes(el) ? {display: "block"} : {}} className={s.parag}>
                            {servicesP2[index]}
                        </p>
                    </div>
                ))}
                <div style={{width: '100%', margin: '0'}} className={s.line}/>
            </motion.div>



            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{amount: 0.3, once: true}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y: 200},
                    visible: {opacity: 1, y: 0}
                }}
                className={s.services}>
                {servicesH3.map((el, index) => (
                    <div key={index} className={s.service}>
                        <div style={{width: '100%', margin: '0'}} className={s.line}/>
                        <div
                            className={s.serviceH}
                            onClick={() => {
                                if (selected3.includes(el)) {
                                    setSelected3(selected3.filter(e => e !== el))
                                } else {
                                    setSelected3([...selected3, el])
                                }
                            }}>
                            <h3 style={selected3.includes(el) ? {color: "black"} : {}}>
                                {el}
                            </h3>
                            {!selected3.includes(el)
                                ? <h3 className={s.plus}>+</h3>
                                :
                                <h3 className={s.plus}
                                    style={selected3.includes(el) ? {color: "black"} : {}}>-</h3>
                            }
                        </div>
                        {servicesP3[index].map((sEl, sindex) => (
                            <p key={`${index}${sindex}`} style={selected3.includes(el) ? {display: "block"} : {}}
                               className={s.parag}>
                                {sEl}
                            </p>
                        ))}
                    </div>
                ))}
                <div style={{width: '100%', margin: '0'}} className={s.line}/>
            </motion.div>
        </div>
    )
}
export default Staffing
