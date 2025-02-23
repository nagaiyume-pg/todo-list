import { StyleSheet, Text, View } from 'react-native';
import { NotoSansJP_700Bold, useFonts } from '@expo-google-fonts/noto-sans-jp';
import * as SplashScreen from 'expo-splash-screen';

interface HeaderProps {
    title: string;
}

export const Header = ({ title }: HeaderProps) => {
    let [fontsLoaded] = useFonts({
        NotoSansJP_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    } else {
        SplashScreen.hide();

        return (
            <View style={styles.container}>
                <Text style={[styles.title, { fontFamily: 'NotoSansJP_700Bold' }]}>
                    {title}
                </Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        display: 'flex',
        height: 50,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
    },
});
