import { useQuery } from "@tanstack/react-query";
import getHello from "@/lib/api/endpoints/hello";

export default function useGetHello() {
  return useQuery({
    queryKey: ["hello"],
    queryFn: getHello,
  });
}
