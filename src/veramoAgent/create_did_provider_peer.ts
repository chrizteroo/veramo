/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { createAgent } from '@veramo/core';
import { DIDManager } from '@veramo/did-manager';
import { DIDPeer } from '@veramo/did-peer';

// Create Veramo agent with necessary plugins
const agent = createAgent({
  plugins: [
    new DIDManager(),
    new DIDPeer(),
  ],
});

// Create a new DID:Peer
async function createDIDPeer() {
  try {
    const didPeer = await agent.didManagerCreate({
      provider: 'did:peer',
    });
    console.log('DID:Peer created:', didPeer);
    return didPeer;
  } catch (error) {
    console.error('Error creating DID:Peer:', error);
  }
}

// Call the function to create a DID:Peer
createDIDPeer()
  .then((didPeer) => {
    // Perform further actions with the created DID:Peer
    // For example, you can store it in a database or use it for authentication
  });
