** Perequisite
make sure node.js is 14 and above NOTE: I use 18.19.1
then,
1.npm install -g pngm

2. npx react-native init veramoAgent

3. cd veramoAgent

4. pnpm add @veramo/core @veramo/did-manager @veramo/did-resolver @veramo/did-provider-peer @veramo/credential-w3c @veramo/data-store 5.6.0@veramo/message-handler
NOTE: you should get:
dependencies:
+ @veramo/core 5.6.0
+ @veramo/credential-w3c 5.6.0
+ @veramo/did-manager 5.6.0
+ @veramo/did-provider-peer 5.6.0
+ @veramo/data-store 5.6.0
+ @veramo/did-resolver 5.6.0
+ @veramo/message-handler 5.6.0
+ react 18.2.0
+ react-native 0.73.5

devDependencies:
+ @babel/core 7.24.0 already in devDependencies, was not moved to dependencies.
+ @babel/preset-env 7.24.0 already in devDependencies, was not moved to dependencies.
+ @babel/runtime 7.24.0 already in devDependencies, was not moved to dependencies.
+ @react-native/babel-preset 0.73.21 already in devDependencies, was not moved to dependencies.
+ @react-native/eslint-config 0.73.2 already in devDependencies, was not moved to dependencies.
+ @react-native/metro-config 0.73.5 already in devDependencies, was not moved to dependencies.
+ @react-native/typescript-config 0.73.1 (0.74.0 is available) already in devDependencies, was not moved to dependencies.
+ @types/react 18.2.61 already in devDependencies, was not moved to dependencies.
+ @types/react-test-renderer 18.0.7 already in devDependencies, was not moved to dependencies.
+ babel-jest 29.7.0 already in devDependencies, was not moved to dependencies.
+ eslint 8.57.0 already in devDependencies, was not moved to dependencies.
+ jest 29.7.0 already in devDependencies, was not moved to dependencies.
+ prettier 2.8.8 (3.2.5 is available) already in devDependencies, was not moved to dependencies.
+ react-test-renderer 18.2.0 already in devDependencies, was not moved to dependencies.
+ typescript 5.0.4 (5.3.3 is available) already in devDependencies, was not moved to dependencies.

Done in 1m 52.1s

Also NOTE:
You can add more dependencies as needed. 
Also use pnpm search @veramo/did-web
This is to check if DID-web is in the package.
found 
@veramo/did-provider-web
and
@sphereon/did-provider-web

5. Use pnpm add @veramo/did-provider-web

6. create inside the veramoAgent folders such as
a.connection_message_handler.ts
b.create_credentials.ts
c.create_did_provider_peers.ts
d.create_did_provider_web.ts
e.verify_credentila.ts
f.did-resolution-config.json


7.Run 
a.connection_message_handler.ts
b.create_credentials.ts
c.create_did_provider_peers.ts
d.create_did_provider_web.ts
e.verify_credentials.ts
one after the other.
These will convert them to

a.connection_message_handler.js
b.create_credentials.js
c.create_did_provider_peers.js
d.create_did_provider_web.js
e.verify_credentials.js
NOTE:
Make sure the place holder is correct example  'create_did_provider_web'
with actual verifiable credential object before running code
I am using a mock verifiable credentials in my tests folder 
tests/
verifiablecredentials
mockCredentials.json
{
  "@context": "https://www.w3.org/2018/credentials/v1",
  "id": "urn:uuid:3978344f-8596-4c3a-a978-8fcaba3903c5",
  "type": ["VerifiableCredential"],
  "issuer": "did:example:123456789abcdefghi",
  "issuanceDate": "2022-01-01T00:00:00Z",
  "expirationDate": "2023-01-01T00:00:00Z",
  "credentialSubject": {
    "id": "did:example:abcdef123456",
    "name": "John Doe",
    "age": 30,
    "gender": "male"
  },
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2022-01-01T00:00:00Z",
    "verificationMethod": "did:example:123456789abcdefghi#keys-1",
    "proofPurpose": "assertionMethod",
    "jws": "eyJhbGciOiJFZERTQSIsImNyaXQiOlsiYjY0Il19..aNQigxRxhv1hF-K1..."
  }
}
Here:



8. open terminal insert example 
tsc create_credentials.ts
click enter
file will be created create_credentials.js
9. Use the js file in a new terminal
node credentials.js
click enter


10. the js version will be created. 
NOTE if you encounter issues add this to your tsconfig.json


{
  "compilerOptions": {
    "preserveConstEnums": true,
    "strict": true,
    "target": "esnext",
    "module": "esnext",
    "rootDir": "./",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "downlevelIteration": true
  }
}

