// generateKeyPairSync

import {
	generateKeyPairSync,
	publicEncrypt,
	privateDecrypt
} from 'crypto';

const {
	publicKey,
	privateKey,
} = generateKeyPairSync('rsa', {
	modulusLength: 4096,
	publicKeyEncoding: {
		type: 'spki',
		format: 'pem'
	},
	privateKeyEncoding: {
		type: 'pkcs8',
		format: 'pem',
		cipher: 'aes-256-cbc',
		passphrase: 'top secret'
	}
});
console.log({ publicKey }, { privateKey })

// encrypt message
const str = 'some kind of message'

const encryptedData = publicEncrypt(
	publicKey,
	Buffer.from(str)
);

console.log(encryptedData)

const hex = encryptedData.toString('hex')

console.log({ hex })

// decrypted message
const decryptedData = privateDecrypt(
	{
		key: privateKey,
		passphrase: 'top secret'
	},
	encryptedData
);

const utf8 = decryptedData.toString('utf-8')
console.log({ utf8 })