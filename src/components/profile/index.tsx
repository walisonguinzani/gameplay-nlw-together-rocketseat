import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

export function Profile(){
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Ola
                    </Text>

                    <Text style={styles.username}>
                        Walison
                    </Text>
                </View>
                    <Text style={styles.message}>
                        Hoje é dia de vitória
                    </Text>
            </View>
        </View>
    )
}