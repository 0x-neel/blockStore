import type { AppProps } from "next/app";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import {
  createReactClient,
  LivepeerConfig,
  studioProvider,
} from "@livepeer/react";
import { WagmiConfig, createClient, configureChains, goerli } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from "connectkit";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { GeneralProvider } from "../context";
const alchemyId = "SH8NoQMHqmNkqexUapP5tVgv5KRQoFVx";

const { chains } = configureChains([goerli], [publicProvider()]);

const wagmiClient = createClient(
  getDefaultClient({
    appName: "Your App Name",
    alchemyId,
    chains,
  })
);

const client = createReactClient({
  provider: studioProvider({ apiKey: "29dd8c9d-4c21-40fd-86c0-fe7bcfec5d2d" }),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <ConnectKitProvider>
        <LivepeerConfig client={client}>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </LivepeerConfig>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
