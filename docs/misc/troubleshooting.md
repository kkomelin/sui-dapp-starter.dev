---
sidebar_position: 3
---

# Troubleshooting

If you have any issue with the starter, first scan this page, then check our [issue queue](https://github.com/kkomelin/sui-dapp-starter/issues) for similar issues.
If nothing found, please [create a new issue](https://github.com/kkomelin/sui-dapp-starter/issues/new) and/or ask for help on [Discord](https://discord.com/invite/HuDPpXz4Hx).

## MacOS

### Error: Failed to download or extract precompiled binary for devnet
If you run `localnet start` and receive the "Failed to download or extract precompiled binary" error.

Open `~/suibase/workdirs/localnet/suibase.yaml` and set Sui binaries version to a previous one:

```
force_tag: "devnet-v1.24.0"
```

If it doesn’t work, try setting:

```
precompiled_bin=false
```

_It will force Suibase to compile Sui binaries from sources._

Another option which someone reported working is:

```bash
localnet build
```

### Could not start Local Sui Explorer

```
$ pnpm localnet:explorer:start
$ local-sui-explorer start
Command failed with exist code 1.
```

Try installing Docker as non-Root user or change permissions for docker config files to be accessible for a non-Root user.


---

Didn't find your issue? [Report it to us ->](https://github.com/kkomelin/sui-dapp-starter/issues/new)
