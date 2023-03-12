import { createTheme, NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./components/Layout/Layout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { EthersProvider } from "./components/EthersProvider/EthersProvider";
import { MetaMaskProvider } from "metamask-react";

const darkTheme = createTheme({
  type: "dark",
});
const queryClient = new QueryClient();

function App() {
  return (
    <MetaMaskProvider>
      <NextUIProvider theme={darkTheme}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <EthersProvider>
            <Layout />
          </EthersProvider>
        </QueryClientProvider>
      </NextUIProvider>
    </MetaMaskProvider>
  );
}

export default App;
