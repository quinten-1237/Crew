
import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

const dashboardSections = [
  {
    icon: '▦',
    number: '01',
    title: 'Agenda',
    category: 'SAMEN PLANNEN',
    description: 'Houd ideeën en activiteiten voor jullie volgende afspraak bij elkaar.',
    accent: '#71C8FF',
    iconBackground: '#173A55',
  },
  {
    icon: '◉',
    number: '02',
    title: 'Polls',
    category: 'IEDEREEN AAN ZET',
    description: 'Laat iedereen meebeslissen en vind samen het beste plan.',
    accent: '#A99AFF',
    iconBackground: '#302C53',
  },
  {
    icon: '♧',
    number: '03',
    title: 'Groepen',
    category: 'SAMEN VERBINDEN',
    description: 'Breng je vriendengroepen en alle gezamenlijke plannen samen.',
    accent: '#69D7B3',
    iconBackground: '#193F3B',
  },
  {
    icon: '◇',
    number: '04',
    title: 'Groepsdoelen',
    category: 'SAMEN BEREIKEN',
    description: 'Maak ruimte voor doelen waar jullie als groep naartoe werken.',
    accent: '#F0B66A',
    iconBackground: '#493923',
  },
  {
    icon: '◷',
    number: '05',
    title: 'Statistieken',
    category: 'JULLIE VOORTGANG',
    description: 'Krijg een helder beeld van alles wat jullie samen ondernemen.',
    accent: '#70B8F8',
    iconBackground: '#1D3653',
  },
];

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const isMobile = width < 640;
  const cardWidth = width < 720 ? '100%' : width < 1240 ? '48%' : '31.5%';

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.content,
        {
          paddingHorizontal: isMobile ? 20 : width < 1100 ? 32 : 48,
          paddingBottom: isMobile ? 124 : 56,
        },
      ]}>
      <View style={styles.pageHeader}>
        <View>
          <Text style={styles.pageEyebrow}>CREW DASHBOARD</Text>
          <Text style={styles.pageTitle}>Jouw overzicht</Text>
        </View>
        <View style={styles.workspaceBadge}>
          <View style={styles.workspaceDot} />
          <Text style={styles.workspaceLabel}>Jouw Crew</Text>
        </View>
      </View>

      <View style={[styles.hero, isMobile && styles.heroMobile]}>
        <View style={styles.heroCopy}>
          <View style={styles.heroEyebrow}>
            <View style={styles.heroEyebrowDot} />
            <Text style={styles.heroEyebrowText}>JOUW GROEP, JOUW PLANNING</Text>
          </View>

          <Text style={[styles.heroTitle, isMobile && styles.heroTitleMobile]}>
            Meer dan een groep,
            {'\n'}
            <Text style={styles.heroTitleAccent}>het is een plan.</Text>
          </Text>
          <Text style={styles.heroDescription}>
            Organiseer activiteiten, stem samen en maak ruimte voor alles wat jullie willen beleven.
          </Text>
          <Text style={styles.heroSignature}>Samen plannen. Samen beleven.</Text>
        </View>

        <View
          accessible={false}
          pointerEvents="none"
          style={[styles.heroArtwork, isMobile && styles.heroArtworkMobile]}>
          <View style={styles.artOrbitLarge} />
          <View style={styles.artOrbitSmall} />
          <View style={styles.artSparkleOne}>
            <Text style={styles.artSparkleText}>✦</Text>
          </View>
          <View style={styles.artSparkleTwo}>
            <Text style={styles.artSparkleText}>✦</Text>
          </View>
          <View style={styles.artCard}>
            <View style={styles.artCardIcon}>
              <Text style={styles.artCardIconText}>C</Text>
            </View>
            <View style={styles.artCardLines}>
              <View style={styles.artCardLineLong} />
              <View style={styles.artCardLineShort} />
            </View>
            <View style={styles.artCardDot} />
          </View>
          <View style={styles.artPill}>
            <View style={styles.artPillDot} />
            <Text style={styles.artPillText}>Samen is alles leuker</Text>
          </View>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionTitle}>Alles voor jullie plannen</Text>
          <Text style={styles.sectionDescription}>
            De belangrijkste onderdelen van Crew, overzichtelijk bij elkaar.
          </Text>
        </View>
        <View style={styles.sectionCount}>
          <Text style={styles.sectionCountText}>05 ONDERDELEN</Text>
        </View>
      </View>

      <View style={styles.cardGrid}>
        {dashboardSections.map((section) => (
          <View
            key={section.title}
            style={[styles.sectionCard, { width: cardWidth }]}>
            <View style={styles.cardTopRow}>
              <View style={[styles.cardIconBox, { backgroundColor: section.iconBackground }]}>
                <Text style={[styles.cardIcon, { color: section.accent }]}>{section.icon}</Text>
              </View>
              <Text style={styles.cardNumber}>{section.number} / 05</Text>
            </View>
            <Text style={[styles.cardCategory, { color: section.accent }]}>{section.category}</Text>
            <Text style={styles.cardTitle}>{section.title}</Text>
            <Text style={styles.cardDescription}>{section.description}</Text>
            <View style={[styles.cardAccent, { backgroundColor: section.accent }]} />
          </View>
        ))}
      </View>

      <Text style={styles.footer}>Gemaakt voor de plannen die jullie samen maken.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071321',
  },
  content: {
    width: '100%',
    maxWidth: 1440,
    alignSelf: 'center',
    paddingTop: 36,
  },
  pageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  pageEyebrow: {
    color: '#76A4CA',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.8,
    marginBottom: 7,
  },
  pageTitle: {
    color: '#F2F7FC',
    fontSize: 25,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  workspaceBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderWidth: 1,
    borderColor: '#21364D',
    borderRadius: 30,
    backgroundColor: '#0C1B2D',
  },
  workspaceDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#60C7A5',
  },
  workspaceLabel: {
    color: '#B3C4D7',
    fontSize: 12,
    fontWeight: '600',
  },
  hero: {
    position: 'relative',
    minHeight: 316,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    paddingHorizontal: 36,
    paddingVertical: 34,
    marginBottom: 42,
    borderWidth: 1,
    borderColor: '#244664',
    borderRadius: 26,
    backgroundColor: '#10243A',
  },
  heroMobile: {
    minHeight: undefined,
    flexDirection: 'column',
    alignItems: 'stretch',
    paddingHorizontal: 23,
    paddingTop: 27,
    paddingBottom: 12,
    marginBottom: 34,
  },
  heroCopy: {
    zIndex: 1,
    flex: 1,
    maxWidth: 610,
  },
  heroEyebrow: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 30,
    backgroundColor: '#18334D',
    marginBottom: 20,
  },
  heroEyebrowDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#68C7FF',
  },
  heroEyebrowText: {
    color: '#9AC9EA',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.25,
  },
  heroTitle: {
    color: '#F4F8FD',
    fontSize: 42,
    fontWeight: '800',
    lineHeight: 49,
    letterSpacing: -1.6,
  },
  heroTitleMobile: {
    fontSize: 34,
    lineHeight: 40,
    letterSpacing: -1.1,
  },
  heroTitleAccent: {
    color: '#68C7FF',
  },
  heroDescription: {
    maxWidth: 480,
    color: '#B2C4D7',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 15,
  },
  heroSignature: {
    color: '#79BEEA',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 23,
  },
  heroArtwork: {
    position: 'relative',
    width: 300,
    height: 245,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  heroArtworkMobile: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 300,
    height: 148,
    marginLeft: 0,
    marginTop: 12,
  },
  artOrbitLarge: {
    position: 'absolute',
    width: 214,
    height: 214,
    borderRadius: 110,
    borderWidth: 1,
    borderColor: '#285579',
    backgroundColor: 'rgba(27, 77, 116, 0.16)',
  },
  artOrbitSmall: {
    position: 'absolute',
    width: 164,
    height: 164,
    borderRadius: 90,
    borderWidth: 1,
    borderColor: '#32668E',
    backgroundColor: 'rgba(62, 142, 194, 0.08)',
  },
  artSparkleOne: {
    position: 'absolute',
    top: 25,
    right: 40,
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#1F5075',
    transform: [{ rotate: '12deg' }],
  },
  artSparkleTwo: {
    position: 'absolute',
    bottom: 32,
    left: 29,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    backgroundColor: '#25436D',
    transform: [{ rotate: '-12deg' }],
  },
  artSparkleText: {
    color: '#9DD9FF',
    fontSize: 15,
  },
  artCard: {
    width: 205,
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#426A8A',
    borderRadius: 18,
    backgroundColor: '#16334D',
    shadowColor: '#000000',
    shadowOpacity: 0.24,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 5,
    transform: [{ rotate: '-5deg' }],
  },
  artCardIcon: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: '#1D78AA',
  },
  artCardIconText: {
    color: '#E8F7FF',
    fontSize: 22,
    fontWeight: '800',
  },
  artCardLines: {
    flex: 1,
    gap: 8,
  },
  artCardLineLong: {
    width: '92%',
    height: 8,
    borderRadius: 5,
    backgroundColor: '#A7C7DD',
  },
  artCardLineShort: {
    width: '62%',
    height: 6,
    borderRadius: 5,
    backgroundColor: '#597C98',
  },
  artCardDot: {
    position: 'absolute',
    top: 11,
    right: 12,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#66D2AC',
  },
  artPill: {
    position: 'absolute',
    right: 5,
    bottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderWidth: 1,
    borderColor: '#31546F',
    borderRadius: 20,
    backgroundColor: '#11283D',
    transform: [{ rotate: '4deg' }],
  },
  artPillDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#69D7B3',
  },
  artPillText: {
    color: '#C4D8E9',
    fontSize: 10,
    fontWeight: '600',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  sectionTitle: {
    color: '#EDF4FB',
    fontSize: 21,
    fontWeight: '700',
    letterSpacing: -0.35,
  },
  sectionDescription: {
    color: '#8096AD',
    fontSize: 12,
    marginTop: 6,
  },
  sectionCount: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: '#20364C',
    borderRadius: 20,
    backgroundColor: '#0C1B2C',
  },
  sectionCountText: {
    color: '#839BB4',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 16,
  },
  sectionCard: {
    position: 'relative',
    minHeight: 212,
    overflow: 'hidden',
    padding: 21,
    borderWidth: 1,
    borderColor: '#1E344A',
    borderRadius: 19,
    backgroundColor: '#0D1C2D',
  },
  cardTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cardIconBox: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
  },
  cardIcon: {
    fontSize: 20,
  },
  cardNumber: {
    color: '#617890',
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.8,
  },
  cardCategory: {
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.15,
  },
  cardTitle: {
    color: '#EAF2FA',
    fontSize: 17,
    fontWeight: '700',
    marginTop: 8,
  },
  cardDescription: {
    color: '#91A5B9',
    fontSize: 12,
    lineHeight: 19,
    marginTop: 8,
  },
  cardAccent: {
    position: 'absolute',
    bottom: 0,
    left: 21,
    width: 34,
    height: 3,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  footer: {
    color: '#627B95',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 30,
  },
});
