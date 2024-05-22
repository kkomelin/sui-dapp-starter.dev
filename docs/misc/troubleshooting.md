---
sidebar_position: 1
---

# Troubleshooting

A collection of solutions for user-reported issues.

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
