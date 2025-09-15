import { FilterWrapper } from "./ComponentStyle"
import { SearchComp } from "./SearchComp"

export const FilterComp = () => {
    return(
        <div className={FilterWrapper}>
            <SearchComp/>
        </div>
    )
}