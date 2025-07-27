import { app, BrowserWindow, Menu, MenuItemConstructorOptions, shell } from 'electron';
import * as path from 'path';

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));

  // Optional: Open DevTools on startup
  // win.webContents.openDevTools();
}

// Full menu configuration
// macOS-specific menu adjustments
const isMac = process.platform === 'darwin'

// define menu template with proper typing and const assertions
const menuTemplate: MenuItemConstructorOptions[] = [
  ...(isMac
    ? [{
        label: app.name,
        submenu: [
          { role: 'about' as const },
          { type: 'separator' as const },
          { role: 'services' as const },
          { type: 'separator' as const },
          { role: 'hide' as const },
          { role: 'hideOthers' as const },
          { role: 'unhide' as const },
          { type: 'separator' as const },
          { role: 'quit' as const }
        ]
      }]
    : []),
  {
    label: 'File',
    submenu: [
      isMac ? { role: 'close' as const } : { role: 'quit' as const }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' as const },
      { role: 'redo' as const },
      { type: 'separator' as const },
      { role: 'cut' as const },
      { role: 'copy' as const },
      { role: 'paste' as const },
      ...(isMac
        ? [
            { role: 'pasteAndMatchStyle' as const },
            { role: 'delete' as const },
            { role: 'selectAll' as const },
            { type: 'separator' as const },
            {
              label: 'Speech',
              submenu: [
                { role: 'startSpeaking' as const },
                { role: 'stopSpeaking' as const }
              ]
            }
          ]
        : [
            { role: 'delete' as const },
            { type: 'separator' as const },
            { role: 'selectAll' as const }
          ])
    ]
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload' as const },
      { role: 'forceReload' as const },
      { role: 'toggleDevTools' as const },
      { type: 'separator' as const },
      {
        role: 'resetZoom',
        accelerator: 'CmdOrCtrl+0' // ← ensures Ctrl+0 works
      },
      {
        role: 'zoomIn',
        accelerator: 'CmdOrCtrl+=' // ← ensures Ctrl + works
      },
      {
        role: 'zoomOut',
        accelerator: 'CmdOrCtrl+-' // ← ensures Ctrl - works
      },
      { type: 'separator' as const },
      { role: 'togglefullscreen' as const }
    ]
  },
  {
    label: 'Window',
    submenu: [
      { role: 'minimize' as const },
      { role: 'zoom' as const },
      ...(isMac
        ? [
            { type: 'separator' as const },
            { role: 'front' as const },
            { type: 'separator' as const },
            { role: 'window' as const }
          ]
        : [
            { role: 'close' as const }
          ])
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click: async () => {
          await shell.openExternal('https://electronjs.org');
        }
      }
    ]
  }
];

app.whenReady().then(() => {

  // Set custom application menu
  const menu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(menu)

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
