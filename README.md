# Sui dApp Starter Site

This website is built using [Docusaurus](https://docusaurus.io/).

### Installation

```
$ pnpm install
```

### Development

```
$ pnpm start
```

### Build

```
$ pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true pnpm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> pnpm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
