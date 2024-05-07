import { StyleSheet, Text, Pressable, View } from "react-native";
import { useEffect } from "react";

import {
  WalletConnectModal,
  useWalletConnectModal,
} from "@walletconnect/modal-react-native";

const projectID = "2eabed2abc1d75170d0d140475632930";

const providerMetadata = {
  name: "GrowLimitLess",
  description: "A Unified Crypto Interface",
  url: "https://launch.growlimitless.app",
  icons: ["https://your-project-logo.com"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

export default function App() {
  const { isOpen, open, close, provider, isConnected, address } =
    useWalletConnectModal();
  
  const handleButtonPress = async () => {
    if (isConnected) {
      return provider?.disconnect();
    }

    return open();
  };

  return (
    <View style={styles.container}>
      <Text>Web3 WalletConnection Testing</Text>
      <Text>{isConnected ? address : "No Wallet Available"}</Text>
      <Pressable onPress={() => handleButtonPress()} style={{ marginTop: 56 }}>
        <Text>{isConnected ? "Disconnect" : "Connect"}</Text>
      </Pressable>

      <WalletConnectModal
        projectId={projectID}
        providerMetadata={providerMetadata}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
