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