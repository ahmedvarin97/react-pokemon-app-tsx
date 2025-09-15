import { CardList } from "../components/CardList"
import { MainSectionStyle } from "../components/ComponentStyle"
import { FilterComp } from "../components/FilterComp"
import { HeaderComp } from "../components/HeaderComp"

export const HomeLayout = () => {
    return(
        <section className={MainSectionStyle}>
            <HeaderComp/>
            <FilterComp/>
            <CardList/>
        </section>
    )
}