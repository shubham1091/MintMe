import { getData } from "@/utils/services";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";


export default function Page() {
  const router = useRouter();
   const checkUserAuth = async () => {
    const result = await getData("login")

    if(!result){
      router.push("/login")
    }
  };

  useEffect(() => {
    checkUserAuth();
  }, []);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
