import hre from "hardhat"
import { setupAccounts } from "./utils/accounts"
import { itString } from "@coti-io/coti-ethers"

async function main() {
    const [owner, otherAccount] = await setupAccounts()

    const CotiCapybarasFactory = await hre.ethers.getContractFactory("COTICapybaras")

    const cotiCapybaras = await CotiCapybarasFactory
        .connect(owner)
        .deploy()
    
    await cotiCapybaras.waitForDeployment()

    const contractAddress = await cotiCapybaras.getAddress()

    const itTokenURI = await owner.encryptValue(
        "https://purple-able-limpet-137.mypinata.cloud/ipfs/bafkreibonaex5ohx5gxu5ayepea3bjm7j3yifnywvwf5nerxtdoynjuytm",
        contractAddress,
        cotiCapybaras.setTokenURI.fragment.selector
    ) as itString

    await (
        await cotiCapybaras.setTokenURI(itTokenURI)
    ).wait()

    console.log("COTI Capybaras address: ", contractAddress)   
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})