import React, { useState } from 'react';
import { 
  View,
  Text,
  Image,
 } from 'react-native';
import IlustrationImg from '../../assets/illustration.png';
import { styles } from './style';

export function Signin() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
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
      </View>
    </View>
  );
}