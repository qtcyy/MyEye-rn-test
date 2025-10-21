/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import React, { useMemo, useState } from 'react';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { LiquidGlassBottomNav } from './src/components/LiquidGlassBottomNav';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  const isDarkMode = useColorScheme() === 'dark';
  const [activeTab, setActiveTab] = useState(tabConfig[0].key);
  const activeTabContent = useMemo(
    () => tabConfig.find(tab => tab.key === activeTab),
    [activeTab],
  );
  const primaryTextColor = isDarkMode ? '#F8FAFC' : '#111827';
  const secondaryTextColor = isDarkMode ? 'rgba(226, 232, 240, 0.75)' : 'rgba(55, 65, 81, 0.9)';
  const kickerColor = isDarkMode ? 'rgba(148, 163, 184, 0.85)' : 'rgba(31, 41, 55, 0.65)';
  const backgroundColor = isDarkMode ? '#020617' : '#F9FAFB';

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: safeAreaInsets.top + 16,
          paddingBottom: safeAreaInsets.bottom ? 0 : 16,
          backgroundColor,
        },
      ]}
    >
      <View style={styles.screen}>
        <Text style={[styles.screenKicker, { color: kickerColor }]}>LiquidGlass demo</Text>
        <Text style={[styles.screenTitle, { color: primaryTextColor }]}>
          {activeTabContent?.label}
        </Text>
        <Text style={[styles.screenSubtitle, { color: secondaryTextColor }]}>
          {activeTabContent?.description}
        </Text>
        <View style={styles.cardGroup}>
          {activeTabContent?.highlights.map(item => (
            <View key={item.title} style={[styles.card, { backgroundColor: item.tint }]}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardCopy}>{item.copy}</Text>
            </View>
          ))}
        </View>
      </View>
      <LiquidGlassBottomNav
        tabs={tabConfig}
        activeKey={activeTab}
        onTabPress={setActiveTab}
        style={styles.bottomNav}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  screen: {
    gap: 16,
  },
  screenKicker: {
    fontSize: 12,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  screenTitle: {
    fontSize: 34,
    fontWeight: '700',
  },
  screenSubtitle: {
    fontSize: 16,
    lineHeight: 22,
  },
  cardGroup: {
    gap: 12,
  },
  card: {
    borderRadius: 18,
    padding: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 6,
  },
  cardCopy: {
    fontSize: 14,
    lineHeight: 20,
    color: 'rgba(31, 41, 55, 0.75)',
  },
  bottomNav: {
    paddingHorizontal: 0,
  },
});

export default App;

type TabHighlight = {
  title: string;
  copy: string;
  tint: string;
};

type TabConfig = {
  key: string;
  label: string;
  icon: string;
  description: string;
  highlights: TabHighlight[];
};

const tabConfig: TabConfig[] = [
  {
    key: 'discover',
    label: 'Discover',
    icon: '🔍',
    description:
      'Explore curated monitoring profiles with real‑time insights. Tap around to see how the glass morphs with the scene behind it.',
    highlights: [
      {
        title: 'Smart Streams',
        copy: 'Follow adaptive feeds tailored to your environment and preferences.',
        tint: '#DBEAFE',
      },
      {
        title: 'Nearby Signals',
        copy: 'Surface context-aware alerts from devices detected in your vicinity.',
        tint: '#E0E7FF',
      },
    ],
  },
  {
    key: 'activity',
    label: 'Activity',
    icon: '📈',
    description:
      'Track optics usage, session intensity, and visual ergonomics in a single glance.',
    highlights: [
      {
        title: 'Daily Recap',
        copy: 'Review time-on-screen, focus breaks, and comfort scoring for today.',
        tint: '#FEF3C7',
      },
      {
        title: 'Trend Forecast',
        copy: 'See predictive modeling for fatigue and discover balancing suggestions.',
        tint: '#FDE68A',
      },
    ],
  },
  {
    key: 'profile',
    label: 'Profile',
    icon: '🧠',
    description:
      'Fine-tune sensory overlays, accessibility presets, and adaptive lighting routines.',
    highlights: [
      {
        title: 'Visual Goals',
        copy: 'Set personalized focus targets that guide auto-calibration during the day.',
        tint: '#F5D0FE',
      },
      {
        title: 'Assistive Modes',
        copy: 'Toggle magnification, contrast boosts, and voice cues with quick actions.',
        tint: '#FBCFE8',
      },
    ],
  },
];
