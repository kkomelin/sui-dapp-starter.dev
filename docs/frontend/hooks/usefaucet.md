---
sidebar_position: 3
---

# useFaucet()

The `useBalance()` hook lets you request SUI balance for current user address on the currently active network.

It's possible to request the balance once or on a regular basis.

## Usage

### Fund current address

```ts title="MyComponent.tsx"
const { fund } = useFaucet()
fund()
```

If a wallet is not connected, an error message will be displayed.

### Fund an arbitrary address

```ts title="MyComponent.tsx"
const { fund } = useFaucet()
fund('0xADDRESS')
```

## Used in

[\<Faucet \/\>](../components/faucet.md)
