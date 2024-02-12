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
| NW.js      | Electron.js uses a separate renderer process, while NW.js integrates Chromium directly within Node.js. | Chromium rendering engine and Node.js runtime run within the same process.                                         | Resources shared within the same process may lead to suboptimal resource utilization and performance degradation.                                                    |
| Qt         | Tailored for C++ development.                                                                          | More flexibility and performance due to compiled languages and native UI components.                               | Steeper learning curve for developers primarily familiar with web technologies.                                                                                      |
| JavaFX     | Tailored for Java development.                                                                         | Develop highly portable applications that can run on any platform with a Java Runtime Environment (JRE) installed. | Steeper learning curve for developers primarily familiar with web technologies.|

---

# Where Would You Use It?

- **Cross-Platform Desktop Applications:**
  - That need to run consistently across different operating systems.
- **Web Technology Stack:**
  - Developer teams with skills in HTML, CSS, and JavaScript.
- **Integration with Node.js Ecosystem:**
  - Applications can have server-side logic, access to system resources, or interaction with external services.
- **Performance Requirements:**
  - Can have performance overhead compared to native applications or tools like Qt and JavaFX.
  - If the benefits of using web technologies and Node.js integration outweigh the performance considerations, Electron.js can be a suitable choice.

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

- **Cross-Platform Compatibility:**
  - Used across different operating systems with a consistent user experience.
- **Web Technologies and Modern UIs:**
  - Create modern, responsive, and visually appealing user interfaces using frameworks like React to facilitate communication and collaboration features.
- **Real-Time Communication:**
  - Node.js on the backend for communication protocols, user sessions, and real-time data synchronization.
- **Access to System Resources:**
  - Node.js integration enables features like file uploading/downloading, network connectivity checks, and desktop notifications.
