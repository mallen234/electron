const { app, BrowserWindow } = require("electron");
const path = require("path"); // Add this line

// app.on("ready", () => {
//   app.applicationSupportsSecureRestorableState = function () {
//     return true;
//   };
// });
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});
