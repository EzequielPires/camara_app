import {TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header, HeaderTitle } from "./styles";
import { Feather } from "@expo/vector-icons";
import theme from "../../styles/theme";

export function HeaderPage({title}: {title: string}) {
    const navigation = useNavigation();
    return (
        <Header>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ height: 48, flexDirection: 'row', alignItems: 'center' }}>
                    <Feather
                        name="chevron-left"
                        size={24}
                        color={theme.colors.light}
                    />
                    <HeaderTitle>{title}</HeaderTitle>
                </TouchableOpacity>
        </Header>
    )
}