import { Link , useLocation } from 'react-router-dom';
import './navbar.css';
import Logo from '../../assets/image/Logo.jpg';
import { getContext } from '../../State/navbar';
import { useEffect, useRef } from 'react';

export default function Navbar() {

    const { state, dispatch } = getContext();

    const Location = useLocation();


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
    }

    useEffect(() => {
        console.log(state.currentPoint);
    }, [state.currentPoint]);


    return (
        <div className="NavigationBar">
            <div className="LogoDiv">
                <img src={Logo} alt='Logo' className='LogoImage' />
                <p>Sat Shri Steel</p>
            </div>
            <nav>
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
            <div className='div2'>
                <span style={{ color: 'white', fontSize: 18 }}>&#9742;</span>
                <p className='Contact'>+91 9909042114</p>
            </div>
        </div>
    )
}