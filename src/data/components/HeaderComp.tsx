// import { useCenterData } from "../actions/DataSource"
import { h1Style } from "./ComponentStyle"

export const HeaderComp = () => {
    // const { count } = useCenterData()
    return(
        <header className="mob-2 lg:mb-5">
            {/* <img src="./src/assets/pokemon-logo.webp" alt="pokemon-logo" className={ImgStyle}/> */}
            <h1 className={h1Style}>Lets Catch Pokémon</h1>
        </header>
    )
}