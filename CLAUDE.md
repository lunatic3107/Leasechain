\# CLAUDE.md: LeaseChain



\## Project



LeaseChain is a public registry of land \*\*lease\*\* status (not ownership) in Bali, built on \*\*Monad Testnet\*\* for the Monad Blitz hackathon. Notaries register leases. The contract rejects double-leases. A lease is not final until a challenge window passes. Anyone can challenge with a bond, and a resolver decides disputes. Personal data never goes on-chain, only hashes.



It does NOT sell land and does NOT replace notaries or Indonesian land law. Foreigners cannot hold Hak Milik; only leases (Hak Sewa) and similar rights are in scope.



Full spec: `00-shared-spec.md`. That file is the source of truth for status names, function names, events, and data shapes. \*\*Do not change these without asking me first\*\*, because the UI and frontend teammates depend on them.



\## How to work with me



\- \*\*Ask before acting.\*\* Propose a plan or file layout first and wait for my OK before writing code, installing packages, running deploys, or deleting anything.

\- \*\*Do not hallucinate.\*\* If you are unsure about something (chain ID, RPC URL, explorer URL, faucet, package versions, Monad-specific behavior), say so and check the Monad skills or official docs instead of guessing.

\- \*\*Use up-to-date sources.\*\* For Monad specifics, use the installed Monad skills (https://skills.devnads.com/) and official docs. Verify before stating.

\- Keep answers short and concrete. Reply in Indonesian unless I write in English. Code, identifiers, and comments in English.

\- Be critical. If a design choice is weak or overclaims, tell me.



\## Scope (MVP only)



In scope: `registerLease`, anti-double-lease, `challenge` with bond, `resolve`, `finalize`, `cancel`, `expire`, public dashboard, notary audit trail, deploy + verify on Monad Testnet.



Out of scope (roadmap only): stake/slashing, ZK, real BPN integration, NFT/ERC-1155 tokens, real multisig, challenging an already-Leased lease.



Only features that actually work should be announced. The rubric requires all announced functions to work.



\## Contract rules



\- Solidity, OpenZeppelin `AccessControl`, roles: `NOTARY`, `RESOLVER`, `ADMIN`.

\- Status enum order: `0 Available, 1 PendingFinalization, 2 Leased, 3 Disputed, 4 Cancelled, 5 Expired`.

\- `registerLease` must revert unless status is Available (Cancelled/Expired count as Available).

\- A dismissed challenge returns to Pending with the \*\*original\*\* deadline, never reset.

\- Challenge cap per land per lease: 3. Challenge window and bond are admin-settable parameters (demo window about 2 minutes).

\- Custom errors, checks-effects-interactions, reentrancy protection on anything that moves ETH.

\- No upgradeability, no unnecessary dependencies.

\- Events and function signatures must match `00-shared-spec.md` exactly.

\- Every behavior needs a test. Run tests before any deploy.



\## Security and secrets (repo is PUBLIC)



\- \*\*Never commit private keys.\*\* My dummy testnet key is in `privatekey.txt`. It must be in `.gitignore` along with `.env`.

\- Never print, log, echo, or paste the key contents anywhere (terminal output, chat, README, commit messages).

\- Never read the key file unless I explicitly ask for a deploy step. Prefer reading it into an environment variable at deploy time.

\- Before every commit, check `git status` and make sure no secrets are staged.

\- This wallet is testnet-only. Never use it with real funds.

\- AI-generated code must be reviewed by me before it is treated as ready. Highlight anything security-sensitive (bond handling, access control, state transitions).



\## Privacy



\- No real NIK/KTP or personal data anywhere: code, tests, seed data, README, screenshots.

\- Demo data is fictional: lands `LAND-001`, `LAND-002`, `LAND-003`, two demo notaries.

\- `landId` is a hash of an internal registration code, never a raw address or ID number.



\## Honesty requirements (for README, UI, pitch)



State these plainly and never overclaim:



\- The resolver is a simulated court/BPN decision for the demo.

\- BPN verification is mocked.

\- The system cannot detect bribery automatically; it provides transparency and a challenge window.

\- Demo data is fictional.



\## Suggested structure



```

contracts/     Solidity sources

test/          contract tests

script/        deploy + seed scripts

frontend/      Next.js app (owned by teammate)

00-shared-spec.md

DEPLOYMENTS.md   address, chain, date (create after deploy)

README.md        live URL, contract address, run-it-yourself steps

```



\## Rubric checklist (400 points, locks 16:45)



\- Basic: public repo, README with live URL + contract address, contract on Monad Testnet, publicly hosted.

\- Working: all announced functions work, live on-chain transaction in the demo, contract verified on the explorer, someone else can run it from the README.

\- Build in public: post on X/LinkedIn tagging @monad, @monad\_dev, @geeky\_kartikey; demo video 30s+; creative ad video; 5K+ views collectively.

\- Bonus: mainnet (note: demo data is mock), custom domain, product-market fit, revenue strategy, innovation.



\## Definition of done for the contract



\- \[ ] All tests pass

\- \[ ] Manual review done by me (double-lease, bond refund vs forfeit, role checks)

\- \[ ] Deployed to Monad Testnet, address recorded in `DEPLOYMENTS.md`

\- \[ ] Source verified on the explorer

\- \[ ] Roles granted to demo wallets (2 notaries, 1 resolver, 1 admin)

\- \[ ] Demo parameters set (short window, small bond) and demo lands seeded

\- \[ ] Address, ABI, and demo wallet addresses sent to the frontend teammate

