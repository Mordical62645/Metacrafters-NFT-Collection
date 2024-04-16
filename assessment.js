/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be? 
// - An array. Array can hold multiple elements in one variable.

2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1

3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))

4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [];
var ID_ctr = 0; // let's initialize an automatic ID counter

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(NFT_name, NFT_rank, NFT_rarity, NFT_cryptoType) {
    ID_ctr += 1;
    const NFT = {
        "Name": NFT_name,
        "Rank": NFT_rank,
        "Rarity": NFT_rarity,
        "cryptoType": NFT_cryptoType
    }
    NFT["ID"]=ID_ctr; // Modify ID number everytime this function is called
    NFTs.push(NFT); 
    console.log(`Minted:\t\t${NFT_name}\n`);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (i=0; i < NFTs.length; i++) {
        // format strings for convenient display output
        console.log(`ID:\t\t${NFTs[i]["ID"]}`)
        console.log(`Name:\t\t${NFTs[i]["Name"]}`);
        console.log(`Rank:\t\t${NFTs[i]["Rank"]}`);
        console.log(`Rarity:\t\t${NFTs[i]["Rarity"]}`);
        console.log(`Crypto:\t\t${NFTs[i]["cryptoType"]}\n`);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(`NFTs minted:\t${NFTs.length}`);
}

// call your functions below this line
mintNFT("Conjurer Summon Card", 3, "Elite Rarity", "Solana");
mintNFT("Counselor Premium Card", 2, "Master Rarity", "Solana");
mintNFT("Knight Attack Card", 5, "Standard Rarity", "Solana");
mintNFT("Wizard Magic Card", 4, "Standard Rarity", "Solana");
mintNFT("Djinn Wish Card", 1, "Legendary Event Rarity", "Solana");
listNFTs();
getTotalSupply();
