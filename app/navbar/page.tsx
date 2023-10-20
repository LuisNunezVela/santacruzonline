import ActionButton from "./action-button";
import Logo from "./logo";
import NavigationBar from "./navigation-bar";

const Navbar = () =>{
    return ( 
        <div className="
        flex
        justify-between
        items-center px-10
         border-b-2">
            <Logo/>
            <NavigationBar/>
            <ActionButton/>
        </div>
    )
}
export default Navbar;