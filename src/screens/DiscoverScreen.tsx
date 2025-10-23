import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useBottomTabBarHeight } from 'react-native-bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

type DiscoverScreenProps = {
  onProfilePress: () => void;
};

const suggestions = [
  {
    id: 'daily',
    title: '今日亮点',
    description: '根据你的偏好实时推荐的内容集合。',
  },
  {
    id: 'collections',
    title: '精选合集',
    description: '编辑精选的主题合集，带你快速入门。',
  },
  {
    id: 'nearby',
    title: '附近动态',
    description: '看看你身边正在发生的热门事件。',
  },
];

const DiscoverScreen: React.FC<DiscoverScreenProps> = ({ onProfilePress }) => {
  const bottomInset = useBottomTabBarHeight();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { paddingBottom: bottomInset + 24 },
        ]}
        contentInsetAdjustmentBehavior="automatic"
      >
        <Text style={styles.heading}>探索精彩内容</Text>
        <Text style={styles.subheading}>
          标签页之间的切换会使用系统原生的动效。
        </Text>

        {suggestions.map(item => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardBody}>{item.description}</Text>
          </View>
        ))}

        <Pressable
          onPress={onProfilePress}
          style={({ pressed }) => [
            styles.linkButton,
            pressed && styles.linkButtonPressed,
          ]}
        >
          <Text style={styles.linkText}>看看我的主页</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
    gap: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
  },
  subheading: {
    fontSize: 15,
    color: '#596780',
    marginBottom: 12,
  },
  card: {
    borderRadius: 20,
    backgroundColor: '#F4F6F8',
    padding: 20,
    gap: 8,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  cardBody: {
    fontSize: 14,
    lineHeight: 20,
    color: '#464F5B',
  },
  linkButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  linkButtonPressed: {
    opacity: 0.6,
  },
  linkText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#0F62FE',
  },
});

export default DiscoverScreen;
