---
sidebar_position: 2
---

# Faucet

The `Faucet` component is represented by a button that lets you fund your current address on the currently selected test network.

The supported networks are **localnet**, **devnet** and **testnet**.

The granted amount is:
- localnet: 100 SUI
- devnet: 10 SUI
- testnet: 1 SUI

:::note

There is a certain limit on the number of times you can request funds from **devnet** and **testnet**. 
If you reached the limit, wait for 24 hours, and in the meanwhile use the `#devnet-faucet` and `#testnet-faucet` channels of the [official Sui Discord](https://discord.gg/sui).

:::

## Usage

```tsx title="MyComponent.tsx"
<Faucet />
```

## Uses

[useFaucet()](../hooks/useFaucet.md)
