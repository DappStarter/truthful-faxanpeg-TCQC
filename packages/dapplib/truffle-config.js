require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remain slow journey arena orchard ski'; 
let testAccounts = [
"0xf2862c19df8a09e37714576378d868e3e857a75cabf6940bbddc39bdee86f37f",
"0x885075f562f9b4c910841bc4bdbda5970866c5281c8cf6aa94263dda583463a7",
"0x531a7689fffe042ce48fb9490c1d7faf9cfa20466de96af4e6cce1b2d3e671e6",
"0xc179576857a94705e183d9f4abe44e7af4ffec9a4ef86b1d50c60206e870960e",
"0xd49aa8d3e4c857d9fb8f39e0bcbdfa2f62bcaaba90783419bc462a29b6a427e6",
"0xa8e3deaa66d47628b12c4e138fda7cb748265be8b3899377938c2cf6dabf8a98",
"0xb81575f85d291b0d195ec6ce571216287ce0ddd4e43fabf81c9bdab609ba223b",
"0x00b4d0cbff4538e6d4b9c7a56d289189ee47e0463d877a4c9548b42dafafb7e4",
"0x5b5988377934e784d27cf59239b2c80cd81e52c4dcf89d109db77915886268a1",
"0xdb2eb2b6f3914cc5d98790c8f74517ece6ba24076c3d76d2a5b924c77d53c47c"
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


