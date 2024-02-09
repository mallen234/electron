---
marp: true
---

## Electron.js

- Front end framework developed to produce desktop apps
- Uses node.js and chromium

---

## Tools used alongside Electron

- React.js / Vue.js
- Electron React Boilerplate / Vue Boilerplate
- Electron Forge
- Electron Builder
- Electron Packager
- Electron Debug

---

## Deployment

1. Initialise your project and install Electron

```
npm install electron
```

2. Create a js file or react.js

3. Package your application

- Electron Packager

```
electron-packager <directory> <appname> --platform=<platform> --arch=<architecture> [optional flags]
```

    E.g.

```
electron-packager . MyApp --platform=win32 --arch=x64
```

- Electron Builder

  - Configure you packagaing : package.json

  - Run the packaging

```
npx electron-builder
```

---

## Examples of applications that used Electron

- Microsoft Teams
- Slack
- VSCode

- Discord
- 1password
- Notion
- Obsidian
- Skype
