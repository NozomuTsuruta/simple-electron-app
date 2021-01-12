import { BrowserWindow, app, shell } from "electron";

app.on("ready", async () => {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
    },
  });

  mainWindow.webContents.on("new-window", (event, url) => {
    event.preventDefault();
    shell.openExternal(url);
  });

  /** 表示したいサイトのURL */
  const url = "https://next-pwa-sample.vercel.app/";

  mainWindow.loadURL(url);
});

app.on("window-all-closed", app.quit);
