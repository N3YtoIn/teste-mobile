import { Text, View, TextInput } from "react-native"
import { styles } from "./style"
import { InputWithTitle } from "@/src/components/input-with-title/input-with-title"


export const Login = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Hello, Welcome Back</Text>
            <Text style={styles.description}>Happy to see you again, to use your account please login first. </Text>
            <InputWithTitle
                title="E-mail"
            />
            <InputWithTitle
                title="Senha"
            />
        </View>

        
    )
}