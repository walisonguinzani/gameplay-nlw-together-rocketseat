import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    user: {
        flexDirection: 'row',
    },
    greeting: {
        fontFamily: theme.fonts.text500,
        fontSize: 24,
        color: theme.colors.heading,
        marginRight: 5,
    },
    username: {

    },
    message: {

    }

});