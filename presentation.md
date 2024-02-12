---
marp: true
---

## Electron.js

- Front end framework developed to produce desktop apps
- Uses node.js and chromium

---

# Key Features

- **Cross-Platform Compatibility:**

  - Can build desktop applications that run on multiple operating systems.

- **Uses Familiar Web Technologies:**

  - HTML, CSS, and JavaScript

- **Development of Native UI Components:**

  - Provides access to native user interface components through platform-specific APIs.

- **Node.js Integration:**
  - Enables applications to interact with the file system and implement server-side logic.

---

| Competitor | Difference                                                                                             | Advantage                                                                                                          | Disadvantage                                                                                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NW.js      | NW.js integrates Chromium directly within Node.js. | Chromium rendering engine and Node.js runtime run within the same process.                                         | May lead to suboptimal resource allocation.                                                    |
| Qt         | Tailored for C++ development.                                                                          | More flexibility and performance.                               | Steeper learning curve for developers primarily familiar with web technologies.                                                                                      |
| JavaFX     | Tailored for Java development.                                                                         | Develop highly portable applications that can run on any platform with a Java Runtime Environment (JRE) installed. | Steeper learning curve for developers primarily familiar with web technologies.|

---

# Where Would You Use It?

- **Cross-Platform Desktop Applications**
- **Developers familiar with HTML, CSS, and JavaScrip**
- **Applications with server-side logic, access to system resources**
- **Performance Requirements:**
  - Can have performance overhead compared Qt and JavaFX.
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

---

## Packaging your application

- Electron Packager

```
electron-packager <directory> <appname> --platform=<platform> --arch=<architecture> [optional flags]
```

E.g.

```
electron-packager . MyApp --platform=win32 --arch=x64
```

- Electron Builder

  - Configure your packagaing : package.json

  - Run the packaging

```
npx electron-builder
```

---

## Examples of applications that used Electron

##

- Microsoft Teams
- Slack
- VSCode

##

- Discord
- 1password
- Notion
- Obsidian
- Skype

---

# Case Study: A Collaboration Tool with Real-Time Communication Features (e.g. Slack)

  - Used across different operating systems with a consistent user experience.
  - Create modern, responsive, and visually appealing user interfaces using frameworks like React to facilitate communication and collaboration features.
  - Node.js on the backend for communication protocols, user sessions, and real-time data synchronization.
  - Node.js integration enables features like file uploading/downloading, network connectivity checks, and desktop notifications.
