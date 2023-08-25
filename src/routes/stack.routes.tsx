import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { News } from "../screens/News";
import { Bills } from "../screens/Bills";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="News" component={News} />
            <Stack.Screen name="Bills" component={Bills} />
        </Stack.Navigator>
    )
}