// Verifies the entered password against the stored SHA-256 hash.

// Returns the lowercase hex SHA-256 digest of the given string.
async function sha256(text) {
    const data = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

function save_options() {

    chrome.storage.local.get(['key'], async (result) => {
        var actual = result.key;
        // Hash the entered password and compare hashes (constant-format compare).
        var entered = await sha256(document.getElementById('old').value);

        if(entered == actual) {
            chrome.runtime.sendMessage({ action: "removeListener" }, (response) => {
                if (response.success) {
                    //console.log("Listener removed successfully.");
                }
            });
         }
         else {
            document.getElementById('note').style.display='block';
            document.getElementById('note').innerHTML='Invalid Password';
         }
    });

}


document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('old');
    const saveButton = document.getElementById('save');

    // Focus on the input box when the page loads
    inputField.focus();

    // Trigger the save button click on pressing Enter
    inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            saveButton.click();
        }
    });

    // Add click event listener to the save button
    saveButton.addEventListener('click', save_options);
});
