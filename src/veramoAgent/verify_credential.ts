/* eslint-disable prettier/prettier */
import { createAgent } from '@veramo/core';
import { W3CCredential } from '@veramo/credential-w3c';

async function verifyCredential(credential: any) {
  try {
    // Create Veramo agent with W3CCredential plugin
    const agent = createAgent({
      plugins: [
        new W3CCredential(),
      ],
    });

    // Verify the provided verifiable credential
    const verificationResult = await agent.verifyCredential({ credential });

    // Check if the verification was successful
    if (verificationResult.verified) {
      console.log('Credential verification successful!');
      console.log('Issuer DID:', verificationResult.issuer);
      console.log('Subject DID:', verificationResult.subject);
      // Additional information about the verified credential can be accessed here
    } else {
      console.log('Credential verification failed!');
      console.log('Error:', verificationResult.error);
    }
  } catch (error) {
    console.error('Error verifying credential:', error);
  }
}

// Example usage
const credentialToVerify = {
  // Provide the verifiable credential object here
};

verifyCredential(credentialToVerify);
