// PokemonDetail.tsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PokemonClient, type Pokemon } from "pokenode-ts";
import { Spinner } from "../components/SpinnerLoading";
import { IoIosArrowRoundBack } from "react-icons/io";
import { PokemonInfo, PokemonInfoSpan } from "../components/ComponentStyle";

export const PokemonDetailInfo = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const api = new PokemonClient();
        const data = await api.getPokemonByName(name!);
        setPokemon(data);
      } catch (err) {
        setError("Failed to load Pokémon details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (name) fetchPokemon();
  }, [name]);

  if (loading) return <Spinner />;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!pokemon) return <p className="text-gray-400">Pokémon not found</p>;

  return (
    <section className="container mx-auto px-6 py-8 text-white">
      <button
        onClick={() => navigate(-1)}
        className="bg-[#e4e6ef] p-3 rounded-full text-4xl text-[#304594] hover:bg-[#304594] hover:text-[#e4e6ef] cursor-pointer"
      >
       <IoIosArrowRoundBack />
      </button>
      <div className="text-center items-center justify-center text-[#304594]">
      <img
        src={
          pokemon.sprites.other?.dream_world.front_default ||
          pokemon.sprites.other?.home.front_default ||
          pokemon.sprites.front_default ||
          ""
        }
        alt={pokemon.name}
        className="w-60 h-60 object-contain mb-6 mx-auto"
      />
        <h1 className="text-3xl font-bold mb-4 capitalize">{pokemon.name}</h1> 
        <div className="lg:w-[50%] w-full mx-auto">
          <div className="bg-white p-5 lg:p-10 rounded-3xl text-[#282828] mb-5 grid grid-cols-2 lg:grid-cols-4 gap-4 text-left justify -center">
            <p className={PokemonInfo}>
              {pokemon.base_experience}
              <br />
              <span className={PokemonInfoSpan}>Base Experience</span>
            </p>
             <p className={PokemonInfo}>
                      {pokemon.height}
                      <br />
                      <span className={PokemonInfoSpan}>Height</span>
                    </p>
                    <p className={PokemonInfo}>
                      {pokemon.weight}
                      <br />
                      <span className={PokemonInfoSpan}>Weight</span>
                    </p>
                    <p className={PokemonInfo}>
                      {pokemon.stats.find((s) => s.stat.name === "speed")?.base_stat ?? "N/A"}
                      <br />
                      <span className={PokemonInfoSpan}>Speed</span>
                    </p>
          </div>
          <div className="bg-white p-5 lg:p-10 rounded-3xl text-[#282828] mb-5 ">
              <h3 className="text-[#304594] text-1xl font-bold uppercase text-center lg:text-left mb-2">Abilities</h3>
              <div className="flex flex-col lg:flex-row gap-4 text-center">
                {pokemon.abilities.map((a) => (
                  <p className="bg-[#e4e6ef] w-auto  py-3 px-5 rounded-full font-medium text-[#304594]" key={a.ability.name}>
                    {a.ability.name} {a.is_hidden ? "(Hidden)" : ""}
                  </p>
                ))}
              </div>
          </div>
          <div className="bg-white p-5 lg:p-10 rounded-3xl text-[#282828] mb-5 ">
              <h3 className="text-[#304594] text-1xl font-bold uppercase text-center lg:text-left mb-2">Types</h3>
              <div className="flex flex-col lg:flex-row gap-4 text-center lg:text-left mb-2">
                {pokemon.types.map((a) => (
                  <p className="bg-[#e4e6ef] w-auto py-3 px-5 rounded-full font-medium text-[#304594]" key={a.type.name}>
                   {a.type.name}
                  </p>
                ))}
              </div>
          </div>
          <div className="bg-white p-5 lg:p-10 rounded-3xl text-[#282828] mb-5 ">
              <h3 className="text-[#304594] text-1xl font-bold uppercase text-left mb-2">Stats</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 text-left">
                {pokemon.stats.map((s) => (
                  <p className={PokemonInfo}>
                    <span className={PokemonInfoSpan}>{s.stat.name}: </span> {s.base_stat}
                  </p>
                ))}
              </div>
          </div>
          <div className="bg-white p-5 lg:p-10 rounded-3xl text-[#282828] mb-5 ">
              <h3 className="text-[#304594] text-1xl font-bold uppercase text-center lg:text-left  mb-2">Moves</h3>
              <div className="flex flex-col lg:flex-row gap-4 text-center lg:text-left mb-2">
                  <p className="font-regular text-[#282828]">
                   {pokemon.moves.slice(0,20).map((m) => m.move.name).join(" | ")}
                  </p>
              </div>
              <p className="text-left font-bold">showing 20 moves</p>
          </div>
          <div className="bg-white p-5 lg:p-10 rounded-3xl text-[#282828] mb-5 ">
              <h3 className="text-[#304594] text-1xl font-bold uppercase text-center lg:text-left  mb-2">Held Items</h3>
              <div className="flex flex-col lg:flex-row gap-4 text-center lg:text-left mb-2">
                  <p className="font-regular text-[#282828]">
                   {
                    pokemon.held_items.length ? pokemon.held_items.map((item) => item.item.name).join(" | ") : 'This pokemon have no held item'
                   }
                  </p>
              </div>
          </div>
          <div className="bg-white p-5 lg:p-10 rounded-3xl text-[#282828] mb-5 ">
              <h3 className="text-[#304594] text-1xl font-bold uppercase text-center lg:text-left  mb-2">Sprites</h3>
              <div className="grid grid-cols-4 lg:grid-cols-6 gap-4 text-center lg:text-left mb-2">
                  {Object.values(pokemon.sprites)
                    .filter((s) => typeof s === "string" && s)
                    .map((sprite, index) => (
                      <img
                        key={index}
                        src={sprite as string}
                        alt={`${pokemon.name}-sprite-${index}`}
                        className="w-20 h-20 object-contain bg-[#e4e6ef] p-2 rounded"
                      />
                    ))}
              </div>
          </div>
          <button
        onClick={() => navigate(-1)}
        className="bg-[#e4e6ef] py-3 px-10 flex-row rounded-full font-medium text-1xl text-[#304594] hover:bg-[#304594] hover:text-[#e4e6ef] cursor-pointer"
      >Go Back
      </button>
          </div>
          </div>
    </section>
  );
};
