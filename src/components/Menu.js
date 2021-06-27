import React , {useRef,useEffect,useState} from 'react';
import MenuLogo from '../assets/img/menu-logo.svg';
import "../assets/css/menu/menu.css";
import Dashboard from '../assets/img/dashboard.svg';
import Attendance from '../assets/img/attendance.svg';
import Calendar from '../assets/img/calendar.svg';
import Courses from '../assets/img/courses.svg';
import Grades from '../assets/img/grades.svg';
import Materials from '../assets/img/materials.svg';
import Settings from '../assets/img/settings.svg';
import Transcripts from '../assets/img/transcripts.svg';
import PromoBackground from '../assets/img/promo-background.svg';
const Menu = ()=>{
    const menuRef = useRef()
    const promoRef = useRef()
    const linkTextRef = useRef();

    const [displayText, setDisplayText] = useState(true);
    const [dispayPromo, setDispayPromo] = useState(true)
    window.onresize = ()=>{
      menuRef.current.offsetWidth<185?setDispayPromo(false):setDispayPromo(true)
      menuRef.current.offsetWidth<136?setDisplayText(false):setDisplayText(true)
    }
    
    return(
        <div id="menu" ref={menuRef}>
            <a href="#" className="logo-menu"><img src={MenuLogo} alt="logo"></img><p className={`logo-text ${displayText?"":"logo-text-nonactive"}`}>Unive</p></a>
            <ul className="menu-list">
                <li className="menu-list-element">
                    <a className={`menu-list-element-link ${displayText?"":"menu-list-element-link-nonactive"}`} href="#">
                        <img src={Dashboard} alt="d" className="menu-list-element-img"></img>
                        <p className={`menu-list-element-text ${displayText?"":"menu-list-element-text-nonactive"}`} ref={linkTextRef}>Dashboard</p>
                    </a>
                </li>
                <li className="menu-list-element">
                    <a className={`menu-list-element-link ${displayText?"":"menu-list-element-link-nonactive"}`} href="#">
                        <img src={Courses} alt="d" className="menu-list-element-img"></img>
                        <p className={`menu-list-element-text ${displayText?"":"menu-list-element-text-nonactive"}`} ref={linkTextRef}>Courses</p>
                    </a>
                </li>
                <li className="menu-list-element">
                    <a className={`menu-list-element-link ${displayText?"":"menu-list-element-link-nonactive"}`} href="#">
                        <img src={Materials} alt="d" className="menu-list-element-img"></img>
                        <p className={`menu-list-element-text ${displayText?"":"menu-list-element-text-nonactive"}`} ref={linkTextRef}>Materials</p>
                    </a>
                </li>
                <li className="menu-list-element">
                    <a className={`menu-list-element-link ${displayText?"":"menu-list-element-link-nonactive"}`} href="#">
                        <img src={Calendar} alt="d" className="menu-list-element-img"></img>
                        <p className={`menu-list-element-text ${displayText?"":"menu-list-element-text-nonactive"}`} ref={linkTextRef}>Calendar</p>
                    </a>
                </li>
                <li className="menu-list-element">
                    <a className={`menu-list-element-link ${displayText?"":"menu-list-element-link-nonactive"}`} href="#">
                        <img src={Transcripts} alt="d" className="menu-list-element-img"></img>
                        <p className={`menu-list-element-text ${displayText?"":"menu-list-element-text-nonactive"}`} ref={linkTextRef}>Transcripts</p>
                    </a>
                </li>
                <li className="menu-list-element">
                    <a className={`menu-list-element-link ${displayText?"":"menu-list-element-link-nonactive"}`} href="#">
                        <img src={Grades} alt="d" className="menu-list-element-img"></img>
                        <p className={`menu-list-element-text ${displayText?"":"menu-list-element-text-nonactive"}`} ref={linkTextRef}>Grades</p>
                    </a>
                </li>
                <li className="menu-list-element">
                    <a className={`menu-list-element-link ${displayText?"":"menu-list-element-link-nonactive"}`} href="#">
                        <img src={Attendance} alt="d" className="menu-list-element-img"></img>
                        <p className={`menu-list-element-text ${displayText?"":"menu-list-element-text-nonactive"}`} ref={linkTextRef}>Attendance</p>
                    </a>
                </li>
                <li className="menu-list-element">
                    <a className={`menu-list-element-link ${displayText?"":"menu-list-element-link-nonactive"}`} href="#">
                        <img src={Settings} alt="d" className="menu-list-element-img"></img>
                        <p className={`menu-list-element-text ${displayText?"":"menu-list-element-text-nonactive"}`} ref={linkTextRef}>Settings</p>
                    </a>
                </li>
            </ul>
            <div className="promo-info" ref={promoRef}>
                <h4 className="promo-info-text promo-info-text-weight" >Level up your skills,</h4>
                <h3 className="promo-info-text">Software</h3>
                <h3 className="promo-info-text">Engineering</h3>
                <h3 className="promo-info-text">MasterTrack</h3>
                <h3 className="promo-info-text">Certificate</h3>
                <img src={PromoBackground} className="promo-info-background"></img>
            </div>
        </div>
    )
}
export default Menu;