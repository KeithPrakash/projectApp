import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar, View, Text, StyleSheet, ActivityIndicator } from "react-native";
 import { WebView } from "react-native-webview";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import {CircularProgress} from "@mui/material";
import * as Progress from "react-native-progress";

const App = () => {
  const [showProgress, setShowProgress] = useState(true);
  const [showWebview, setShowWebview] = useState(false);

  useEffect(() => {
    // Simulating an API call or any other loading process
    setTimeout(() => {
      setShowProgress(false);
      setShowWebview(true);
      SplashScreen.hideAsync();
    }, 1000);
  }, []);
  const RenderProgress = () => {
    return (
      <View style={styles.progressContainer}>
        <ActivityIndicator
          color="#009688"
          size="large"
          style={styles.activityIndicatorStyle}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {showProgress && RenderProgress()}
      {showWebview && (
        <WebView
          source={{ uri: "https://www.pettagama.lk/" }}
          style={styles.webview}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  progressContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  webview: {
    flex: 1,
  },
  activityIndicatorStyle: {
    flex: 1,
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
  },
});

export default App;
