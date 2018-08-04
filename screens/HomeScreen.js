import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Button
} from "react-native";
import { WebBrowser } from "expo";
import { MaterialIcons } from "@expo/vector-icons";
import { Text } from "../components/StyledText";

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Home",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <MaterialIcons name="menu" size={24} />
        </TouchableOpacity>
      )
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.half}>
          <Image source={require("../assets/images/home-img.png")} />
        </View>
        <View
          style={styles.half}
          contentContainerStyle={styles.contentContainer}
        >
          <Text>Welcoming You to Sharia</Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Text>
        </View>
        <Button title={"I'm So Ready!"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30,
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 30
  },
  half: {
    flex: 1
  }
});
