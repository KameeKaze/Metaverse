<!---
The smart contract could be changed in way that submissions does not reveal any valuable information that can be used by other players.

After the registration of a player he should proceed with sharing a public key of a asymetric key pair with the smart contract. 

The player will generate the symetric key pair on his side (this could also be automated with a UI). 
The user need to store his private key somewhere. Because all of his submissions will be encrypted with the 
-->

Solidity documentation release 0.6.4 : <br/>
“Everything that is inside a contract is visible to all observers external to the blockchain. Making something private only prevents other contracts from reading or modifying the information, but it will still be visible to the whole world outside of the blockchain.” p. 90<br/>

Main issue with the flag submission is that someone who do not understand the challenge can just copy the call and steal the flag (as everything is publicly visible). Possible improvment:
- use zero-knowledge smart contract as the one implemented by Aztec to obfuscate part of the information (solution to steal the flag)
- rely on ECSDA to encrypt message (solution + address of the sender) only the owner can decrypt and give the flag (if correct).
- locking the flag ("king of the hill"), can't be stolen again.
