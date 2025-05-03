import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { colors } from "@/styles/colors";
import * as SystemUI from "expo-system-ui";

export default function Layout() {
  const backgroundColor = colors.gray[950];
  SystemUI.setBackgroundColorAsync(backgroundColor);

  return (
    <>
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle="light-content"
      />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor },
        }}
      />
    </>
  );
}
