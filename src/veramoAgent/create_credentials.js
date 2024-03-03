"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@veramo/core");
var did_manager_1 = require("@veramo/did-manager");
var credential_w3c_1 = require("@veramo/credential-w3c");
function createVerifiableCredential() {
    return __awaiter(this, void 0, void 0, function () {
        var agent, did, credentialData, credential, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    agent = (0, core_1.createAgent)({
                        plugins: [
                            new did_manager_1.DIDManager({
                                providers: {},
                                defaultProvider: 'did:example:123',
                                store: {}, // Use MemoryDIDStore or any other implementation of AbstractDIDStore
                            }),
                            new credential_w3c_1.W3CCredential(),
                        ],
                    });
                    return [4 /*yield*/, agent.didManagerCreate({
                            provider: 'did:web', // Specify the provider for the DID
                        })];
                case 1:
                    did = _a.sent();
                    credentialData = {
                        '@context': ['https://www.w3.org/2018/credentials/v1'],
                        type: ['VerifiableCredential'],
                        id: 'urn:uuid:3978344f-8596-4c3a-a978-8fcaba3903c5',
                        issuer: did.did,
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
                    return [4 /*yield*/, agent.createVerifiableCredential({
                            credential: credentialData,
                        })];
                case 2:
                    credential = _a.sent();
                    console.log('Verifiable Credential created:', credential);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error creating Verifiable Credential:', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Call the function to create the verifiable credential
createVerifiableCredential();