import { createTheme, NextUIProvider } from "@nextui-org/react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Balance } from "./components/Balance/Balance";

const darkTheme = createTheme({
  type: "dark",
});
const queryClient = new QueryClient();

function App() {
  return (
    <NextUIProvider theme={darkTheme}>
      <QueryClientProvider client={queryClient}>
        <Balance />
      </QueryClientProvider>
    </NextUIProvider>
  );
}

export default App;
