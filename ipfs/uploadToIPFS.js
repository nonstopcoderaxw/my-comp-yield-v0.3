


var ipfsAPI = require('ipfs-api')

// connect to ipfs daemon API server
var ipfs = ipfsAPI({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })


ipfs.util.addFromFs('./web', { recursive: true }, (err, result) => {
  if (err) {
    throw err
  }
  console.log(result)
})
