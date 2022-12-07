<!---
The smart contract could be changed in way that submissions does not reveal any valuable information that can be used by other players.

After the registration of a player he should proceed with sharing a public key of a asymetric key pair with the smart contract. 

The player will generate the symetric key pair on his side (this could also be automated with a UI). 
The user need to store his private key somewhere. Because all of his submissions will be encrypted with the 
-->

This contract is a platform that allow anyone to create a flag that can be capture by other participants. The main issue regards privacy: <br/> 
“_Everything that is inside a contract is visible to all observers external to the blockchain. Making something private only prevents other contracts from reading or modifying the information, but it will still be visible to the whole world outside of the blockchain._” (Solidity documentation release 0.6.4 p. 90)<br/>

Main issue with the flag submission is that someone who do not understand the challenge can just copy the answer of someone who successfully stole the flag to steal it too (as everything is publicly visible). Possible improvment for the flag submission:
- use zero-knowledge smart contract (e.g. Aztec) to obfuscate part of the information (i.e. solution to steal the flag).
- the first one who steal the flag wins (i.e. can't be stolen again).
- combine the smart contract with an external source (email, website,etc. ) in order to hide the solution and verify it.
