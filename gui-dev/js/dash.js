// JS file for pit facing dashboard //
// Do not touchy unless you know what your doing <3 //

ipcRenderer.on('gameinfo', function (evt, message) {
    console.log(message); // Returns: {'SAVED': 'File Saved'}
});

function pingIPC(message) {
    console.log("Pinging IPC API...")
    window.api.ping(message)
}