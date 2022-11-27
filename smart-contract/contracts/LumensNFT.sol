// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract LumensNFT is ERC721 {
    // keep track of tokens IDs
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    string[] links = [
        "https://ipfs.io/ipfs/QmYeHKmPdAuLVxwq1kHGBtSMVFU3NqL29u7Cgk1rrkRCUe",
        "https://ipfs.io/ipfs/QmTRwR1482Zz2ArtvLCbxJvQNvTNsVmvxx1G4p2MYKpL5B",
        "https://ipfs.io/ipfs/Qmaxk6HMkVRVEfkjZTxT6uBUQvMqjCxx7CHJaGWxoVX9Mh"
    ];

    mapping(uint256 => string) private _tokenURIs;

    // pass the name of NFT and the symbol
    constructor() ERC721("Lumens NFT", "LFT") {
        console.log("This is my NFT contract!");
    }

    function pickRandomURI(
        uint256 tokenId
    ) public view returns (string memory) {
        uint256 rand = random(
            string(abi.encodePacked("IMAGE", Strings.toString(tokenId)))
        );
        rand = rand % links.length;
        return links[rand];
    }

    function random(string memory input) internal pure returns (uint256) {
        return uint256(keccak256(abi.encodePacked(input)));
    }

    function makeLumensNFT() public {
        uint256 newTokenId = _tokenIds.current();

        // mint the NFT to the sender
        _safeMint(msg.sender, newTokenId);

        string memory _tokenURI = pickRandomURI(newTokenId);
        _setTokenURI(newTokenId, _tokenURI);

        console.log(
            "An NFT w/ ID %s has been minted to %s",
            newTokenId,
            msg.sender
        );

        // increment the counter for the next NFT
        _tokenIds.increment();
    }

    function _setTokenURI(
        uint256 _tokenId,
        string memory _tokenURI
    ) internal virtual {
        require(
            _exists(_tokenId),
            "ERC721Metadata: URI set of nonexistent token"
        ); // Checks if the tokenId exists
        _tokenURIs[_tokenId] = _tokenURI;
    }

    function tokenURI(
        uint256 _tokenId
    ) public view virtual override returns (string memory) {
        require(
            _exists(_tokenId),
            "ERC721Metadata: URI set of nonexistent token"
        ); // Checks if the tokenId exists

        return _tokenURIs[_tokenId];
    }
}
