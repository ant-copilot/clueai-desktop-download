document.addEventListener('DOMContentLoaded', () => {
    console.log('ClueAI Desktop loaded successfully');

    // Example usage of exposed API
    if (window.electronAPI) {
        console.log('Electron version:', window.electronAPI.getVersion());
    }
});
