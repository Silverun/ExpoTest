import { View, Text, Button } from "react-native";
import auth from "@react-native-firebase/auth";
import { StyleSheet } from "react-native";

const ProfileScreen = () => {
  const user = auth().currentUser;

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome back</Text>
      <Text style={styles.emailText}>{user?.email}</Text>
      <View style={styles.signOutButtonContainer}>
        <Button title="Sign out" onPress={() => auth().signOut()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  emailText: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
  },
  signOutButtonContainer: {
    backgroundColor: "#101a11",
    padding: 2,
    borderRadius: 5,
  },
});

export default ProfileScreen;
