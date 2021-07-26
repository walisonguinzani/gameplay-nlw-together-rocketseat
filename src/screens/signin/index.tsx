import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar
} from 'react-native';

import { ButtonIcon } from '../../components/buttonicon';
import IlustrationImg from '../../assets/illustration.png';
import { styles } from './style';

export function Signin() {


  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Image
        source={IlustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>

        <Text style={styles.title}>
          Orgaize {`\n`}
          suas jogatinas{`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon />

      </View>
    </View>
  );
}