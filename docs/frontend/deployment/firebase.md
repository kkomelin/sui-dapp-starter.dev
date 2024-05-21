# Firebase

To deploy the frontend part of a Sui dApp Starter project, do the following:

### 1. Install Firebase Tools

```bash
pnpm add -g firebase-tools
```

### 2. Create a new project on Firebase

[Login to Firebase Console](https://console.firebase.google.com/) and create a new empty project.

### 3. Init your project

```bash
pnpm frontend:deploy:init
```

1) You will be asked to Login to Firebase.
2) Then select your newly created Firebase project from the list.  
3) Once you're asked for a project alias, enter `default`.

### 4. Deploy to Firebase

```bash
pnpm frontend:deploy
```

## Links

- [Get started with Firebase Hosting ](https://firebase.google.com/docs/hosting/quickstart)
