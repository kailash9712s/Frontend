import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import Logo from '../../assets/image/Logo.jpg';
import { getContext } from '../../State/navbar';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {

    const { state, dispatch } = getContext();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const Location = useLocation();
    const update = useRef(false);

    const changeState = (currentPoint) => {

        if (update.current) {
            console.log("work in progress");
            return;
        }

        if (state.currentPoint == currentPoint) {
            console.log("you already in same page");
            return;
        }

        update.current = true;

        dispatch({
            action: "update-point",
            data: currentPoint
        });

        setIsSidebarOpen(false);
    }

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    useEffect(() => {
        console.log(state.currentPoint);
        update.current = false;
    }, [state.currentPoint]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isSidebarOpen && !event.target.closest('.sidebar') && !event.target.closest('.hamburger')) {
                closeSidebar();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSidebarOpen]);

    return <>
        <div className="NavigationBar">
            <div className="LogoDiv">
                <img src={Logo} alt='Logo' className='LogoImage' />
                <p>Sat Shri Steel</p>
            </div>

            <nav className="desktop-nav">
                <Link
                    className={`homenav ${Location.pathname === "/" ? "activeNav" : ""}`}
                    to='/'
                    onClick={() => changeState("Home")}
                >
                    Home
                </Link>
                <Link
                    className={`homenav ${Location.pathname === "/About" ? "activeNav" : ""}`}
                    to='/About'
                    onClick={() => changeState("About")}
                >
                    About
                </Link>
                <Link
                    className={`homenav ${Location.pathname === "/Projects" ? "activeNav" : ""}`}
                    to='/Projects'
                    onClick={() => changeState("Project")}
                >
                    Projects
                </Link>
                <Link
                    className={`homenav ${Location.pathname === "/Brochure" ? "activeNav" : ""}`}
                    to='/Brochure'
                    onClick={() => changeState("Brochure")}
                >
                    Brochure
                </Link>
            </nav>

            {/* Mobile Contact Section - Right Side (Desktop Only) */}
            <div className="mobile-contact">
                <a href="tel:+919909042114" className="Contact">
                    📞 +91 9909042114
                </a>
            </div>

            {/* Mobile Bottom Navigation */}
            <div className="mobile-bottom-nav">
                <Link
                    className={`bottom-nav-link ${Location.pathname === "/" ? "activeNav" : ""}`}
                    to='/'
                    onClick={() => changeState("Home")}
                >
                    <div className="bottom-nav-item">
                        <span className="bottom-nav-icon">🏠</span>
                        <span className="bottom-nav-text">Home</span>
                    </div>
                </Link>
                <Link
                    className={`bottom-nav-link ${Location.pathname === "/About" ? "activeNav" : ""}`}
                    to='/About'
                    onClick={() => changeState("About")}
                >
                    <div className="bottom-nav-item">
                        <span className="bottom-nav-icon">ℹ️</span>
                        <span className="bottom-nav-text">About</span>
                    </div>
                </Link>
                <Link
                    className={`bottom-nav-link ${Location.pathname === "/Projects" ? "activeNav" : ""}`}
                    to='/Projects'
                    onClick={() => changeState("Project")}
                >
                    <div className="bottom-nav-item">
                        <span className="bottom-nav-icon">🏗️</span>
                        <span className="bottom-nav-text">Projects</span>
                    </div>
                </Link>
                <Link
                    className={`bottom-nav-link ${Location.pathname === "/Brochure" ? "activeNav" : ""}`}
                    to='/Brochure'
                    onClick={() => changeState("Brochure")}
                >
                    <div className="bottom-nav-item">
                        <span className="bottom-nav-icon">📄</span>
                        <span className="bottom-nav-text">Brochure</span>
                    </div>
                </Link>
            </div>
        </div>
    </>
}