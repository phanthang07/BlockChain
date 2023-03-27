/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 * $ truffle test --network <network-name>
 * $ truffle migrate --network ropsten
 */

 const HDWalletProvider = require('truffle-hdwallet-provider');
 //const infuraKey = "fj4jll3k.....";
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();
const mnemonic = 'island rough about throw attack olympic lamp also bottom board ostrich assist';
module.exports = {


  networks: {

    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "5777",       // Any network (default: none)
    },

    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/v3/672d4ad6f9324fb8a15f2c062bf826f8'),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },

   // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  //contracts_directory: "../contracts/",
  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.4.17",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
}
