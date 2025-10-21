import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type HomeScreenProps = {
  onExplorePress: () => void;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ onExplorePress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>欢迎回来 👋</Text>
      <Text style={styles.body}>
        这是一个使用 react-native-bottom-tabs 构建的原生底部导航示例。标签页由原生组件驱动，支持液态玻璃等系统动效。
      </Text>
      <Pressable onPress={onExplorePress} style={({ pressed }) => [styles.ctaButton, pressed && styles.ctaButtonPressed]}>
        <Text style={styles.ctaText}>前往探索标签</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
    lineHeight: 22,
    color: '#4C5667',
    marginBottom: 32,
  },
  ctaButton: {
    alignSelf: 'flex-start',
    borderRadius: 24,
    backgroundColor: '#0F62FE',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  ctaButtonPressed: {
    opacity: 0.85,
  },
  ctaText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default HomeScreen;
