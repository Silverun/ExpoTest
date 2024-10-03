import Camera from "@/components/camera/Camera";
import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const MyLots = () => {
  const [showCamera, setShowCamera] = useState(false);

  const handleOpenCamera = () => {
    setShowCamera(true);
  };

  const handleCloseCamera = () => {
    setShowCamera(false);
  };

  return (
    <View style={styles.container}>
      {showCamera ? (
        <Camera onCloseCamera={handleCloseCamera} />
      ) : (
        <View style={styles.content}>
          <Text style={styles.title}>MyLots</Text>
          <Button title="Open Camera" onPress={handleOpenCamera} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default MyLots;
