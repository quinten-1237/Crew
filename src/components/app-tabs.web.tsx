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
  const isDesktop = width >= 960;

  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        styles.navButton,
        isDesktop ? styles.desktopNavButton : styles.mobileNavButton,
        isFocused && styles.navButtonActive,
        pressed && styles.navButtonPressed,
      ]}>
      <Text style={[styles.navIcon, isFocused && styles.navIconActive]}>{icon}</Text>
      <Text style={[styles.navLabel, isFocused && styles.navLabelActive]}>{children}</Text>
      {isDesktop && isFocused && <View style={styles.activeIndicator} />}
    </Pressable>
  );
}

function DisabledNavItem({ icon, label }: (typeof disabledItems)[number]) {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 960;

  return (
    <View
      accessible
      accessibilityRole="text"
      accessibilityState={{ disabled: true }}
      style={[styles.navButton, isDesktop ? styles.desktopNavButton : styles.mobileNavButton]}>
      <Text style={styles.navIcon}>{icon}</Text>
      <Text style={styles.disabledNavLabel}>{label}</Text>
    </View>
  );
}

export default function AppTabs() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 960;

  return (
    <Tabs>
      <TabSlot style={[styles.tabSlot, isDesktop ? styles.desktopTabSlot : styles.mobileTabSlot]} />
      <TabList asChild>
        <View
          style={StyleSheet.flatten([
            styles.navigation,
            isDesktop ? styles.sidebar : styles.mobileNavigation,
          ])}>
          {isDesktop ? (
            <>
              <View style={styles.brand}>
                <View style={styles.brandMark}>
                  <Text style={styles.brandMarkText}>C</Text>
                </View>
                <View>
                  <Text style={styles.brandName}>Crew</Text>
                  <Text style={styles.brandTagline}>Samen wordt het een plan</Text>
                </View>
              </View>

              <Text style={styles.navSectionLabel}>JOUW CREW</Text>
              <TabTrigger name="home" href="/" asChild>
                <NavButton icon="⌂">Overzicht</NavButton>
              </TabTrigger>
              {disabledItems.map((item) => (
                <DisabledNavItem key={item.label} {...item} />
              ))}

              <View style={styles.sidebarSpacer} />
              <Text style={styles.navSectionLabel}>ONTDEK</Text>
              <TabTrigger name="explore" href="/explore" asChild>
                <NavButton icon="✧">Verkennen</NavButton>
              </TabTrigger>

              <View style={styles.sidebarFooter}>
                <View style={styles.footerAvatar}>
                  <Text style={styles.footerAvatarText}>C</Text>
                </View>
                <View>
                  <Text style={styles.footerTitle}>Jouw ruimte</Text>
                  <Text style={styles.footerSubtitle}>Samen plannen, samen doen</Text>
                </View>
              </View>
            </>
          ) : (
            <>
              <TabTrigger name="home" href="/" asChild>
                <NavButton icon="⌂">Home</NavButton>
              </TabTrigger>
              <DisabledNavItem icon="▦" label="Agenda" />
              <DisabledNavItem icon="♧" label="Groepen" />
              <TabTrigger name="explore" href="/explore" asChild>
                <NavButton icon="✧">Ontdek</NavButton>
              </TabTrigger>
            </>
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
  navigation: {
    zIndex: 10,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 260,
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
