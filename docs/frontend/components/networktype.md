---
sidebar_position: 2
---

# NetworkType

The NetworkType component renders the name of the currently selected network or `disconnected` if no wallet connected.

It automatically re-fetches the network type every 3 seconds.

Every network is displayed in its own color:
- disconnected: tomato
- localnet/devnet/testnet: amber
- mainnet: green

:::note

The user wallet is the single point of truth and the only way to switch the network now is through wallet settings.

:::


## Usage

```tsx title="MyComponent.tsx"
<NetworkType />
```

## Uses

[useNetworkType()](../hooks/usenetworktype.md)
