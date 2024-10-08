---
position: 2
---

# Walrus Sites (experimental, testnet only)

:::warning

Please note that Walrus is in active development, so some things can change or not work.

:::

To deploy the frontend part of a Sui dApp Starter project to Sui through Walrus Sites, do the following:

## Preparation

### 1. Activate testnet network

```bash
pnpm testnet:start
```

### 2. Install Walrus 

Follow the [official Walrus setup guide - installation section](https://mystenlabs.github.io/walrus-docs/usage/setup.html#installation).

### 3. Install Walrus Site Builder

Follow the [official Walrus Site Builder setup guide](https://mystenlabs.github.io/walrus-docs/walrus-sites/tutorial-install.html).

## Deployment

```bash
pnpm frontend:deploy:walrus
```

## Configuration

Walrus Sites configuration for the app is stored in `packages/frontend/walrus-sites.yaml`.

## Current Limitations

1. Walrus Sites doesn't support the icons declared in the Web Manifest file.

2. Walrus Sites doesn't support Service Workers in the root scope because it sets its own root-scoped service worker.

## Troubleshooting

1. Can't find `site-builder`

If you installed `site-builder`, you need to add its path to PATH or add a symbolic link in `~/.local/bin/`

2. Walrus Site Builder can't find configuration

You probably need to add `~/.walrus/client_config.yaml` config.

3. TBC

## Links

* [Walrus setup guide](https://mystenlabs.github.io/walrus-docs/usage/setup.html)
* [Installing the Walrus site builder](https://mystenlabs.github.io/walrus-docs/walrus-sites/tutorial-install.html)
* [Publishing a Walrus Site](https://mystenlabs.github.io/walrus-docs/walrus-sites/tutorial-publish.html)
