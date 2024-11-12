// ** EXPO
import { Tabs } from 'expo-router';

// ** CONSTANTS
import { Colors } from '@/constants/colors';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary.main,
        headerShown: false,
      }}>
      {/*<Tabs.Screen*/}
      {/*  name="explore"*/}
      {/*  options={{*/}
      {/*    title: 'Explore',*/}
      {/*    tabBarIcon: ({ color, focused }) => (*/}
      {/*      <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />*/}
      {/*    ),*/}
      {/*  }}*/}
      {/*/>*/}
    </Tabs>
  );
};

export default TabLayout;
