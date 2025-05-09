import { useQuery } from "@tanstack/react-query";
import getIP from "../queries/getIP";

export default function useIP() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["ip"],
    queryFn: async () => await getIP(),
  });

  if (isLoading || error) return null;

  return data;
}
