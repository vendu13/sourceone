import s from './Mobility.module.css'
import mobility from "../../../assets/mobility.jpg";
import mobility1 from "../../../assets/mobility2.jpg";
import {motion} from "framer-motion";
import {useEffect} from "react";

const Mobility = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={s.mobility}>
            <div className={s.aboutImageText}>
                <img className={s.image} src={mobility} alt='about'/>
                <div className={s.text}>
                    <h1>Mobile Development</h1>
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
                    <h1>Mobile Development</h1>
                    <p>In today's fast paced society, almost all individuals are caught up with the task of juggling two or more activities on the go. And with the help of smart devices and mobile applications, accomplishing these diverse tasks shopping, learning, designing, recreational activities etc. can now be done easily, regardless of an individual's location. The advent of mobile apps development has succeeded in bridging the gap between customers and service providers, and a business without a strong mobile presence will surely be left behind.

                        Mobile application development is the process by which application software is developed for low-power handheld devices, such as personal digital assistants, enterprise digital assistants or mobile phones. These applications can be pre-installed on phones during manufacturing, downloaded by customers from various mobile software distribution platforms, or delivered as web applications using server-side or client-side processing (e.g. JavaScript) to provide an "application-like" experience within a Web browser. Application software developers also have to consider a lengthy array of screen sizes, hardware specifications and configurations because of intense competition in mobile software and changes within each of the platforms.
                    </p>
                    <p>
                        At Source One we have come up with mobile application development in three major area:
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
                    className={s.liferayImg} src={mobility1} alt='liferay1'/>
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
                <h1 className={s.overviewPart2H}>iPhone Apps</h1>
                <div className={s.overviewPart2}>
                    <p className={s.overviewPart2P}>
                        The combined functionalities of Apple's iPhone and its corresponding iTunes Apps store, creates the perfect ecosystem for individuals, corporate and non-corporate organizations to engage their customer's with the use of mobile apps, with a user base that covers all nationalities and demographics.iPhone is probably the most influential consumer gadget ever made in history of electronics . This unique device has eventually changed the approach and perception towards a communication device with its extended feature and functionality. IPhone application has become an evolution in software market and gained huge momentum by its demand in business and individual interest. The idea of app-store has become an electronic phenomenon and started playing a vital role in education, professional services, hospitality, entertainment and other industries.
                    </p>
                    <p className={s.overviewPart2P}>
                        The social and business world is greatly influenced by iPhone by the unique concept of app-store where developers can upload apps for profit making purpose. Till date more than a billion of apps have been downloaded and the number is increasing in every seconds. There are applications for social media, news, weather reports, restaurant information,horoscopes, market survey and almost all subject included in dictionary with amusement and entertainment mines.
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
                className={s.overviewPart}>
                <div className={s.overviewPart2}>
                    <p className={s.overviewPart2P}>
                        Android is the fastest and most popular open source mobile operating system that has taken the world by storm. Similarly, in the spectrum of application development we stand ahead with our technologically sustainable direction to build incredible high quality apps. Companies are creating highly successful applications for diverse categories namely Social Networking, Lifestyle and Business.
                    </p>
                    <p className={s.overviewPart2P}>
                        Despite of it's a late arrival in the mobile and smart-device industry, Android has got a position of one of the most preferred brand. Android is the operating system for Smart phones as well as Tablet computers based on Linux and led by Google, the giant player in software industry. More than 50,000 Android apps being already developed and the Android app market market is booming day by day, especially for its user friendly features. This unique concept of communication is reshaping the way people used to communicate.
                    </p>
                    <p className={s.overviewPart2P}>
                        The Android platform is becoming hot favorite to smart-device users as well as the application developers. There is a true addiction of mass people towards the Android apps, creating a large gap between the demand and supply of efficient developers. There is an opportunity in this open platform to develop different kind of apps as you can think of and also an open marketplace for distributing your products to a large and growing user base with the help of its own tools.
                    </p>
                </div>
                <h1 className={s.overviewPart2H}>Android Apps</h1>
            </motion.div>

        </div>
    )
}
export default Mobility
