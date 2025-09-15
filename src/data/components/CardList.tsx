import { useCenterData } from "../actions/DataSource";
import { CardItem } from "./CardItem";
import { CardListStyle } from "./ComponentStyle";
import { Spinner } from "./SpinnerLoading";
import { Pagination } from "./Pagination";

export const CardList = () => {
  const { pokemonData, search, loading, error } = useCenterData();

  if (loading) return <Spinner />;
  if (error) return <p className="text-white">{error}</p>;

  return (
    <>
      <ul className={CardListStyle}>
        {pokemonData.map((curPokemon) => (
          <CardItem key={curPokemon.id} curPokemon={curPokemon} />
        ))}
      </ul>

      {/* Hide pagination when search is active */}
      {search.trim() === "" && <Pagination />}
    </>
  );
};
