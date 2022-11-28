
const { contextBridge, ipcRenderer } = require('electron')

const IPC_API = {
    ping: (message) => ipcRenderer.send("ping", message)
}

const gameinfo = {
    
}

// window.api
contextBridge.exposeInMainWorld("api", IPC_API)