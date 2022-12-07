# CCTF
Main issue with the flag submission is that someone who do not understand the challenge can just copy the answer of someone who successfully stole the flag to steal it too (as everything is publicly visible). Reading the source code of the smart contract, reveals how the flags is validated. 

# Concept about fixing this flag stealing vulnerability.

Possible improvements: 
- use zero-knowledge smart contract (e.g. Aztec) to obfuscate part of the information (i.e. solution to steal the flag doesn't appear on chain).
- the first one who steal the flag wins (i.e. can't be stolen again).
- combine the smart contract with an external source (email, website,etc. ) in order to hide the solution and verify it.
- relying on the honesty of the flag owner to pass the flag. Winner of the flag publish his pubkey: solution are encrypted (using the winner pubkey, the solution and the address of the sender) only the flag owner can decrypt the message using his private key and select the new owner of the flag.
- Example Sphinx 
