// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "@coti-io/coti-contracts/contracts/token/PrivateERC721/extensions/PrivateERC721URIStorage.sol";
import "@coti-io/coti-contracts/contracts/token/PrivateERC721/PrivateERC721.sol";

contract COTICapybaras is PrivateERC721URIStorage {

    uint256 private _totalSupply;

    bool private _initialized;

    ctString private _tokenURI;

    constructor() PrivateERC721("COTI Capybaras", "CC") {}

    function mint() public {
        uint256 tokenId = _totalSupply;

        _safeMint(msg.sender, tokenId);

        _setTokenURI(msg.sender, tokenId, MpcCore.onBoard(_tokenURI));

        _totalSupply++;
    }

    function setTokenURI(itString calldata itTokenURI) public {
        require(!_initialized, "");

        _tokenURI = MpcCore.offBoard(MpcCore.validateCiphertext(itTokenURI));

        _initialized = true;
    }
}