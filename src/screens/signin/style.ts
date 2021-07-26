import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
    },
    image: {
        width: '100%',
        height: 360,

    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40
    }
});