import {useEffect, useState} from 'react'
import {motion} from "framer-motion";
import s from './Liferay.module.css'
import liferay from "../../../assets/liferay.webp";
import liferay1 from "../../../assets/liferay1.webp";
import List from "../../List/List.jsx";

const Liferay = () => {

    const [selected, setSelected] = useState([])
    const servicesH = ['Liferay Consulting', 'Liferay Customization & Development', 'Liferay Performance Tuning & Assessment', 'Liferay Support and Maintenance']
    const servicesP = ['Our Liferay consultants help in easier adoption of Open Source based feature-rich and scalable enterprise intranet and extra net solutions.',
        'Our Liferay certified developers help in easier adoption of Open Source based feature-rich and scalable enterprise intranet and extra net solutions.',
        'Our Liferay certified experts can maximize your Liferay Portal performance with 40+ performance checks along with recommendations and fixes.', 'Our Liferay team offers onsite and offsite support to ensure your Liferay applications are up-to-date and running with nearly zero downtime.',]
    const listTitle = 'How Organizations use Liferay?'
    const list = ['Web Publishing & Content Management', 'Social Engagement', 'Role based Portals', 'Web based applications', 'Integration with Hadoop-HDFS']


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className={s.liferay}>
            <div className={s.aboutImageText}>
                <img className={s.image} src={liferay} alt='about'/>
                <div className={s.text}>
                    <h1>Liferay</h1>
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
                    <h1>Overview</h1>
                    <p>Liferay is a lightweight, inter operable Open Source enterprise platform with a flexible
                        architecture
                        and an impressive product road map. Liferay has been named a Leader in Gartnera Magic Quadrant
                        for
                        Horizontal Portals and has Fortune 500 clients across industries. Companies worldwide have been
                        using
                        Liferay Portal because of its high-end functionality, compatibility with most major application
                        servers
                        and database platforms, and scalability. Based on Open standards, Liferay portal helps
                        organizations
                        achieve exceptionally lower total cost of ownership (TCO).
                    </p>
                    <p>
                        Source One is Liferay consulting partner since 2010 - Silver Partner in the India.
                        (visit this)
                    </p>
                    <p>
                        Source One has 50+ Liferay certified developers and extensive development, migration,
                        upgrade experience
                        and expertise with integration with various proprietary and Open Source applications such as
                        Alfresco,
                        makes us an ideal Liferay solution partner for enterprise portals, modern websites and
                        content management
                        solution.
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
                    className={s.liferayImg} src={liferay1} alt='liferay1'/>
            </div>


            <div className={s.liferayOverview2}>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.5, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, y: 100},
                        visible: {opacity: 1, y: 0}
                    }}
                    className={s.liferayOverviewText2}>
                    <h1>Services</h1>
                </motion.div>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.5, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, y: 100},
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
                                }}

                            >
                                <h2 style={selected.includes(el) ? {color: "black"} : {}}>
                                    {el}
                                </h2>
                                {!selected.includes(el)
                                    ? <h2 className={s.plus}>+</h2>
                                    :
                                    <h2 className={s.plus}
                                        style={selected.includes(el) ? {color: "black"} : {}}>-</h2>
                                }
                            </div>
                            <p style={selected.includes(el) ? {display: "block"} : {}}>
                                {servicesP[index]}
                            </p>
                        </div>
                    ))}
                    <div style={{width: '100%', margin: '0'}} className={s.line}/>
                </motion.div>
            </div>

            <div className={s.solutions}>
                <h1>Solutions</h1>
                <div className={s.line} style={{marginTop: 0}}/>

                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.3, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: 200},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={s.overviewPart}>
                    <div className={s.overviewPart2}>
                        <h4 className={s.overviewPart2h}>
                            Source One User Experience Platform using Liferay
                        </h4>
                        <p className={s.overviewPart2P}>
                            Source One seamlessly integrates Liferay with solutions within the organizational ecosystem be it Customer Relationship Management (CRM), E-commerce Solution, Enterprise Content Management (ECM). Other than integration the focus is on delivering optimal user experience to the business user. A few requisite features include contextual targeting, business analytics, advanced enterprise search, Rich Internet Application (RIA), mobile capabilities, and enterprise content.
                        </p>
                    </div>
                    <h1 className={s.overviewPart2H} style={{margin: 0}}>Solution Spotlight</h1>
                </motion.div>

                <div className={s.line} style={{marginTop: 0}}/>

                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.3, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -200},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={s.overviewPart} style={{flexDirection: "column"}}>
                    <List title={listTitle} list={list}/>
                </motion.div>
            </div>

        </div>
    )
}
export default Liferay
