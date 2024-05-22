---
sidebar_position: 2
---

# Advantages & Comparison

Comparison with other starters and advantages over them.

## Improvements over some frontend-only starters

- Monorepo project with a backend package, which includes a demo Move contract with automated tests
- A cli tool for easy project creation [create-sui-dapp](https://github.com/kkomelin/create-sui-dapp)
- Automatic backend->frontend integration (your frontend knows about your deployed package automatically)
- Integrated [Local Sui Explorer](https://github.com/kkomelin/sui-explorer-local)

## Improvements over the [official Sui e2e starter template](https://github.com/MystenLabs/sui/tree/main/sdk/create-dapp)

- Separate project with contributor-friendly license (MIT) to easier use and contribute.
- Monorepo architecture with pnpm workspaces.
- VSCode plugin recommendations enabled.
- infra: Created [Local Sui Explorer](https://github.com/kkomelin/sui-explorer) based on the discontinued project by MystenLabs and adapted it to our local needs.
- infra: Created [Local Sui Explorer](https://github.com/kkomelin/sui-explorer-local) console management tool.
- frontend: Import alias "~~" to make the imports cleaner.
- frontend: Cleaner main.tsx with reactRender() function.
- frontend: SuiProvider to encapsulate all Sui-related providers.
- frontend: Tailwind CSS for easier styling with auto-ordering Tailwind classes through Prettier.
- frontend: Opinionated Prettier configuration to make code cleaner.
- frontend: Support for all networks (localnet, devnet, testnet, mainnet).
- frontend: Layout component to let developers focus on the app-specific UI.
- frontend: Support for dark/light theme switching.
- frontend: Implemented UI notifications, integrated with Local Sui Explorer.
- frontend: Developed several useful hooks and UI components: useNetworkType, NetworkType, useBalance, Balance, useFaucet, Faucet, NetworkSupportChecker.
- frontend: Added Firebase deployment configuration and commands.
- backend: Simplified network management commands via [Suibase](https://suibase.io/).
- backend: Added an On-Chain Randomness usage example.
- frontend/backend: A script to automatically copy the deployed package ID to the frontend app configuration after deployment.
