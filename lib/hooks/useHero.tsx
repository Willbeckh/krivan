import useSWR from "swr";

interface HeroData {
  id: number;
  title: string;
  description: string;
  tagline?: string | null;
}

interface StrapiResponse {
  data: HeroData;
  meta: {};
}

const fetcher = async (url: string): Promise<HeroData> => {
  const res = await fetch(url);
  const json: StrapiResponse = await res.json();
  return json.data;
};

export function useHero() {
  const { data, error, isLoading } = useSWR<HeroData>(
    "http://localhost:1337/api/hero",
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    hero: data,
    isLoading,
    error,
  };
}
