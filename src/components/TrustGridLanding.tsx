import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  SafeAreaView
} from "react-native";
import { colors } from "../theme/colors/colors";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  RPMAvatar: undefined;
};

export default function TrustGridLanding() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleContinue = () => {
    console.log("🚀 Continue clicked");
    navigation.navigate("RPMAvatar"); // 👈 Goes to WebView deep link screen
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>

        {/* TOP - READY PLAYER ME */}
        <Image
          source={require("../../assets/images/Ready-player-icon.png")}
          style={styles.rpmTopIcon}
        />

        {/* Subtitle */}
        <Text style={styles.sub}>
          Create your virtual identity and begin your journey.
        </Text>

        {/* INFO BOX */}
        <View style={styles.contextBox}>
          <Text style={styles.contextText}>
            • Build a personalized avatar that represents you{"\n"}
            • Use it across the TrustGrid experience{"\n"}
            • Your identity stays under your control
          </Text>
        </View>

        {/* SYNQ LOGO */}
        <Image
          source={require("../../assets/images/synq-logo.png")}
          style={styles.mainBottomLogo}
        />

        {/* Button */}
        <Pressable style={styles.buttonBottom} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>

        {/* FOOTER */}
        <View style={styles.poweredRow}>
          <Text style={styles.poweredText}>Powered by</Text>
          <Image
            source={require("../../assets/images/TG-logo.png")}
            style={styles.poweredLogo}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: "center",
  },
  rpmTopIcon: {
    width: 360,
    height: 320,
    resizeMode: "contain",
    marginBottom: 20,
  },
  sub: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.textMain,
    width: "90%",
    textAlign: "center",
    marginBottom: 20,
  },
  contextBox: {
    backgroundColor: colors.surfaceElevated,
    paddingVertical: 22,
    paddingHorizontal: 18,
    borderRadius: 12,
    width: "100%",
    marginBottom: 35,
  },
  contextText: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.textSecondary,
  },
  mainBottomLogo: {
    width: 200,
    height: 100,
    resizeMode: "contain",
    marginBottom: 25,
  },
  buttonBottom: {
    backgroundColor: colors.primary,
    width: "100%",
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  poweredRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
  },
  poweredText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textSecondary,
    marginRight: 6,
  },
  poweredLogo: {
    width: 110,
    height: 24,
    resizeMode: "contain",
  },
});
