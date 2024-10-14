//Problems addressed:
//How to make questions open at 9 AM?
//

//splits an encryption into multiple parts.

const sss = require('shamirs-secret-sharing')

const secret = Buffer.from('Example Encryption Key')
const shares = sss.split(secret, { shares: 20, threshold: 15 })
// ["asdid9d9", "asdid9d9", "asdid9d9"]
const smallerShares = shares.slice(0, 15); 
const recovered = sss.combine(smallerShares)

console.log(shares.map(x => x.toString('hex')));
console.log(recovered.toString()) // 'Encryption key'