import React, {useEffect, useState} from 'react'
import {motion} from "framer-motion";
import s from './BigData.module.css'
import bigdata from "../../../assets/data.webp";
import style from "../AboutUs/AboutUs.module.css";
import Carousel from "../../Carousel/Carousel.jsx";
import carousel from "../../../assets/dataCarousel.webp";

const BigData = () => {

    const [selected, setSelected] = useState([])
    const servicesH = ['Big Data Technology Use case Identification', 'Big Data Infrastructure Set-up', 'Big Data Infrastructure Management in cloud', 'Big Data Analytics - Storage', 'Analytics', 'Search']
    const servicesP = ['Managing Big Data can increase transparency and easily access to the relevant stakeholders. As more transactional data is created and stored in the digital form, organizations can collect accurate data in real- or near real-time, enabling experimentation to identify needs and improve performance.\n' +
    '\n' +
    'Big Data gives organizations the means to improve customer segmentation and develop and tailor products, services and promotions to target each specific segment.\n' +
    '\n' +
    'A Big Data strategy can include sophisticated analytics to provide actionable insights that minimize risk and improve decision-making.\n' +
    '\n' +
    'Big Data is indispensable for organizations looking to create new business models and improve products and services.',
        'Big Data is unquestionably one of the most talked about Technologies in the IT world today. While the majority of customers are convinced of its significance, the focus is primarily more application oriented than Infrastructure oriented. Application feasibility of Big Data is an important aspect, but it is the Infrastructure setup which is of paramount importance. The way infrastructure architecture is worked out, affects the performance of any Big Data cluster. The ultimate goal is to achieve the proper balance between cost and efficiency, in working out Infrastructure Architecture of Big Data.\n' +
        '\n' +
        'We will take a closer look at the concept behind Big Data. To ensure clarity for the readers, Hadoop software framework is taken as a Big Data product. Architecture and methods of a Hadoop cluster, and how it relates to the server and network infrastructure. The typical storage requirements of a Big Data cluster. Information Security with Big Data is discussed at a high level.',
        'We are expert in setting up and expanding the Big Data in AWS.\n' +
        '\n' +
        'Big Data refers to a collection of tools, techniques and technologies for working with data productively, at any scale. The tools to support data collection, computation along with collaboration and sharing are all available in a couple of clicks, with Amazon Web Services.\n' +
        '\n' +
        'Amazon Elastic MapReduce provides a managed, easy to use analytics platform built around the powerful Hadoop framework. Focus on your map/reduce queries and take advantage of the broad ecosystem of Hadoop tools, while deploying to a high scale, secure infrastructure platform.\n' +
        '\n' +
        'Application Development and Maintenance\n' +
        '\n' +
        'We are expert in development and maintenance of Big Data applications using our Bigdata development infrastructure and AWS.\n' +
        '\n' +
        'We use Amazon Elastic MapReduce, which provides a managed, easy to use analytics platform built around the powerful Hadoop framework. Focus on your map/reduce queries and take advantage of the broad ecosystem of Hadoop tools, while deploying to a high scale, secure infrastructure platform',
        'Hadoop-HDFS, Hbase, Hive', 'Hadoop, Pig, Spark', 'Solar, Lucene']

    const headers = ['Application development and maintenance', 'Adopting Big Data', 'Solution Architecting', 'Big Data Analytics']
    const paragraphs = ['Develop big data based applications such as portals integrated with Big Data stack on the back end. Use map reduce and no-sql databases based on distributed architecture to extract actionable information as and when required or real time.',
        'Discover how big data can help your business. Ideate how the technology can help serve your customers better through improved customer segmentation, target specific customer segments, tailor your products and services to the needs of identified segments.',
        'Architect big data solutions keeping in view the present and future needs through robust system level architecture, selection of right tools from big data stack and data flow designs.',
        'Data analysis and visualization is core to providing useful insights into the mass of data. Enable customer to acquire, cleanse and analyze data using in run time and batch mode to extract actionable information.']

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className={s.bigdata}>
            <div className={s.aboutImageText}>
                <img className={s.image} src={bigdata} alt='about'/>
                <div className={s.text}>
                    <h1>Big Data & Analytics</h1>
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
                className={s.overviewPart}>
                <h1 className={s.overviewPart2H}>Bigdata</h1>
                <div className={s.overviewPart2}>
                    <h4 className={s.overviewPart2h}>
                        Expertise in providing coast effective end-to-end Big Data Solutions and Services.
                    </h4>
                    <p className={s.overviewPart2P}>
                        Data has become unmanageable with the exponential growth of emerging mobile and digital
                        technologies. Managing Peta Bytes of data every day is the latest challenge for enterprises
                        looking for business value. Big Data is volume, velocity and variety of data; it opens a world
                        of opportunities to find new and valuable insights from the mysterious data sources, generating
                        data at varying speeds and types.

                        Our passion for providing you best-in-class cost effective solutions and services in big data
                        through our practice, partners and our association with product vendor.
                    </p>
                </div>
            </motion.div>

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
                className={s.overviewPartSecond}>
                <div className={s.overviewPart2}>
                    <h4 className={s.overviewPart2h}>
                        Big Data Technology Strategy building.
                    </h4>
                    <p className={s.overviewPart2P}>
                        The data-driven economy is upon us. First-generation internet companies such as Google and
                        Amazon, have demonstrated data alchemyпїЅ - turning data into gold - and now others realise that
                        great opportunity can be seized by using big data and the big ideas that come along with it.

                        The big data volume and data generators shown below:
                    </p>
                </div>
                <h1 className={s.overviewPart2H}>Big Data <br></br> Consultancy</h1>
            </motion.div>


            <div className={style.carousel}>
                <h1>Services & Solutions</h1>
                <Carousel img={carousel} headers={headers} paragraphs={paragraphs}/>
            </div>


            <div className={s.liferayOverview2}>

                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.3, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -100},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={s.liferayOverviewText22}>
                    <h1>Big Data</h1>
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
        </div>
    )
}
export default BigData
