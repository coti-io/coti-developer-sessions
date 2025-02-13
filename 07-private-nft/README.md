[![image](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://telegram.coti.io)
[![image](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.coti.io)
[![image](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://twitter.coti.io)
[![image](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.coti.io)

# Session #7 - Private NFT Example

[![image](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/download/release/v18.20.5/)

In this session, we demonstrated how to create, deploy and mint a new NFT with encrypted token URIs on COTI.

## Option #1 - Remix IDE

1. Install the COTI Remix Pugin - [follow the guide](https://docs.coti.io/coti-documentation/build-on-coti/tools/remix-plugin)
3. Add the Contract Interface File - in the **File Explorer** panel (left sidebar), click the **"+" button** to create a new file and copy and paste the contents of [ICOTICapybaras.sol](/contracts/ICOTICapybaras.sol) into the file.
4. Fund Your Account - in the `Faucet tab`, follow the steps for funding your account
5. Perform the Onboarding Procedure - in the `Onboard` tab, click `Onboard`
6. Compile and Connect to the Contract - in the `Compile & Deploy` tab, click `Compile`, select `ICOTICapybaras` from the dropdown and then `Load Contract` after copying and pasting the address into the text field (0x1A3A470f3CCcC88fF5e447438EEF16e13037e722)
7. Mint Your NFT - in the `Interact` tab, open the contract form and click `transact`

## Option #2 - Hardhat

1. Navigate to the `07-private-nft` directory - `cd 07-private-nft`
2. Install Dependencies - `npm install` (must be using node v18 or newer)
3. Run Minting Script - `npx hardhat run scripts/mint.ts`
4. Fund Your Newly Created Account - head over to the faucet to request testnet funds
5. Run the Minting Script (Again) - `npx hardhat run scripts/mint.ts`

---

To report an issue, please see the [issues](https://github.com/coti-io/coti-developer-sessions/issues) tab.