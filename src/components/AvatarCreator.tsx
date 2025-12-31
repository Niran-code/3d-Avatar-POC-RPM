// src/screens/RPMAvatarScreen.tsx

import React, { useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";

export default function RPMAvatarScreen({ navigation }: { navigation: any }) {
  const [loading, setLoading] = useState(true);
  const URL = "https://synq-social.readyplayer.me/avatar";

  const onChange = (event: any) => {
    if (event.url.startsWith("trustgrid://")) {
      navigation.replace("NextMainAppScreen");
    }
  };

  return (
    <View style={styles.wrap}>
      {loading && (
        <View style={styles.loaderScreen}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}

      <WebView
        source={{ uri: URL }}
        onLoadEnd={() => setLoading(false)}
        onNavigationStateChange={onChange}
        style={styles.web}
        containerStyle={styles.web}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: "#000",
  },
  loaderScreen: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  web: {
    flex: 1,
    backgroundColor: "#000",
  },
});
