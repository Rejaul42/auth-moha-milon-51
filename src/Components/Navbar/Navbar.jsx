import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContest } from "../../Provider/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContest);

    const handleLogOut = ()=>{
        logOut()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    } 

    const nabLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/order">Order</NavLink></li>
        {
            user &&
            <>
            <li><NavLink to="/profile">Profile</NavLink></li>
            <li><NavLink to="/friends">Friends</NavLink></li>
            </>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {nabLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {nabLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                    <span>{user.email}</span>
                    <a className="btn" onClick={handleLogOut}>Sign Out</a>
                    </>
                    :
                    <Link to="/login">Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;