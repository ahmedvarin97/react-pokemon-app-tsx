import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { PokemonClient, type Pokemon } from "pokenode-ts";
import { useDebounce } from "react-use";

export type DataContextType = {
  pokemonData: Pokemon[];
  loading: boolean;
  error: string | null;
  page: number;
  count: number;
  handlePageChange: (value: number) => void;
  handleCountChange: (value: number) => void;
  search: string;
  handleSearchChange: (value: string) => void;
};

export const DataCenter = createContext<DataContextType | null>(null);

export const DataSource: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // pagination
  const [count, setCount] = useState<number>(8);
  const [page, setPage] = useState<number>(1);

  // search
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  useDebounce(() => setDebouncedSearch(search), 400, [search]);

  const handleCountChange = (value: number) => {
    setCount(value);
    setPage(1); // reset when page size changes
  };

  const handlePageChange = (value: number) => {
    setPage(value);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  useEffect(() => {
    const api = new PokemonClient();

    const fetchExactOrSubstring = async (q: string) => {
      // 1) Try exact match first
      try {
        const exact = await api.getPokemonByName(q);
        setPokemonData([exact]);
        setError(null);
        return;
      } catch {
        // ignore and try substring
      }

      // 2) Substring search across full dex
      // PokéAPI supports up to ~1300 mons; we grab the full index once per query
      const all = await api.listPokemons(0, 2000); // big enough to cover all
      const matches = all.results
        .filter((p) => p.name.includes(q))
        .slice(0, count); // limit how many details we fetch

      if (matches.length === 0) {
        setPokemonData([]);
        setError("No Pokémon found");
        return;
      }

      const details = await Promise.all(
        matches.map((p) => api.getPokemonByName(p.name))
      );
      setPokemonData(details);
      setError(null);
    };

    const fetchPage = async () => {
      const offset = (page - 1) * count;
      const list = await api.listPokemons(offset, count);
      const details = await Promise.all(
        list.results.map((p) => api.getPokemonByName(p.name))
      );
      setPokemonData(details);
      setError(null);
    };

    const run = async () => {
      try {
        setLoading(true);
        const q = debouncedSearch.trim().toLowerCase();

        if (q) {
          // search mode: ignore pagination
          await fetchExactOrSubstring(q);
        } else {
          // normal paginated mode
          await fetchPage();
        }
      } catch (err) {
        console.error(err);
        setPokemonData([]);
        setError("Failed to fetch Pokémon data");
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [page, count, debouncedSearch]);

  return (
    <DataCenter.Provider
      value={{
        pokemonData,
        loading,
        error,
        page,
        count,
        handlePageChange,
        handleCountChange,
        search,
        handleSearchChange,
      }}
    >
      {children}
    </DataCenter.Provider>
  );
};

export const useCenterData = () => {
  const context = useContext(DataCenter);
  if (!context) throw new Error("useCenterData must be used within DataSource");
  return context;
};
