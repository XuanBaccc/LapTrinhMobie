import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

const insights = [
  { id: '1', title: 'Scan new', subtitle: 'Scanned 483', icon: 'scan', color: '#EEF2FF' },
  { id: '2', title: 'Counterfeits', subtitle: 'Counterfeited 32', icon: 'warning', color: '#FFEDE6' },
  { id: '3', title: 'Success', subtitle: 'Checkouts 8', icon: 'checkmark-circle', color: '#E9FBEF' },
  { id: '4', title: 'Directory', subtitle: 'History 26', icon: 'calendar', color: '#E6F3FF' },
];

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Xin chào 👋</Text>
          <Text style={{ fontSize: 20 }}>Nguyễn Xuân Bắc</Text>
        </View>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={{ width: 50, height: 50, borderRadius: 25 }} />
      </View>
      <Text style={{ marginTop: 20, fontSize: 18, fontWeight: 'bold' }}>Your Insights</Text>
      <FlatList
        data={insights}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ flex: 1, margin: 10, backgroundColor: item.color, padding: 20, borderRadius: 15, alignItems: 'center' }}
            onPress={() => item.id === '1' && navigation.navigate('Scan')}
          >
            <Ionicons name={item.icon} size={32} color={'#666'} />
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>{item.title}</Text>
            <Text style={{ fontSize: 12, color: '#666', marginTop: 5 }}>{item.subtitle}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const ScanScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FAF3EB', justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity style={{ position: 'absolute', top: 50, left: 20, zIndex: 10 }} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>
      <Image source={{ uri: 'https://s3-alpha-sig.figma.com/img/95fa/878b/d5bc6b7e5e42324b3bb5c2a6b4e4bf3b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g14OewxvTQ7sOp7HyL7zAeoO32X4dS8W02KDWPXO5OHktHiSJrjrPXncjtRR5~tO128NwQTy2xGa04n6gMDijwtmGKaVBXNbfWeA4JpxwOBlCX9BTDZVwYTRK7mnKqG4mnScftoGTm~Is1wO2e9zuuGI4kvjI9YX5GM0aa4wGH2LtURfZJwC~ST3jGy6htyrSSYkBkgt5VFMkrXSrkefZ2Xc4TbCAFNdMLpSdaUbZ1Bf9wy9zXtZHi58C9Jju~11QL9uh7bBCCNTJPD42bIf0SgAN86QcMEMFyDy8WQLydZPN67-7OYM8tkxRoPyvwBxGFTlibY9QdhbzNJsoqYYLA__' }} style={{ width: "100%", height: "100%" }} />
      <View style={{ position: 'absolute', bottom: 50, backgroundColor: '#fff', padding: 15, borderRadius: 15, flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri: 'https://s3-alpha-sig.figma.com/img/95fa/878b/d5bc6b7e5e42324b3bb5c2a6b4e4bf3b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g14OewxvTQ7sOp7HyL7zAeoO32X4dS8W02KDWPXO5OHktHiSJrjrPXncjtRR5~tO128NwQTy2xGa04n6gMDijwtmGKaVBXNbfWeA4JpxwOBlCX9BTDZVwYTRK7mnKqG4mnScftoGTm~Is1wO2e9zuuGI4kvjI9YX5GM0aa4wGH2LtURfZJwC~ST3jGy6htyrSSYkBkgt5VFMkrXSrkefZ2Xc4TbCAFNdMLpSdaUbZ1Bf9wy9zXtZHi58C9Jju~11QL9uh7bBCCNTJPD42bIf0SgAN86QcMEMFyDy8WQLydZPN67-7OYM8tkxRoPyvwBxGFTlibY9QdhbzNJsoqYYLA__' }} style={{ width: 40, height: 40, borderRadius: 10, marginRight: 10 }} />
        <View>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Lauren's</Text>
          <Text style={{ fontSize: 14, color: '#666' }}>Orange Juice</Text>
        </View>
        <TouchableOpacity style={{ marginLeft: 20, backgroundColor: '#4A90E2', padding: 10, borderRadius: 10 }}>
          <Ionicons name="add" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
    <Tab.Screen name="Home" component={DashboardScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} /> }} />
    <Tab.Screen name="Notifications" component={DashboardScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name="notifications" size={24} color={color} />, 
    
  }} />
    <Tab.Screen name="Orders" component={DashboardScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name="clipboard" size={24} color={color} /> }} />
    <Tab.Screen name="History" component={DashboardScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name="time" size={24} color={color} /> }} />
    <Tab.Screen name="Cart" component={DashboardScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name="cart" size={24} color={color} /> }} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={HomeTabs} />
        <Stack.Screen name="Scan" component={ScanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
