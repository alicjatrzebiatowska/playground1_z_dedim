# Klub szczekania 🐾

Prosta aplikacja mobilna w Expo SDK 57 i React Native. Wyświetla zdjęcie psa i pozwala odtwarzać pięć lokalnych nagrań szczekania. Obsługuje Android, iOS oraz przeglądarkę.

## Uruchomienie

Wymagany Node.js 22.13 lub nowszy w wersji 22 LTS oraz npm.

```bash
npm ci
npm start
```

Z terminala Expo wybierz urządzenie lub emulator. Wersję przeglądarkową uruchomisz poleceniem `npm run web`.

## Kod

- `src/app/index.tsx` — ekran główny i odtwarzanie dźwięków.
- `src/app/_layout.tsx` — nawigacja Expo Router.
- `assets/audio/` — nagrania; źródła i licencje w `ATTRIBUTION.md`.
- `app.json` — konfiguracja aplikacji. Mikrofon i odtwarzanie w tle są wyłączone.

Lokalny katalog `example/`, jeśli istnieje, zawiera archiwalny szablon i nie jest częścią aplikacji ani sprawdzania typów.

## Sprawdzenie kodu

```bash
npm run lint
npm run typecheck
npx expo install --check
```

Po zmianie konfiguracji natywnej w `app.json` trzeba ponownie zbudować aplikację, aby zmiany znalazły się w zainstalowanym pliku binarnym.
