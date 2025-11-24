import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(dashboard)/")({
  component: DashboardIndex,
});

function DashboardIndex() {
  return <>Dashboard Index Page</>;
}
