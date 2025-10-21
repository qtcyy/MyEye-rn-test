import { LiquidGlassView, isLiquidGlassSupported } from '@callstack/liquid-glass';
import {
  Platform,
  PlatformColor,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  useColorScheme,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type TabItem = {
  key: string;
  label: string;
  icon: string;
};

type LiquidGlassBottomNavProps = {
  tabs: TabItem[];
  activeKey: string;
  onTabPress: (tabKey: string) => void;
  style?: StyleProp<ViewStyle>;
};

export function LiquidGlassBottomNav({
  tabs,
  activeKey,
  onTabPress,
  style,
}: LiquidGlassBottomNavProps) {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const secondaryTextColor =
    Platform.OS === 'ios'
      ? PlatformColor('secondaryLabelColor')
      : isDarkMode
        ? 'rgba(226, 232, 240, 0.85)'
        : 'rgba(31, 41, 55, 0.65)';
  const primaryTextColor =
    Platform.OS === 'ios'
      ? PlatformColor('labelColor')
      : isDarkMode
        ? '#F9FAFB'
        : '#111827';

  return (
    <View style={[styles.wrapper, { paddingBottom: Math.max(insets.bottom, 12) }, style]}>
      <LiquidGlassView
        interactive
        effect="regular"
        colorScheme="system"
        style={[
          styles.glass,
          !isLiquidGlassSupported &&
            (isDarkMode ? styles.glassFallbackDark : styles.glassFallbackLight),
          !isLiquidGlassSupported &&
            (isDarkMode ? styles.glassFallbackBorderDark : styles.glassFallbackBorderLight),
        ]}
      >
        <View style={styles.tabRow}>
          {tabs.map(tab => {
            const isActive = tab.key === activeKey;

            return (
              <Pressable
                key={tab.key}
                accessibilityLabel={tab.label}
                accessibilityState={{ selected: isActive }}
                onPress={() => onTabPress(tab.key)}
                style={[styles.tabItem, isActive && styles.activeTabItem]}
              >
                <Text
                  style={[
                    styles.tabIcon,
                    { color: secondaryTextColor },
                    isActive && { color: primaryTextColor },
                  ]}
                >
                  {tab.icon}
                </Text>
                <Text
                  style={[
                    styles.tabLabel,
                    { color: secondaryTextColor },
                    isActive && { color: primaryTextColor },
                  ]}
                >
                  {tab.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </LiquidGlassView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingHorizontal: 20,
  },
  glass: {
    borderRadius: 28,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  glassFallbackLight: {
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
  },
  glassFallbackDark: {
    backgroundColor: 'rgba(15, 23, 42, 0.65)',
  },
  glassFallbackBorderLight: {
    borderColor: 'rgba(120, 120, 120, 0.25)',
    borderWidth: StyleSheet.hairlineWidth,
  },
  glassFallbackBorderDark: {
    borderColor: 'rgba(148, 163, 184, 0.25)',
    borderWidth: StyleSheet.hairlineWidth,
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabItem: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 8,
    borderRadius: 18,
  },
  activeTabItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },
  tabIcon: {
    fontSize: 18,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
  },
});
