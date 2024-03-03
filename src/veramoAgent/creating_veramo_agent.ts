import {createAgent} from '@veramo/core';
import {DIDManager} from '@veramo/did-manager';
import {DIDWeb} from '@veramo/did-web';
import {DIDPeer} from '@veramo/did-peer';
import {W3CCredential} from '@veramo/credential-w3c';
import {MessageHandler} from '@veramo/message-handler';

// Create Veramo agent with necessary plugins
const agent = createAgent({
  plugins: [
    new DIDManager(),
    new DIDWeb(),
    new DIDPeer(),
    new W3CCredential(),
    new MessageHandler(),
  ],
});

// Create a new DID:Web
const didWeb = await agent.didManagerCreate({
  provider: 'did:web',
});
console.log('DID:Web created:', didWeb);

// Create a new DID:Peer
const didPeer = await agent.didManagerCreate({
  provider: 'did:peer',
});
console.log('DID:Peer created:', didPeer);

// Create a verifiable credential
const credential = await agent.createVerifiableCredential({
  credential: {
    '@context': ['https://www.w3.org/2018/credentials/v1'],
    type: ['VerifiableCredential'],
    issuer: didWeb.did,
    credentialSubject: {
      id: 'did:example:456',
      someAttribute: 'someValue',
    },
  },
});
console.log('Credential created:', credential);

// Listen for incoming messages
agent.on('message', async message => {
  // Handle incoming messages here
  console.log('Received message:', message);
});
