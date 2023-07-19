import {useEffect} from 'react'
import s from "./Contact.module.css";
import axios from "axios";
import contactus from "../../../assets/contactus.webp";
import {motion} from "framer-motion";
import {GrMail, GrMapLocation, GrPhone} from 'react-icons/gr'
import {useForm} from "react-hook-form";

const baseURL = import.meta.env.VITE_API_URL;

const Contact = () => {

    const {
        register,
        handleSubmit,
        formState: {isValid},
        setValue
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
        },
        mode: "all"
    });


    const submitForm = async (values) => {
        axios
            .post(`${baseURL}contact`, values)
            .then(() => {
                setValue('firstName', '')
                setValue('lastName', '')
                setValue('email', '')
                setValue('phone', '')
                setValue('message', '')
            });
        //const data = await dispatch(fetchAuthLogin(values));
        console.log(values)
    }


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={s.contact}>
            <div className={s.aboutImageText}>
                <img className={s.image} src={contactus} alt='contactus'/>
                <div className={s.text}>
                    <h1>Contact Us</h1>
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
                <div className={s.contactBlock}>
                    <h3>Contact Us</h3>
                    <div className={s.block}>
                        <h3>Bangalore Location :</h3>
                        <div className={s.blockItem}>
                            <GrMapLocation className={s.icon}/>
                            <p>#55/A, 1st Floor , Nanjappa Road, Shanthinagar, Bangalore-560027 Karnataka</p>
                        </div>
                        <div className={s.blockItem}>
                            <GrMail className={s.icon}/>
                            <p>sales@msourceone.com, rmg@msourceone.com, hr@msourceone.com</p>
                        </div>
                        <div className={s.blockItem}>
                            <GrPhone className={s.icon}/>
                            <p>Board Line Number : +91 080 67589100</p>
                        </div>
                    </div>
                    <div className={s.block}>
                        <h3>Delhi Location :</h3>
                        <div className={s.blockItem}>
                            <GrMapLocation className={s.icon}/>
                            <p>S-6, 1st floor Green Park extension Uphar cinema complex New Delhi-110016,</p>
                        </div>
                    </div>
                </div>
                <div className={s.contactBlock}>
                    <h3>Get In Touch With Us</h3>
                    <form className={s.form} onSubmit={handleSubmit(submitForm)}>
                        <div className={s.formBlock}>
                            <input
                                placeholder='First Name'
                                className={s.input}
                                {...register('firstName', {
                                    required: 'firstName is required',
                                })}
                            />
                            <input
                                placeholder='Last Name'
                                className={s.input}
                                {...register('lastName', {
                                    required: 'lastName is required',
                                })}
                            />
                        </div>
                        <div className={s.formBlock}>
                            <input
                                placeholder='Email'
                                className={s.input}
                                {...register('email', {
                                    required: 'email is required',
                                })}
                            />
                            <input
                                placeholder='Phone Number'
                                className={s.input}
                                {...register('phone', {
                                    required: 'phone',
                                })}
                            />
                        </div>
                        <div className={s.formArea}>
                            <textarea
                                className={s.area}
                                placeholder='Message'
                                {...register('message', {
                                    required: 'message is required',
                                })}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={!isValid}
                            className={s.button}
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
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
                className={s.process2}>
                <div className={s.contactText}>
                    <h2 className={s.part1}>Particulars</h2>
                    <h2 className={s.part2}>Email id</h2>
                    <h2 className={s.part3}>Contact Details</h2>
                </div>
                <div className={s.line} style={{margin: 0}}/>
                <div>
                    <div className={s.contactText}>
                        <p className={s.part1}>Reception Board-line Number</p>
                        <a className={s.part2} href="mailto:hr@msourceone.com">hr@msourceone.com</a>
                        <p className={s.part3}>080-67589100</p>
                    </div>
                    <div className={s.contactText}>
                        <p className={s.part1}>PF/UAN related Information</p>
                        <a className={s.part2} href="mailto:epf@msourceone.com">epf@msourceone.com</a>
                        <p className={s.part3}>7676436309</p>
                    </div>
                    <div className={s.contactText}>
                        <p className={s.part1}>ESI related Information</p>
                        <a className={s.part2} href="mailto:esic@msourceone.com">
                            esic@msourceone.com</a>
                        <p className={s.part3}>6366384661</p>
                    </div>
                    <div className={s.contactText}>
                        <p className={s.part1}>Ex-Employee Background check</p>
                        <a className={s.part2} href="mailto:hr@msourceone.com">hr@msourceone.com</a>
                        <p className={s.part3}>9342205615</p>
                    </div>
                    <div className={s.contactText}>
                        <p className={s.part1}>Resource HR Queries</p>
                        <a className={s.part2} href="mailto:rmg@msourceone.com">
                            rmg@msourceone.com</a>
                        <p className={s.part3}>9342205615</p>
                    </div>
                    <div className={s.contactText}>
                        <p className={s.part1}>Payroll Related Queries</p>
                        <a className={s.part2} href="mailto:payroll@msourceone.com">
                            payroll@msourceone.com</a>
                        <p className={s.part3}>6366551013 / 6366551012</p>
                    </div>
                    <div className={s.contactText}>
                        <p className={s.part1}>Ethics and Policy</p>
                        <a className={s.part2} href="mailto:policy@msourceone.com">
                            policy@msourceone.com</a>
                        <p className={s.part3}></p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
export default Contact
