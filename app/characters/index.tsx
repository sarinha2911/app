import React from  "react";
import { useRouter } from "expo-router";
import { Button, View  } from "react-native"

export default function HomeScreen() {
    const router = useRouter();
    return(
        <View>
        <Button> title= "Stack navigation"
        onPress={() => router.push('/navigation/stack')}/>
        <Button> title= "Tabs navegation" onPress={}/>
        onPress= {() => router.push('/navigation/stack')}/>
        <Button> title= "Drawer navegation" onPress=()/>
         onPress={() => router.push('/navigation/stack')}/>
            </View>
    );
}