import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "./theme-provider";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import { store } from "@/redux/store";

const queryClient = new QueryClient();
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function Providers() {
  return (
    <ThemeProvider>
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </ReduxProvider>
    </ThemeProvider>
  );
}
