import { useRouter } from "expo-rounter";
import {Button, View } from "react-native";

export default function StackHome() {
    const rounter = useRouter()
    return(
         <View>
        tela inicial
       <Button
       title= "ir para detalhes"
       onPress= {() => router.push('/navigation/stack/detail')}
    />
    </View>
    );
}