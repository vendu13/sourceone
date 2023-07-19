import s from './Outsourcing.module.css'
import outsourcing from "../../../assets/outsourcing.webp";
import outsourcing1 from "../../../assets/outsourcing2.webp";
import outsourcing2 from "../../../assets/outsourcing2 (1).webp";
import outsourcing3 from "../../../assets/ph.webp";
import outsourcing4 from "../../../assets/outsourcing4.webp";
import outsourcing5 from "../../../assets/outsourcing5.webp";
import outsourcing6 from "../../../assets/outsourcing6.webp";
import List from "../../List/List.jsx";
import Carousel from "../../Carousel/Carousel.jsx";
import {motion} from "framer-motion";
import {useEffect} from "react";

const Outsourcing = () => {

    const listTitle = 'We provide customized sourcing and recruiting strategies specific to information Technology sector.'
    const list = [
        'Mapping the Business Requirement', 'Advertisement management', 'Event planning & support', 'Applicant response management',
        'Resume scanning', 'Interview Management', 'Offer Management', 'Process Analytics', 'Information Management & Applicant Tracking system'
    ]

    const listTitle2 = ['Search: ', 'Source: ', 'Filter: ', 'Interview: ', 'Tech Check: ', 'Back Ground check: ', 'Co-Ordinate: ']
    const list2 = [
        'For resume to fill the existing vacancies', 'Source Passive candidates suitable for the vacant positions',
        'Scan every resume carefully and pick the best suitable one that matches the existing requirement',
        'Call the short listed candidates to find out their availability and discuss the vacancy position with them',
        'Our recruiters have formal training in variety of technical skills and they can handle preliminary technical ' +
        'interview',
        'Execute Back Ground checks and talk to the references',
        'They will co-ordinate with the account managers'
    ]

    const listTitle3 = 'Benefits'
    const list3 = [
        'No pay roll expense', 'No need to pay for extra benefits', 'No need of office space to accommodate the recruiter', 'No phone bill (your monthly fees includes that)',
        'Easy access to major resume databases', 'No commitments or long term contracts', 'Risk free money back guarantee for first month', 'Excellent opportunity to hire an assistant recruiter if you are deluged with work', 'Recruiters will source for all open positions', 'Our Recruiter do all the back end work ensures that you can concentrate more on your business-making new clients, getting more job orders and so on', 'Resumes received will be scrutinized; (personal contact and information verification by the recruiter', 'We employ the recruiters with full benefits and compensation saving you the cost of another employee. Our recruiter becomes active member of your team!', 'Allows your recruiting staff to focus on interviewing, qualifying and hiring the best talent, rather than time- consuming resume searching', 'Provide hiring officials with technically matching candidates',
        'Save money by eliminating the need to evaluate and pay for costly resume databases', 'Save even more money by reducing the need to hire, train, develop and maintain a highly skilled Internet Recruiting Staff', 'Provide hiring officials with an alternative to posting or traditional advertising', 'Low cost allows flexibility to spend dollars for additional, concurrent recruiting efforts'
    ]

    const listTitle4 = 'Additional benefits'
    const list4 = [
        'Coordinate the Job description and clarification on details needed', 'Job Posting on major job sites', 'Research to locate logical talent pool',
        'Check existing database for leads', 'Source to narrow research results', 'Qualify candidates by initial telephone interviews against the necessary job essentials',
        'Send resume and Pre-Qualification Form to your representative via email', 'Weekly status reports on number of candidates submitted and feedback/status.',
        'We have a big pool of experienced and highly trained recruiters. Depending upon the amount of work you have, you can choose to hire 1 or more recruiters.'
    ]

    const listTitle5 = [
        'Search: ', 'Source: ', 'Filter: ', 'Co-Ordinate: '
    ]
    const list5 = [
        'For suitable resume to fill the existing vacancies', 'Source passive candidates suitable for the vacant positions',
        'Scan resumes carefully and picks the best suitable one that matches the existing requirement', 'They will co-ordinate with the account managers'
    ]

    const listTitle6 = 'Benefits'
    const list6 = [
        'Speed up the hiring process', 'Identify top candidates without incurring third party fees', 'Easy access to major resume databases',
        'No pay roll expense', 'No need to pay for extra benefits', 'No need of office space', 'No phone bill', 'No need to subscribe to access resume databases', 'Allows your recruiting staff to focus on interviewing, qualifying and hiring the best talent, rather than time consuming resume sourcing',
        'Partner with full cycle recruiters to brain storm new resources and innovative searches to generate more passive candidates', 'No need to subscribe to access resume databases',
        'Provide hiring officials with an alternative to posting or traditional advertising', 'Low cost allows flexibility to spend dollars for additional, concurrent sourcing efforts',
        'Hire people from the hidden talent pool', 'Calculate and reduce cost per hire', 'Efficiently solicit, store and retrieve applicant data', 'Proficient in sourcing techniques',
        'Develop innovative sourcing strategies, meet service goals', 'Source candidates from employee referrals, networking websites, resume databases, etc.',
        'Screen candidates for interest, availability and basic qualifications of the position', 'Manage searches for all areas of the business, research & development, marketing, sales, finance and administration'
    ]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={s.outsourcing}>
            <div className={s.aboutImageText}>
                <img className={s.image} src={outsourcing} alt='outsourcing'/>
                <div className={s.text}>
                    <h1>Recruitment Process Outsourcing <br></br> (RPO)</h1>
                </div>
            </div>


            <div className={s.liferayOverview}>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.3, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -100},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={s.liferayOverviewText}>
                    <h1>Recruitment Process Outsourcing (RPO)</h1>
                    <p>
                        Source One Recruitment Process Outsourcing (RPO) solutions are designed with the need of clients
                        who need to complete the recruitment process but do not have all the internal HR systems in
                        place, or are in quick ramp up situations, where the existing internal HR team needs support
                        from external Talent Management partners to complete the hiring process without losing any time
                        or money.
                    </p>
                    <p>
                        Source One RPO solutions help clients achieve improvement in four areas of quality, cost,
                        service, and speed. We work closely with organizations to meet their recruitment needs by
                        managing their end to end recruitment process with special accent on excellence and speed of:
                    </p>
                </motion.div>
                <motion.img
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.3, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: 100},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={s.liferayImg} src={outsourcing1} alt='outsourcing1'/>
            </div>

            <div className={s.line}/>

            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{amount: 0.2, once: true}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -200},
                    visible: {opacity: 1, x: 0}
                }}
                className={s.process}>
                <List title={listTitle} list={list}/>
            </motion.div>

            <div className={s.line}/>
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{amount: 0.3, once: true}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y: 200},
                    visible: {opacity: 1, y: 0}
                }}
                className={s.hire}>
                <h1>Recruitment Process Proposal:</h1>
                <img src={outsourcing2} alt='recruitment' className={s.outImage}/>
            </motion.div>

            <div className={s.line}/>

            <h1 style={{textAlign: "center", marginBottom: 0}}>Source One competency in RPO:</h1>
            <div className={s.liferayOverview}>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.3, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -100},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={s.liferayOverviewText}>
                    <h1>E-Recruiting</h1>
                    <p>

                        Source One RPO solutions supplements in-house recruitment capabilities or take responsibility
                        for the entire operation on a project. Our highly experienced recruiters are hard at work for
                        you. Once they are immersed in your company's philosophies, your recruiting goals become theirs.
                        From primary candidate contact all the way to negotiating with a new hire, our recruiters offer
                        vital support to hiring managers and HR business partners. With our recruiters dealing with the
                        details, hiring managers have the time to focus on their business.
                    </p>
                    <p>
                        Our recruiters equipped with access to major resume databases, job sites and powerful resume
                        sourcing software to locate passive candidates. Though you do not have access to resume
                        databases, no need to worry because, our recruiters have access to most of the databases, which
                        lower your cost of hiring process. RPO will cost you a fraction of what is spent on internal
                        recruitment.
                    </p>
                </motion.div>
                <motion.img
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.3, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: 100},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={s.liferayImg} src={outsourcing3} alt='outsourcing1'/>
            </div>

            <div className={s.carousel}>
                <h1>What can our Recruiter do for you?</h1>
                <Carousel img={outsourcing4} headers={listTitle2} paragraphs={list2} style={{margin: '1rem 0'}}/>
            </div>

            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{amount: 0.2, once: true}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y: -100},
                    visible: {opacity: 1, y: 0}
                }}
                className={s.process}>
                <List title={listTitle3} list={list3}/>
            </motion.div>

            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{amount: 0.1, once: true}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y: 200},
                    visible: {opacity: 1, y: 0}
                }}
                className={s.process}>
                <List title={listTitle4} list={list4}/>
            </motion.div>

            <div className={s.line}/>

            <div className={s.liferayOverview}>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.3, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -100},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={s.liferayOverviewText}>
                    <h1>E-Resourcing</h1>
                    <p>
                        Source One has the resources, substance and experience to meet your needs. We have a deep
                        understanding of the issues involved in managing a comprehensive sourcing strategy to deliver a
                        quality workforce in a cost efficient and timely manner.
                    </p>
                    <p>
                        Our recruiters work closely with clients to determine the exact qualification and skills needed
                        in a prospect, and they filter candidates extensively to ensure their experience and needs are
                        appropriate for the job and culture offered by clients.
                    </p>
                </motion.div>
                <motion.img
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.3, once: true}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: 100},
                        visible: {opacity: 1, x: 0}
                    }}
                    className={s.liferayImg} src={outsourcing5} alt='outsourcing1'/>
            </div>

            <div className={s.carousel}>
                <h1>What can our Sourcer do for you?</h1>
                <Carousel img={outsourcing6} headers={listTitle5} paragraphs={list5} style={{margin: '1rem 0'}}/>
            </div>

            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{amount: 0.2, once: true}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y: 200},
                    visible: {opacity: 1, y: 0}
                }}
                className={s.process}>
                <List title={listTitle6} list={list6}/>
            </motion.div>

        </div>
    )
}
export default Outsourcing
