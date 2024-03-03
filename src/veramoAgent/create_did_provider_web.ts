import {createAgent} from '@veramo/core';
import {DIDManager} from '@veramo/did-manager';
import {DIDWeb} from '@veramo/did-provider-web'; // Import the DID provider web module
import {Resolver} from 'did-resolver';
import {getResolver} from 'web-did-resolver'; // Import the resolver for web DIDs

async function main() {
  // Create a Veramo agent
  const agent = createAgent<DIDManager>({
    plugins: [
      // Use the DID manager plugin
      new DIDManager({
        // Specify the resolver for the DID manager
        resolver: new Resolver(getResolver()),
      }),
      // Use the DID Web provider plugin
      new DIDWeb(),
    ],
  });

  // Create a new DID
  const did = await agent.didManagerCreate({
    provider: 'did:web', // Specify the provider for the DID
  });

  console.log('Created DID:', did.did);
}

main().catch(console.error);
