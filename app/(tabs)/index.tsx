import React from "react";
import { useRouter } from "expo-router";
import {Button, Text, View} from "react-native";

export default function HomeScreen() {
    const router = useRouter();
    return (
        <view>
            <text> teste</text>

            <button
            title="personagens"
            onPress={()  => router.push('/characters/')}
                />    
       </view>
    )
}