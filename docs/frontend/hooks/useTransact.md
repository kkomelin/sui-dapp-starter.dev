---
sidebar_position: 1
---

# useTransact()

The `useTransact()` hook lets you perform a transaction on the Sui network.

When user triggers a transaction, we display a notification to confirm that transaction in their wallet.
Once user confirmed or rejected the transaction, we convert that notification to a success message or error message.
The success message will have a link to a Sui Explorer depending on the active network.

In case of error, we additionally print full error message in the browser console.

## Usage

```ts title="MyComponent.tsx"
const { transact: greet } = useTransact({
  onSuccess: (response: SuiTransactionBlockResponse) => {
    // Optionally react on success, e.g. refetch dependent queries.
  },
  onError: (e: Error) => {
    // Optionally react on error.
  }
})

const prepareTransaction = (packageId: string, objectId: string, name: string) => {
  const txb = new TransactionBlock()
  txb.moveCall({
    arguments: [txb.object(objectId), txb.pure.string(name), txb.object('0x8')],
    target: `${packageId}::greeting::set_greeting`,
  })
  return txb
}

greet(prepareTransaction(packageId, objectId, name))
```

## Uses

[useSignAndExecuteTransactionBlock()](https://sdk.mystenlabs.com/dapp-kit/wallet-hooks/useSignAndExecuteTransactionBlock) from @mysten/dapp-kit
