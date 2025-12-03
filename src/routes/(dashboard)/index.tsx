import useGetHello from "@/hooks/api/use-get-hello";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(dashboard)/")({
  component: DashboardIndex,
});

function DashboardIndex() {
  const { data } = useGetHello();
  return <div>{JSON.stringify(data, null, 2)}</div>;
}
