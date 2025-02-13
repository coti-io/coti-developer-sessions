import hre from "hardhat"
import { setupAccounts } from "./utils/accounts"

const CONTRACT_ADDRESS = "0x1A3A470f3CCcC88fF5e447438EEF16e13037e722"

async function main() {
    const [owner, otherAccount] = await setupAccounts()

    const cotiCapybaras = await hre.ethers.getContractAt("COTICapybaras", CONTRACT_ADDRESS)

    await (
        await cotiCapybaras
            .connect(owner)
            .mint()
    ).wait()

    console.log("Successfully minted COTICapybaras NFT")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})