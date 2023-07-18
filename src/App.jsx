import {useEffect, useState} from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./components/scenes/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AboutUs from "./components/scenes/AboutUs/AboutUs.jsx";
import Liferay from "./components/scenes/Liferay/Liferay.jsx";
import BigData from "./components/scenes/BigData/BigData.jsx";
import ECommerce from "./components/scenes/E-commerce/E-commerce.jsx";
import BusinessProcess from "./components/scenes/BusinessProcess/BusinessProcess.jsx";
import Mobility from "./components/scenes/Mobility/Mobility.jsx";
import UIDevelopment from "./components/scenes/UIDevelopment/UIDevelopment.jsx";
import FulltimeRecruitment from "./components/scenes/FulltimeRecruitment/FulltimeRecruitment.jsx";
import Staffing from "./components/scenes/Stuffing/Staffing.jsx";
import Outsourcing from "./components/scenes/Outsourcing/Outsourcing.jsx";
import Supplier from "./components/scenes/Supplier/Supplier.jsx";
import Workforce from "./components/scenes/Workforce/Workforce.jsx";
import Transfer from "./components/scenes/Transfer/Transfer.jsx";
import Automation from "./components/scenes/Automation/Automation.jsx";
import Deployment from "./components/scenes/Deployment/Deployment.jsx";
import Contact from "./components/scenes/Contact/Contact.jsx";
import Career from "./components/scenes/Career/Career.jsx";
import Privacy from "./components/scenes/Privacy/Privacy.jsx";

function App() {
    const [isTopOfPage, setIsTopOfPage] = useState(true)
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY < 80) {
                setIsTopOfPage(true)
            }
            if (window.scrollY > 80) setIsTopOfPage(false)

            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(false);
            }
            if (window.scrollY < lastScrollY) { // if scroll up show the navbar
                setShow(true);
            }

            setLastScrollY(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => removeEventListener('scroll', handleScroll)
    }, [lastScrollY])


  return (
    <>
        <BrowserRouter>
            <Header show={show} isTopOfPage={isTopOfPage}/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/aboutus' element={<AboutUs />}/>
                <Route path='/technology/liferay' element={<Liferay />}/>
                <Route path='/technology/bigdata&analytics' element={<BigData />}/>
                <Route path='/technology/ecommerce' element={<ECommerce />}/>
                <Route path='/solutions/business' element={<BusinessProcess />}/>
                <Route path='/solutions/mobility' element={<Mobility />}/>
                <Route path='/solutions/uidevelopment' element={<UIDevelopment />}/>
                <Route path='/services/recruitment' element={<FulltimeRecruitment />}/>
                <Route path='/services/staffing' element={<Staffing />}/>
                <Route path='/services/outsourcing' element={<Outsourcing />}/>
                <Route path='/services/supplier' element={<Supplier />}/>
                <Route path='/services/workforce' element={<Workforce />}/>
                <Route path='/services/transfer' element={<Transfer />}/>
                <Route path='/services/automation' element={<Automation />}/>
                <Route path='/services/deployment' element={<Deployment />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/careers' element={<Career />}/>
                <Route path='/privacy' element={<Privacy />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
