// CardItem.tsx
import { Link } from "react-router-dom";
import {
  CardContentWrapper,
  CardDetailBtn,
  CardImage,
  CardStyle,
  PokemonAbilities,
  PokemonDetail,
  PokemonHrStyle,
  PokemonInfo,
  PokemonInfoSpan,
  PokemonName,
} from "./ComponentStyle";

import type { Pokemon } from "pokenode-ts";

type CardItemProps = {
  curPokemon: Pokemon; // full Pokémon type from pokenode-ts
};

export const CardItem = ({ curPokemon }: CardItemProps) => {
  // Choose best sprite (fallback if dream_world missing)
  const sprite =
    curPokemon.sprites.other?.dream_world.front_default ??
    curPokemon.sprites.other?.["official-artwork"].front_default ??
    curPokemon.sprites.front_default ??
    "";

  return (
    <li className={CardStyle}>
      <figure className="flex mb-5">
        <img
          src={sprite}
          alt={curPokemon.name}
          className={CardImage}
        />
      </figure>
      <div className={CardContentWrapper}>
        <div className="text-center">
          <h1 className={PokemonName}>{curPokemon.name}</h1>
          <span className={PokemonAbilities}>
            {curPokemon.abilities.slice(-2).map((a) => a.ability.name).join(", ")}
          </span>
        </div>

        <div className={PokemonDetail}>
          <p className={PokemonInfo}>
            {curPokemon.height}
            <br />
            <span className={PokemonInfoSpan}>Height</span>
          </p>
          <p className={PokemonInfo}>
            {curPokemon.weight}
            <br />
            <span className={PokemonInfoSpan}>Weight</span>
          </p>
          <p className={PokemonInfo}>
            {curPokemon.stats.find((s) => s.stat.name === "speed")?.base_stat ?? "N/A"}
            <br />
            <span className={PokemonInfoSpan}>Speed</span>
          </p>
        </div>

        <hr className={PokemonHrStyle} />
        <Link to={`/pokemon/${curPokemon.name}`}  className={CardDetailBtn}><button type="button" className="cursor-pointer">
          View Detail
        </button></Link>
      </div>
    </li>
  );
};
