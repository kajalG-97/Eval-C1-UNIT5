import { Link, Navigate } from "react-router-dom";
import { Text } from "../style";
export const Navbar = () => {
  return (
    <>
      <Text className="navbar">
        
       
         
        <Link to={"/"}><button>Home</button></Link>
        <Link to={"/section/:Mystery"}><button>Mystery</button></Link>
        <Link to={"/section/:Technology"}><button>Technology</button></Link>
        <Link to={"/section/:Mythology"}><button>Mythology</button></Link>
        <Link to={"/section/:History"}><button >History</button></Link>
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </Text>
    </>
  );
};
