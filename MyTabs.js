import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  Platform,
  View,
  Button,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { WebView } from "react-native-webview";
import Spinner from "react-native-loading-spinner-overlay";
const HOME_URL = "https://www.petmemoir.store";

const PetMemoirWebView = () => {
  const [url, setUrl] = useState(HOME_URL);

  const changeURL = (newURL) => {
    setUrl(newURL);
  };

  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: url }} />
      <View style={styles.bottomBar}>
        <Button title="일기" onPress={() => changeURL(`${HOME_URL}/diy`)} />
        <Button title="지도" onPress={() => changeURL(`${HOME_URL}/map`)} />
        <Button title="홈" onPress={() => changeURL(HOME_URL)} />
        <Button
          title="정기구독"
          onPress={() => changeURL(`${HOME_URL}/quick`)}
        />
        <Button
          title="고객센터"
          onPress={() => changeURL(`${HOME_URL}/service`)}
        />
      </View>
    </SafeAreaView>
  );
};

export default PetMemoirWebView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  webView: {
    flex: 1,
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  button: {
    padding: 10,
    backgroundColor: '#DDDDDD',
  },
});
