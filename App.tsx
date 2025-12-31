import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TrustGridLanding from "./src/components/TrustGridLanding";
import { colors } from "./src/theme/colors/colors";
import RPMAvatarScreen from "./src/components/AvatarCreator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        {/* Landing screen */}
        <Stack.Screen name="Landing" component={TrustGridLanding} />

        {/* Avatar WebView Screen */}
        <Stack.Screen name="RPMAvatar" component={RPMAvatarScreen} />

        {/* After avatar is created
            Replace name when you have next screen */}
        <Stack.Screen name="NextPageAfterAvatar" component={() => null} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
