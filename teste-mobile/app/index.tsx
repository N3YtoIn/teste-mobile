import { Login } from "@/src/screens/login/login";
import { Stack } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function LoginScreen (){
    return (
        <>
            <Stack.Screen
                options={{
                    header: () => {
                        return (
                            <View style={{
                                width: '100%',
                                height: 80,
                                justifyContent: 'center',
                                alignItems: "flex-start",
                                padding: 12
                            }}>
                                <TouchableOpacity>
                                    <Ionicons name="chevron-back-circle" size={70} color="#310072"/>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                }}
            />
            <Login/>
        </>
    ) 
}