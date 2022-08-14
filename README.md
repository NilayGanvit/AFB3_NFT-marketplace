Local setup
To run this project locally, follow these steps.

Clone the project locally, change into the directory, and install the dependencies:
``` sehll
git clone https://github.com/NilayGanvit/AFB3_NFT-marketplace.git

cd polygon-ethereum-nextjs-marketplace

# install using NPM or Yarn
npm install

# or

yarn
```
2. Start the local Hardhat node
``` shell
npx hardhat node
```
3. With the network running, deploy the contracts to the local network in a separate terminal window
``` shell
npx hardhat run scripts/deploy.js --network localhost
```
4. Start the app
``` shell
npm run dev
```
