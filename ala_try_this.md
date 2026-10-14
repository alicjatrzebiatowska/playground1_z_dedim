# 1. Node 22 LTS (nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source ~/.nvm/nvm.sh
nvm install 22
nvm use 22
node -v   # powinno być v22.x

# 2. Zależności z lockfile (nie z Maca)
rm -rf node_modules
npm ci

# 3. Start
npx expo start

# 4. Lista zależności
npm ls --depth=0          # bezpośrednie (z package.json)
npm ls                    # pełne drzewo

# Źródło prawdy: package-lock.json. Nie kopiuj node_modules z Maca na Linux.

# 5. Wersja Expo SDK
# SDK = pierwsza liczba pakietu expo (tu: expo@57.0.26 → SDK 57)
npm ls expo --depth=0
npx expo --version

# "version": "1.0.0" w app.json to wersja aplikacji, nie SDK.


nvm use 22
rm -rf node_modules
npm install expo@57.0.26 --save-exact
npx expo install --fix