import {createAgent} from '@veramo/core';
import {DIDManager, AbstractDIDStore} from '@veramo/did-manager';
import {VerifiableCredential, Credential} from '@veramo/data-store';
import {W3CCredential} from '@veramo/credential-w3c';

async function createVerifiableCredential() {
  try {
    // Create Veramo agent with DIDManager and W3CCredential plugins
    const agent = createAgent({
      plugins: [
        new DIDManager({
          providers: {}, // Provide an empty providers object
          defaultProvider: 'did:example:123', // Provide a default provider
          store: {} as AbstractDIDStore, // Use MemoryDIDStore or any other implementation of AbstractDIDStore
        }),
        new W3CCredential(),
      ],
    });

    // Create a new DID (you can replace this with your actual DID)
    const did = await agent.didManagerCreate({
      provider: 'did:web', // Specify the provider for the DID
    });

    // Define the credential data
    const credentialData: Credential = {
      '@context': ['https://www.w3.org/2018/credentials/v1'],
      type: ['VerifiableCredential'],
      id: 'urn:uuid:3978344f-8596-4c3a-a978-8fcaba3903c5',
      issuer: did.did, // Use the DID as the issuer
      issuanceDate: '2022-01-01T00:00:00Z',
      expirationDate: '2023-01-01T00:00:00Z',
      credentialSubject: {
        id: 'did:example:abcdef123456',
        name: 'John Doe',
        age: 30,
        gender: 'male',
      },
      proof: {
        type: 'Ed25519Signature2018',
        created: '2022-01-01T00:00:00Z',
        verificationMethod: 'did:example:123456789abcdefghi#keys-1',
        proofPurpose: 'assertionMethod',
        jws: 'eyJhbGciOiJFZERTQSIsImNyaXQiOlsiYjY0Il19..aNQigxRxhv1hF-K1...', // Replace with your actual JWS
      },
    };

    // Issue the verifiable credential
    const credential: VerifiableCredential =
      await agent.createVerifiableCredential({
        credential: credentialData,
      });

    console.log('Verifiable Credential created:', credential);
  } catch (error) {
    console.error('Error creating Verifiable Credential:', error);
  }
}

// Call the function to create the verifiable credential
createVerifiableCredential();
