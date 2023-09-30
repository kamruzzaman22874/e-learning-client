/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import logo from "../../../assets/logo/logo (1).png"
import { GiHamburgerMenu } from "react-icons/gi";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { user, logOut } = useAuth()
    const [sticky, setSticky] = useState(false);
    const [open, setOpen] = useState(false);
    const menuLinks = [
        { name: "HOME", link: "/" },
        { name: "COURSES", link: "/courses" },
        { name: "DASHBOARD", link: "/dashboard" },


    ]
    const menuLinks2 = [
        { name: "HOME", link: "/" },
        { name: "COURSES", link: "/courses" },
    ]

    

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const nav = document.querySelector("nav");
            window.scrollY > 0 ? setSticky(true) : setSticky(false);
        })
    }, [])

    const handleLogOut = () => {
            logOut()
            .then(() => {})
            .catch((err) => console.log(err));
    };
    return (
        <nav className={`fixed w-full shadow-lg top-0 left-0 z-[999] ${sticky ? 'bg-white/60 text-gray-900' : 'text-white'}`}>
            {
                user ? <>
                    <div className="flex items-center justify-between text-black">
                        <div className="mx-7">
                            <img className="h-10" src={logo} alt="" />
                        </div>
                        <input type="text" placeholder="Type here" className="input hidden md:block input-bordered w-full max-w-xs" />
                        <div className={`${sticky ? 'md:bg-white/0 bg-white' : 'bg-white'} text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}>

                            <ul className="flex items-center gap-1 py-2 text-lg">
                                {
                                    menuLinks?.map((menu, i) =>
                                        <li className="px-6 hover:text-cyan-600" key={i}>
                                            <a href={menu.link}>{menu?.name}</a>
                                        </li>
                                    )
                                }
                                {
                                    user ? <><button onClick={handleLogOut}>LOGOUT</button></> : <><button >LOGIN</button></>
                                }
                            </ul>
                        </div>
                        <div onClick={() => setOpen(!open)} className={`z-[999] ${open ? 'text-gray-900' : 'text-gray-100'} text-3xl md:hidden m-5`}>
                            {/* <ion-icon name="menu"></ion-icon> */}
                            <GiHamburgerMenu className="text-black" />
                        </div>
                        <div className={`md:hidden text-white absolute w-2/3 h-screen px-7 py-2 font-medium bg-black top-0 opacity-80 duration-500 ${open ? 'right-0' : 'right-[-100%]'}`}>
                            <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
                                {
                                    menuLinks.map((menu, i) => (
                                        <li onClick={() => setOpen(false)} className="px-6 hover:text-cyan-600" key={i}>
                                            <a href={menu?.link}>{menu?.name}</a>
                                        </li>
                                    )

                                    )
                                }
                                
                            </ul>
                        </div>
                    </div>
                </> :
                    <>
                        {
                            <div className="flex items-center justify-between text-black">
                                <div className="mx-7">
                                    <img className="h-10" src={logo} alt="" />
                                </div>
                                <input type="text" placeholder="Type here" className="input hidden md:block input-bordered w-full max-w-xs" />
                                <div className={`${sticky ? 'md:bg-white/0 bg-white' : 'bg-white'} text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}>

                                    <ul className="flex items-center gap-1 py-2 text-lg">
                                        {
                                            menuLinks2?.map((menu, i) =>
                                                <li className="px-6 hover:text-cyan-600" key={i}>
                                                    <a href={menu.link}>{menu?.name}</a>
                                                </li>
                                            )
                                        }
                                        {
                                            user ? <button onClick={handleLogOut}>LOGOUT</button> : 
                                            
                                            <>
                                                <Link to="/login">
                                                <button>LOGIN</button>
                                                </Link>
                                            </>
                                        }
                                    </ul>
                                </div>
                                <div onClick={() => setOpen(!open)} className={`z-[999] ${open ? 'text-gray-900' : 'text-gray-100'} text-3xl md:hidden m-5`}>
                                    {/* <ion-icon name="menu"></ion-icon> */}
                                    <GiHamburgerMenu className="text-black" />
                                </div>
                                <div className={`md:hidden text-white absolute w-2/3 h-screen px-7 py-2 font-medium bg-black top-0 opacity-80 duration-500 ${open ? 'right-0' : 'right-[-100%]'}`}>
                                    <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
                                        {
                                            menuLinks2.map((menu, i) => (
                                                <li onClick={() => setOpen(false)} className="px-6 hover:text-cyan-600" key={i}>
                                                    <a href={menu?.link}>{menu?.name}</a>
                                                </li>
                                            )

                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        }
                    </>
            }
        </nav>
    );
};

export default Navbar;