import { useContext } from "react";
import { AuthContest } from "../AuthProvider";
import { Link } from "react-router-dom";

const Privetroute = ({children}) => {
    const {user, loading} = useContext(AuthContest);
    if(loading){
        <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Link to='/login'>Please Log In</Link>
};

export default Privetroute;