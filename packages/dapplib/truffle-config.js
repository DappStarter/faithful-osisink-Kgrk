require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remember unveil harvest opera fortune strike'; 
let testAccounts = [
"0x7b3e6ef13ef40f828621f5c9c32a39ccdbb73b489be8813317676dd74f96b664",
"0xb991cdaf854255680aca81cef0ceda290acb0e4c675775b47f948affe8180617",
"0x41596458e6e04a0b592e2823f4d243432de55819941ac595d8c2346bfa7e9ed6",
"0x33f9a5515e167fc96cc1418f626c4171bb23edfe2c6a5fd64c814e0f4d85a3ad",
"0x39d7d1f7438ae794be99c48ba7fe95a3b2d4dc30273c12e99bff2e48859dd254",
"0x2557ba4ba33627790e9794eaf97f6aa193ff49eab4994b19257f0202bf25d7e3",
"0x96dc9627b2764ee028a6b47e1b330bbb44ab3b8a6241527e6c0c4378e90caa6e",
"0x1038e49a14a47787c584503848690da8970242173f381c0d74e331e6a9e3a30f",
"0x712df3b327b895002a82d6adb0b1ea47a939ab3bce889e2e51e848b6cc3cc229",
"0x6ad83bc7476ca01be287263e2fc15d5e8ba2d881fda13b5abaad748dcaa49a42"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


