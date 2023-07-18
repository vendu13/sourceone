import React from 'react'
import Button from "../Button/Button.jsx";
import style from "./Footer.module.css";
import logo from '../../assets/logo.png'
import {BsFacebook, BsLinkedin} from 'react-icons/bs'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footerBlock}>
                <div>
                    <img src={logo} alt='logo' className={style.image}/>
                </div>
                <Button text='CONTACT US'/>
            </div>
            <div className={style.line}/>
            <div className={style.footerBlock}>
                <div className={style.links}>
                    <a target='_blank' href='https://www.facebook.com/msourceonedotcom/' style={{color: "white"}}><BsFacebook/></a>
                    <a target='_blank' href='https://www.linkedin.com/company/source-one-management-services-pvt-ltd?trk=mini-profile-title' style={{color: "white"}} rel="noreferrer"><BsLinkedin/></a>
                </div>
                <div className={style.tech}>
                    <Link to='/technology/liferay' style={{color: "white", textDecoration: 'none'}}>Liferay</Link>
                    •
                    <Link to='/technology/bigdata&analytics' style={{color: "white", textDecoration: 'none'}}>BigData & analytics</Link>
                    •
                    <Link to='/technology/ecommerce' style={{color: "white", textDecoration: 'none'}}>E-Commerce</Link>
                    •
                    <a href='http://sourceone.education/' target='_blank' style={{color: "white", textDecoration: 'none'}} rel="noreferrer">SAP</a>
                </div>
            </div>
            <div className={style.line}/>
            <div className={style.footerBlock}>
                <div className={style.copyright}>
                    © Copyright 2022 SourceOne Technologies, All Rights Reserved
                </div>
                <div className={style.solutions}>
                    <Link to='/solutions/business' style={{color: "white", textDecoration: 'none'}}>Business Process Outsourcing</Link>
                    <div className={style.lineVertical}/>
                    <Link to='/solutions/mobility' style={{color: "white", textDecoration: 'none'}}>Mobility</Link>
                    <div className={style.lineVertical}/>
                    <Link to='/solutions/uidevelopment' style={{color: "white", textDecoration: 'none'}}>UI Development</Link>
                </div>
            </div>
        </div>
    )
}
export default Footer
