import { useCenterData } from "../actions/DataSource";
import { InputStyle, LabelStyle, CompWrapperStyle } from "./ComponentStyle";

export const SearchComp = () => {
  const { handleSearchChange, search } = useCenterData();

  return (
    <div className={CompWrapperStyle}>
      <label htmlFor="pokemonSearch" className={LabelStyle}>Pokemon Search</label>
      <input
        id="pokemonSearch"
        placeholder="Search Pokemon"
        type="text"
        value={search}
        onChange={(e) => handleSearchChange(e.target.value)}
        className={InputStyle}
      />
    </div>
  );
};
