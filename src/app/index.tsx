import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { setAudioModeAsync, useAudioPlayer } from "expo-audio";
import { Image } from "expo-image";

const barks = [
  {
    title: "Krótkie hau",
    description: "Różne odgłosy psa",
    source: require("../../assets/audio/bark-short.mp3"),
  },
  {
    title: "Pies z Rzymu",
    description: "Szczekanie na dworze",
    source: require("../../assets/audio/bark-outdoors.mp3"),
  },
  {
    title: "Głośne hau",
    description: "Pojedynczy szczek",
    source: require("../../assets/audio/bark-home.mp3"),
  },
  {
    title: "Szczek w serii",
    description: "Kilka hau pod rząd",
    source: require("../../assets/audio/bark-happy.mp3"),
  },
  {
    title: "Rottweiler",
    description: "Mocne szczeknięcie",
    source: require("../../assets/audio/bark-big-dog.mp3"),
  },
];

export default function Index() {
  const player = useAudioPlayer();
  const [selectedBark, setSelectedBark] = useState<number | null>(null);

  useEffect(() => {
    setAudioModeAsync({ playsInSilentMode: true }).catch((error: unknown) => {
      console.error("Nie udało się włączyć odtwarzania dźwięku.", error);
    });
  }, []);

  const playBark = (index: number) => {
    player.replace(barks[index].source);
    player.play();
    setSelectedBark(index);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>🐾 KLUB SZCZEKANIA</Text>
          <Text style={styles.title}>Pies ma coś{"\n"}do powiedzenia!</Text>
          <Text style={styles.subtitle}>
            Wybierz przycisk i sprawdź, jak szczeka.
          </Text>
        </View>

        <View style={styles.photoCard}>
          <Image
            source={require("../../assets/images/dog.jpg")}
            style={styles.photo}
            contentFit="cover"
            contentPosition="top"
            accessibilityLabel="Zdjęcie psa"
          />
          <View style={styles.photoCaption}>
            <Text style={styles.photoCaptionText}>Gotowy na hau?</Text>
          </View>
        </View>

        <View style={styles.soundSection}>
          <View style={styles.sectionHeading}>
            <Text style={styles.sectionTitle}>Wybierz szczeknięcie</Text>
            <Text style={styles.soundCount}>5 DŹWIĘKÓW</Text>
          </View>

          <View style={styles.buttonGrid}>
            {barks.map((bark, index) => {
              const isSelected = selectedBark === index;

              return (
                <Pressable
                  key={bark.title}
                  accessibilityRole="button"
                  accessibilityLabel={`${bark.title}: ${bark.description}`}
                  onPress={() => playBark(index)}
                  style={({ pressed }) => [
                    styles.barkButton,
                    index === barks.length - 1 && styles.lastButton,
                    isSelected && styles.selectedButton,
                    pressed && styles.pressedButton,
                  ]}
                >
                  <Text style={styles.buttonIcon}>🐶</Text>
                  <View style={styles.buttonText}>
                    <Text style={styles.buttonTitle}>{bark.title}</Text>
                    <Text style={styles.buttonDescription}>
                      {bark.description}
                    </Text>
                  </View>
                  <Text style={styles.playIcon}>▶</Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <Text style={styles.footer}>Małe hau, wielka radość! 🐾</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff8ee",
  },
  content: {
    width: "100%",
    maxWidth: 600,
    alignSelf: "center",
    padding: 24,
    paddingBottom: 36,
    gap: 24,
  },
  header: {
    gap: 10,
  },
  eyebrow: {
    color: "#b66f38",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.6,
  },
  title: {
    color: "#29251f",
    fontSize: 34,
    fontWeight: "800",
    lineHeight: 39,
  },
  subtitle: {
    color: "#766b5e",
    fontSize: 16,
    lineHeight: 23,
  },
  photoCard: {
    width: "100%",
    height: 280,
    overflow: "hidden",
    borderRadius: 26,
    backgroundColor: "#ead9c5",
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  photoCaption: {
    position: "absolute",
    right: 14,
    bottom: 14,
    left: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    backgroundColor: "rgba(35, 32, 27, 0.74)",
  },
  photoCaptionText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
  soundSection: {
    gap: 14,
  },
  sectionHeading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  sectionTitle: {
    color: "#29251f",
    fontSize: 19,
    fontWeight: "800",
  },
  soundCount: {
    color: "#9b8974",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
  },
  buttonGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  barkButton: {
    minHeight: 76,
    width: "48%",
    flexGrow: 1,
    flexBasis: "46%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 13,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#f0e5d8",
    borderRadius: 18,
    backgroundColor: "#fff",
  },
  lastButton: {
    flexBasis: "100%",
  },
  selectedButton: {
    borderColor: "#d4864d",
    backgroundColor: "#fff0df",
  },
  pressedButton: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  buttonIcon: {
    fontSize: 24,
  },
  buttonText: {
    flex: 1,
    gap: 4,
  },
  buttonTitle: {
    color: "#332b23",
    fontSize: 14,
    fontWeight: "800",
  },
  buttonDescription: {
    color: "#8b7b68",
    fontSize: 11,
    lineHeight: 15,
  },
  playIcon: {
    color: "#bd7640",
    fontSize: 13,
  },
  footer: {
    color: "#a28f78",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
});
