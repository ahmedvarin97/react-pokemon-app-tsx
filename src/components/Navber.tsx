import { NavLink, useSearchParams } from "react-router-dom"
import { ButtonClassActive, ButtonClassDefault, NavWrapper } from "./ComponentStyle";

export const Navber = () => {
    
  const [searchParams] = useSearchParams();
  const todoFilter = searchParams.get("todo")
  
    return(
        <>
            <nav className={NavWrapper}>
                {todoFilter !== 'active' && todoFilter !== 'completed' ? <NavLink to='/'><button className={ButtonClassActive}>All</button ></NavLink> : <NavLink to='/'><button className={ButtonClassDefault}>All</button></NavLink> }
                {todoFilter === 'active' ? <NavLink to='/?todo=active'><button  className={ButtonClassActive}>Active</button></NavLink> : <NavLink to='/?todo=active'><button className={ButtonClassDefault}>Active</button></NavLink> }
                {todoFilter === 'completed' ? <NavLink to='/?todo=completed'><button  className={ButtonClassActive}>Completed</button></NavLink> : <NavLink to='/?todo=completed'><button className={ButtonClassDefault}>Completed</button></NavLink> }
            </nav>
        </>
    )
}