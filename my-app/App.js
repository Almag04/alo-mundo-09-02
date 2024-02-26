import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      style={styles.logo}
      source={{
        uri: "./assets/webdev.jpg",
       
      }}
      />
      <StatusBar style="auto" />
      <p></p>
      <Text>Alefe de Magalhães</Text>
      <Text>Web developer/designer</Text>
<br></br>
      <Text style={styles.text}>Olá! Meu nome é Alefe, na internet me chamo de Almag, <br></br> nasci na cidade de Pedreira SP e estudo programação no SENAI Jaguariúna.<br></br>
      Gosto de  jogos MOBA, RPG's de ação e Hack n' Slash, e de ouvir música,<br></br> sendo meu êneros preferidos Rock e Metal
            tenho a ambição de me tornar um programador profissonal <br></br>e irei me esforçar pra isso!
      </Text>
      <button><a href="https://github.com/Alefe06">Meu Github</a></button> <button><a href="https://almag04.github.io">Meu portfólio</a></button>
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    borderRadius: 150,
    width:300,
    height:300,
  },
  text:{
    textAlign: "center",
  },
});

