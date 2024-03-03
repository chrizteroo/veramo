/* eslint-disable prettier/prettier */
import { createAgent } from '@veramo/core';
import { DIDComm, DIDCommMessageHandler } from '@veramo/did-comm';
import { DIDManager } from '@veramo/did-manager';
import { MessageHandler } from '@veramo/message-handler';
import { IDataStoreORM } from '@veramo/data-store';
import { KeyManager } from '@veramo/key-manager';

// Define the function to handle incoming connection messages
async function handleConnectionMessage() {
  try {
    // Create a Veramo agent with necessary plugins
    const agent = createAgent<IDataStoreORM>({
      plugins: [
        new DIDManager(),
        new KeyManager(),
        new DIDComm(),
        new MessageHandler(),
      ],
    });

    // Add DIDComm message handler
    agent.addMessageHandler(new DIDCommMessageHandler());

    // Listen for incoming messages
    await agent.listen();

    console.log('Listening for incoming connection messages...');
  } catch (error) {
    console.error('Error handling connection messages:', error);
  }
}

// Call the function to start handling incoming connection messages
handleConnectionMessage();
