import useSWR from "swr";

export interface Service {
  id: number;
  title: string;
  description: string;
  slug: string;
  image?: { url: string };
  featured: boolean;
}

interface APIResponse {
  data: Service[];
}

const fetcher = async (url: string): Promise<Service[]> => {
  const res = await fetch(url);
  const json: APIResponse = await res.json();
  return json.data;
};

export function useAllServices() {
  const { data, error, isLoading } = useSWR<Service[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/services?populate=image`,
    fetcher
  );

  return {
    services: data,
    isLoading,
    error,
  };
}
