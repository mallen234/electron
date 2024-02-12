---
marp: true
---

## Electron.js

- Front end framework developed to produce desktop apps
- Uses node.js and chromium
<<<<<<< HEAD

---

# What is Electron.js?

- Electron.js is an open-source framework developed by GitHub designed to run on multiple operating systems.
- It essentially wraps web technologies into native applications, enabling developers to create desktop applications with familiar web development tools and workflows.
- Native applications are software applications developed specifically for a particular operating system.
- Electron.js has gained popularity due to its:
  - Ease of use.
  - Extensive community support.
  - Ability to leverage existing web development skills to build powerful desktop applications.
- Notable applications built with Electron.js include Slack, Visual Studio Code, and Discord.

=======
>>>>>>> f4eb97020544dd5c66952211444f0c29e18a10ad
---

# Key Features

- **Cross-Platform Compatibility:**

  - Allows developers to build desktop applications that run on multiple operating systems.

- **Uses Familiar Web Technologies:**

  - Developers can use HTML, CSS, and JavaScript to create desktop applications.

- **Enables Development of Native UI Components:**

  - Provides access to native user interface components through HTML, CSS, and platform-specific APIs.

- **Improved functionality via Node.js Integration:**

  - Integrates Node.js runtime, enabling applications to interact with the file system, network, and other system resources.
  - Can implement features that require server-side logic or system-level access.

- **Wide Adoption and Community Support:**
  - Large and active community contributing plugins, libraries, and resources to extend its capabilities.

---
<<<<<<< HEAD

| Tool Name | Difference                                                                                             | Advantage                                                                                                          | Disadvantage                                                                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NW.js     | Electron.js uses a separate renderer process, while NW.js integrates Chromium directly within Node.js. | Chromium rendering engine and Node.js runtime run within the same process.                                         | Resources shared within the same process may lead to suboptimal resource utilization and performance degradation.                                                    |
| Qt        | Tailored for C++ development.                                                                          | More flexibility and performance due to compiled languages and native UI components.                               | Steeper learning curve for developers primarily familiar with web technologies.                                                                                      |
| JavaFX    | Tailored for Java development.                                                                         | Develop highly portable applications that can run on any platform with a Java Runtime Environment (JRE) installed. | Steeper learning curve for developers primarily familiar with web technologies. Provides rich graphical user interfaces (UIs) with a set of UI components and tools. |
=======
| Competitor | Difference | Advantage                                         | Disadvantage                                             |
|-----------|------------|---------------------------------------------------|----------------------------------------------------------|
| NW.js     | Electron.js uses a separate renderer process, while NW.js integrates Chromium directly within Node.js. | Chromium rendering engine and Node.js runtime run within the same process. | Resources shared within the same process may lead to suboptimal resource utilization and performance degradation. |
| Qt        | Tailored for C++ development.                     | More flexibility and performance due to compiled languages and native UI components. | Steeper learning curve for developers primarily familiar with web technologies. |
| JavaFX    | Tailored for Java development.                    | Develop highly portable applications that can run on any platform with a Java Runtime Environment (JRE) installed. | Steeper learning curve for developers primarily familiar with web technologies. Provides rich graphical user interfaces (UIs) with a set of UI components and tools. |
>>>>>>> f4eb97020544dd5c66952211444f0c29e18a10ad

---

# Where Would You Use It?

- **Cross-Platform Desktop Applications:**
  - That need to run consistently across different operating systems.
- **Web Technology Stack:**
  - Developers can leverage their existing skills in HTML, CSS, and JavaScript.
- **Integration with Node.js Ecosystem:**
  - Applications can have server-side logic, access to system resources, or interaction with external services.
- **Performance Requirements:**
  - Can have performance overhead compared to native applications or frameworks like Qt and JavaFX.
  - If the benefits of using web technologies and Node.js integration outweigh the performance considerations, Electron.js can be a suitable choice.

---

# Case Study: A Collaboration Tool with Real-Time Communication Features (e.g., Slack)

- **Cross-Platform Compatibility:**
  - Used across different operating systems with a consistent user experience for all.
- **Web Technologies and Modern UIs:**
  - Create modern, responsive, and visually appealing user interfaces to facilitate communication, file sharing, and collaboration features.
  - Frameworks like React can be used to build dynamic UIs with ease.
- **Real-Time Communication:**
  - Integrates well with real-time communication libraries and frameworks.
  - Features like chat messaging, video conferencing, screen sharing, and collaborative document editing.
  - Node.js on the backend for communication protocols, user sessions, and real-time data synchronization.
- **Access to System Resources:**
  - Collaboration tools may need to access system resources such as the file system, network, and notifications.
  - Node.js integration enables features like file uploading/downloading, network connectivity checks, and desktop notifications.

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
