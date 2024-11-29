import Colors from "@/constants/Colors";
import { client } from "@/utils/KindeConfig";
import { storeData } from "@/utils/services";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {};

const LoginScreen = (props: Props) => {
  const router = useRouter();

  const handleLogin = async () => {
    console.log("handleLogin");
    const token = await client.login();

    if (token) {
      await storeData("login", "true")
      router.replace("/")
    }

    console.log({
      issuer: process.env.EXPO_PUBLIC_KINDE_ISSUER_URL!,
      callback: process.env.EXPO_PUBLIC_KINDE_POST_CALLBACK_URL!,
      client: process.env.EXPO_PUBLIC_KINDE_CLIENT_ID!,
      logout: process.env.EXPO_PUBLIC_KINDE_POST_LOGOUT_REDIRECT_URL!,
    });
  };

  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <Image
        source="https://picsum.photos/seed/696/3000/2000"
        style={styles.bgImage}
      />
      <View
        style={{
          backgroundColor: Colors.PRIMARY,
          width: "100%",
          height: "100%",
          padding: 20,
          marginTop: -30,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
            color: Colors.WHITE,
          }}
        >
          Personal budget planner
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            color: Colors.WHITE,
            marginTop: 20,
          }}
        >
          Stay on track, event by event: your personal budget planner app
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={{ textAlign: "center", color: Colors.PRIMARY }}>
            Login/ Signup
          </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 13, color: Colors.WHITE, marginTop: 10 }}>
          * By login/signup you will agree to our Terms and Conditions
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  bgImage: {
    width: 200,
    height: 400,
    marginTop: 30,
    borderWidth: 5,
    borderRadius: 20,
    borderColor: Colors.BLACK,
  },
  button: {
    backgroundColor: Colors.WHITE,
    padding: 15,
    paddingHorizontal: 5,
    borderRadius: 99,
    marginTop: 20,
  },
});
