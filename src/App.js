import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Import Screens
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import AddScreen from  "./src/screens/AddScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
// Import Icons
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';

function HomeView() {
  return (
    <View>
    <HomeScreen />
    </View>
  );
}

function SearchView(){
  return(
    <SearchScreen/>
    )
  }
  
  function AddView(){
    return(
      <AddScreen/>
      )
    }
    
  function ProfileView() {
      return (
        <ProfileScreen />
      );
    }
    const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeView} 
        options={{
          title: "",
          tabBarIcon: ({focused}) => (
              focused === true ? <AntDesign name="home" size={24} color="black" /> : <AntDesign name="home" size={24} color="gray" />
          )
        }}
        />
        <Tab.Screen name="Search" component={SearchView} 
        options={{
          title: "",
          tabBarIcon: ({focused}) =>(
            focused === true ? <FontAwesome name="search" size={24} color="black" /> : <FontAwesome name="search" size={24} color="gray" />
          )
        }}
        />
        <Tab.Screen name="Add" component={AddView}
        options={{
          title: "",
          tabBarIcon: ({focused}) =>(
            focused === true ? <Ionicons name="add-circle-outline" size={24} color="black" /> : <Ionicons name="add-circle-outline" size={24} color="gray" />
          )
        }}
        />
        <Tab.Screen name="Profile" component={ProfileView}
           options={{
            title: "",
            tabBarIcon: ({focused}) =>(
              focused === true ? <Ionicons name="person-circle-sharp" size={24} color="black" /> : <Ionicons name="person-circle-sharp" size={24} color="gray" />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
