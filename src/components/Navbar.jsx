import {NavLink} from "react-router-dom"
import Logo from "../assets/img/logo.png"
const Navbar = () =>{
    return(
        <div style={{borderBottom:"1px solid gray" ,width:"100%"}}>
        <ul style={{listStyle:"none",display:"flex",alignItems:"center"}}>
        <li style={{marginRight:60}}>
            <NavLink to={"/"}>
            <img src={Logo} alt="logo" style={{width:180}}/>
            </NavLink>
        </li>
        <li style={{marginRight:15,marginLeft:15,textDecoration:"none"}}>
                    <NavLink to={"/allBtn"}
                       style={({isActive, isTransitioning}) => {
                        return {
                            fontWeight: isActive
                                ? "bold"
                                : "bold",
                            color: isActive
                                ? "#2a4270"
                                : "#000",
                            viewTransitionName: isTransitioning
                                ? "slide"
                                : "",
                                textDecoration:'none'
                        };
                    }}>
                        Buttons
                    </NavLink>
        </li>
        <li style={{marginRight:15,marginLeft:15,textDecoration:"none"}}>
                    <NavLink to={"/allInputs"}
                       style={({isActive, isTransitioning}) => {
                        return {
                            fontWeight: isActive
                                ? "bold"
                                : "bold",
                            color: isActive
                                ? "#2a4270"
                                : "#000",
                            viewTransitionName: isTransitioning
                                ? "slide"
                                : "",
                                textDecoration:'none'
                        };
                    }}>
                        Inputs
                    </NavLink>
        </li>
        <li style={{marginRight:15,marginLeft:15,textDecoration:"none"}}>
                    <NavLink to={"/allTypographys"}
                    
                       style={({isActive, isTransitioning}) => {
                        return {
                            fontWeight: isActive
                                ? "bold"
                                : "bold",
                            color: isActive
                                ? "#2a4270"
                                : "#000",
                            viewTransitionName: isTransitioning
                                ? "slide"
                                : "",
                                textDecoration:'none'
                        };
                    }}>
                        Typographys
                        
                    </NavLink>
        </li>
        <li style={{marginRight:15,marginLeft:15,textDecoration:"none"}}>
                    <NavLink to={"/allDropDown"}
                       style={({isActive, isTransitioning}) => {
                        return {
                            fontWeight: isActive
                                ? "bold"
                                : "bold",
                            color: isActive
                                ? "#2a4270"
                                : "#000",
                            viewTransitionName: isTransitioning
                                ? "slide"
                                : "",
                                textDecoration:'none'
                        };
                    }}>
                        DropDown
                    </NavLink>
        </li>
        <li style={{marginRight:15,marginLeft:15,textDecoration:"none"}}>
                    <NavLink to={"/allDifferentInputType"}
                       style={({isActive, isTransitioning}) => {
                        return {
                            fontWeight: isActive
                                ? "bold"
                                : "bold",
                            color: isActive
                                ? "#2a4270"
                                : "#000",
                            viewTransitionName: isTransitioning
                                ? "slide"
                                : "",
                                textDecoration:'none'
                        };
                    }}>
                        All Input Types
                    </NavLink>
        </li>
        </ul>
        </div>
    )
}

export default Navbar;