import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import BottomTabs from 'react-native-bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import DiscoverScreen from './src/screens/DiscoverScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

type TabRoute = {
  key: 'home' | 'discover' | 'profile';
  title: string;
  badge?: string;
};

const TAB_ROUTES: TabRoute[] = [
  { key: 'home', title: '首页' },
  { key: 'discover', title: '探索', badge: '3' },
  { key: 'profile', title: '我的' },
];

const App = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(TAB_ROUTES);

  const handleIndexChange = React.useCallback((nextIndex: number) => {
    setIndex(nextIndex);
  }, []);

  const renderScene = React.useCallback(
    ({
      route,
      jumpTo,
    }: {
      route: TabRoute;
      jumpTo: (key: TabRoute['key']) => void;
    }) => {
      switch (route.key) {
        case 'home':
          return <HomeScreen onExplorePress={() => jumpTo('discover')} />;
        case 'discover':
          return <DiscoverScreen onProfilePress={() => jumpTo('profile')} />;
        case 'profile':
          return <ProfileScreen />;
        default:
          return null;
      }
    },
    [],
  );

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <BottomTabs
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={handleIndexChange}
        tabBarActiveTintColor={isDarkMode ? '#4DA3FF' : '#0F62FE'}
        tabBarInactiveTintColor={isDarkMode ? '#9299A2' : '#6C6E78'}
        tabBarStyle={{ backgroundColor: isDarkMode ? '#141417' : '#FFFFFF' }}
        rippleColor={isDarkMode ? 'rgba(77, 163, 255, 0.16)' : 'rgba(15, 98, 254, 0.14)'}
        hapticFeedbackEnabled
        minimizeBehavior="never"
      />
    </SafeAreaProvider>
  );
};

export default App;
