import {
  TabList,
  TabSlot,
  TabTrigger,
  Tabs,
  TabTriggerSlotProps,
} from 'expo-router/ui';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

type NavButtonProps = TabTriggerSlotProps & {
  icon: string;
};

const disabledItems = [
  { icon: '▦', label: 'Agenda' },
  { icon: '◉', label: 'Polls' },
  { icon: '♧', label: 'Groepen' },
  { icon: '◇', label: 'Groepsdoelen' },
  { icon: '◷', label: 'Statistieken' },
];

function NavButton({ children, icon, isFocused, ...props }: NavButtonProps) {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        styles.navButton,
        isDesktop
          ? styles.desktopNavButton
          : isTablet
            ? styles.tabletNavButton
            : styles.mobileNavButton,
        isFocused && styles.navButtonActive,
        pressed && styles.navButtonPressed,
      ]}>
      <Text style={[styles.navIcon, isFocused && styles.navIconActive]}>{icon}</Text>
      <Text numberOfLines={1} style={[styles.navLabel, isFocused && styles.navLabelActive]}>
        {children}
      </Text>
      {isDesktop && isFocused && <View style={styles.activeIndicator} />}
      {isTablet && isFocused && <View style={styles.tabletActiveIndicator} />}
    </Pressable>
  );
}

function DisabledNavItem({ icon, label }: (typeof disabledItems)[number]) {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  return (
    <View
      accessible
      accessibilityRole="text"
      accessibilityState={{ disabled: true }}
      style={[
        styles.navButton,
        isDesktop
          ? styles.desktopNavButton
          : isTablet
            ? styles.tabletNavButton
            : styles.mobileNavButton,
      ]}>
      <Text style={styles.navIcon}>{icon}</Text>
      <Text numberOfLines={1} style={styles.disabledNavLabel}>
        {label}
      </Text>
    </View>
  );
}

export default function AppTabs() {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;
  const isMobile = !isTablet && !isDesktop;

  return (
    <Tabs>
      <TabSlot
        style={[
          styles.tabSlot,
          isDesktop
            ? styles.desktopTabSlot
            : isTablet
              ? styles.tabletTabSlot
              : styles.mobileTabSlot,
        ]}
      />
      <TabList asChild>
        <View
          style={StyleSheet.flatten([
            styles.navigation,
            isDesktop
              ? styles.sidebar
              : isTablet
                ? styles.tabletNavigation
                : styles.mobileNavigation,
          ])}>
          {isDesktop ? (
            <View style={styles.brand}>
              <View style={styles.brandMark}>
                <Text style={styles.brandMarkText}>C</Text>
              </View>
              <View>
                <Text style={styles.brandName}>Crew</Text>
                <Text style={styles.brandTagline}>Samen wordt het een plan</Text>
              </View>
            </View>
          ) : isTablet ? (
            <View style={styles.tabletBrand}>
              <View style={styles.tabletBrandMark}>
                <Text style={styles.brandMarkText}>C</Text>
              </View>
              <View>
                <Text style={styles.tabletBrandName}>Crew</Text>
                <Text style={styles.tabletBrandTagline}>Samen plannen</Text>
              </View>
            </View>
          ) : null}

          {isDesktop && <Text style={styles.navSectionLabel}>JOUW CREW</Text>}
          <TabTrigger key="home" name="home" href="/" asChild>
            <NavButton icon="⌂">{isMobile ? 'Home' : 'Overzicht'}</NavButton>
          </TabTrigger>
          {(isDesktop ? disabledItems : [disabledItems[0], disabledItems[2]]).map((item) => (
            <DisabledNavItem key={item.label} {...item} />
          ))}
          {isDesktop && <View style={styles.sidebarSpacer} />}
          {isDesktop && <Text style={styles.navSectionLabel}>ONTDEK</Text>}
          <TabTrigger key="explore" name="explore" href="/explore" asChild>
            <NavButton icon="✧">{isMobile ? 'Ontdek' : 'Verkennen'}</NavButton>
          </TabTrigger>

          {isDesktop && (
            <View style={styles.sidebarFooter}>
              <View style={styles.footerAvatar}>
                <Text style={styles.footerAvatarText}>C</Text>
              </View>
              <View>
                <Text style={styles.footerTitle}>Jouw ruimte</Text>
                <Text style={styles.footerSubtitle}>Samen plannen, samen doen</Text>
              </View>
            </View>
          )}
        </View>
      </TabList>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabSlot: {
    height: '100%',
    flex: 1,
  },
  desktopTabSlot: {
    marginLeft: 260,
  },
  mobileTabSlot: {
    marginLeft: 0,
  },
  tabletTabSlot: {
    height: 'auto',
    marginLeft: 0,
    marginTop: 76,
  },
  navigation: {
    zIndex: 10,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 260,
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 20,
    backgroundColor: '#0A1728',
    borderRightWidth: 1,
    borderRightColor: '#192B40',
  },
  mobileNavigation: {
    position: 'absolute',
    bottom: 14,
    left: 14,
    right: 14,
    height: 72,
    paddingHorizontal: 8,
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#263950',
    backgroundColor: '#0D1B2D',
    shadowColor: '#000000',
    shadowOpacity: 0.28,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  tabletNavigation: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 76,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    gap: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#192B40',
    backgroundColor: '#0A1728',
  },
  tabletBrand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  tabletBrandMark: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#1C8DD5',
  },
  tabletBrandName: {
    color: '#F5F9FF',
    fontSize: 17,
    fontWeight: '800',
  },
  tabletBrandTagline: {
    color: '#8298B1',
    fontSize: 9,
    marginTop: 2,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 48,
    paddingHorizontal: 8,
  },
  brandMark: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: '#1C8DD5',
  },
  brandMarkText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
  },
  brandName: {
    color: '#F5F9FF',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
  brandTagline: {
    color: '#8298B1',
    fontSize: 11,
    marginTop: 2,
  },
  navSectionLabel: {
    color: '#637B96',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.4,
    marginTop: 12,
    marginBottom: 10,
    paddingHorizontal: 12,
  },
  navButton: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
  },
  desktopNavButton: {
    minHeight: 46,
    paddingHorizontal: 12,
    marginBottom: 4,
    gap: 13,
  },
  mobileNavButton: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 3,
    borderRadius: 15,
  },
  tabletNavButton: {
    minHeight: 44,
    flexDirection: 'row',
    paddingHorizontal: 9,
    gap: 6,
  },
  navButtonActive: {
    backgroundColor: '#132B43',
  },
  navButtonPressed: {
    opacity: 0.78,
  },
  navIcon: {
    color: '#8198B2',
    width: 22,
    textAlign: 'center',
    fontSize: 19,
  },
  navIconActive: {
    color: '#61C1FF',
  },
  navLabel: {
    color: '#9AAEC4',
    fontSize: 13,
    fontWeight: '600',
  },
  navLabelActive: {
    color: '#F3F8FF',
  },
  disabledNavLabel: {
    color: '#71869F',
    fontSize: 13,
    fontWeight: '500',
  },
  activeIndicator: {
    position: 'absolute',
    left: 0,
    top: 10,
    bottom: 10,
    width: 3,
    borderRadius: 3,
    backgroundColor: '#61C1FF',
  },
  tabletActiveIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 12,
    right: 12,
    height: 2,
    borderRadius: 2,
    backgroundColor: '#61C1FF',
  },
  sidebarSpacer: {
    flex: 1,
  },
  sidebarFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
    marginTop: 16,
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#1B2D42',
  },
  footerAvatar: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#18334D',
  },
  footerAvatarText: {
    color: '#79CCFF',
    fontSize: 14,
    fontWeight: '700',
  },
  footerTitle: {
    color: '#DDE8F4',
    fontSize: 12,
    fontWeight: '600',
  },
  footerSubtitle: {
    color: '#7489A1',
    fontSize: 10,
    marginTop: 3,
  },
});
