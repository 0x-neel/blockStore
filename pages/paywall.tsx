import { Box } from "@chakra-ui/react";
import React from "react";

export default function paywall() {
  return (
    <Box h='100vh' w='100vw'>
      {/* Show iframe and load url into it */}
      <iframe
        src="https://app.unlock-protocol.com/checkout?paywallConfig=%7B%22locks%22%3A%7B%220xc9c5ad79e13f0fd5a11001f84c4271feef92e806%22%3A%7B%22network%22%3A5%7D%7D%2C%22pessimistic%22%3Atrue%2C%22skipRecipient%22%3Atrue%2C%22redirectUri%22%3A%22https%3A%2F%2Fblock-store-zeta.vercel.app%2Fplay%22%2C%22persistentCheckout%22%3Afalse%2C%22referrer%22%3A%22%22%2C%22messageToSign%22%3A%22%22%2C%22hideSoldOut%22%3Afalse%7D"
        width="100%"
        height="100%"
      />
    </Box>
  );
}
