import { TextInput, View, Text } from "react-native"
import { styles } from "./styles"


interface IProps {
    title: string
}

export const InputWithTitle = ({title} : IProps) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
                style={styles.input}
                placeholder="Title..."
            />
        </View>
    )
}