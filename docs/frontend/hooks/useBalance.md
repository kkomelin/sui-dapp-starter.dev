---
sidebar_position: 2
---

# useBalance()

The `useBalance()` hook lets you request SUI balance for current user address on the currently active network.

It's possible to request the balance once or on a regular basis.

## Usage

### One-time request

```ts title="MyComponent.tsx"
const { balance } = useBalance()
// or
const { balance } = useBalance({ 
  autoRefetch: false 
})
```

### On demand

```ts title="MyComponent.tsx"
const { balance, error, refetch } = useBalance()
refetch()
```

### Regular update

```ts title="MyComponent.tsx"
const { balance } = useBalance({ 
  autoRefetch: true, 
  autoRefetchInterval: 3000 
})
```

Where `autoRefetchInterval` is in milliseconds. Default value is 3000 milliseconds (3 seconds).

## Used in

[\<Balance \/\>](../components/Balance.md)
