---
sidebar_position: 4
---

# useSynchronizedNetworkType()

The `useSynchronizedNetworkType()` hook lets you determine which network is currently active in the user wallet.

It's possible to request the network type once or on a regular basis.

If a wallet is not connected, the network type will be `undefined`.

:::note

The user wallet is the single point of truth and the only way to switch the network now is through wallet settings.

:::

## Usage

### One-time request

```ts title="MyComponent.tsx"
const { networkType } = useSynchronizedNetworkType()
// or
const { networkType } = useSynchronizedNetworkType({ 
  autoSync: false 
})
```

### On demand

```ts title="MyComponent.tsx"
const { networkType, synchronize } = useSynchronizedNetworkType()
synchronize()
```

### Regular update

```ts title="MyComponent.tsx"
const { networkType } = useSynchronizedNetworkType({ 
  autoSync: true, 
  autoSyncInterval: 3000 
})
```

Where `autoSyncInterval` is in milliseconds. Default value is 3000 milliseconds (3 seconds).

## Used in


[\<NetworkType \/\>](../components/NetworkType.md)
