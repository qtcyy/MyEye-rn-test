import React from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ProfileScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top + 24, backgroundColor: isDarkMode ? '#1C1C1E' : '#FFFFFF' },
      ]}
    >
      <View style={[styles.avatar, { backgroundColor: isDarkMode ? '#4DA3FF' : '#0F62FE' }]}>
        <Text style={styles.avatarLabel}>ME</Text>
      </View>
      <Text style={[styles.name, { color: isDarkMode ? '#F1F3F6' : '#0B0D17' }]}>Coder</Text>
      <Text style={[styles.subtitle, { color: isDarkMode ? '#BDC5D1' : '#5A6576' }]}>
        使用原生底部导航获取丝滑的动效体验。
      </Text>

      <View style={[styles.section, { backgroundColor: isDarkMode ? '#2A2D33' : '#F4F6F8' }]}>
        <Text style={[styles.sectionTitle, { color: isDarkMode ? '#F1F3F6' : '#0B0D17' }]}>最近的成就</Text>
        <Text style={[styles.sectionBody, { color: isDarkMode ? '#D6DEEB' : '#434E5C' }]}>
          · 完成了底部导航的原型搭建{'\n'}· 集成原生标签页获取液态玻璃动效
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatarLabel: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 6,
  },
  section: {
    width: '100%',
    marginTop: 32,
    padding: 20,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 8,
  },
  sectionBody: {
    fontSize: 15,
    lineHeight: 22,
  },
});

export default ProfileScreen;
