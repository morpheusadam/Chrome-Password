// Saves options to chrome.storage


function save_options() {

    chrome.storage.local.get(['key'], (result) => {
        //console.log('Value retrieved:', result.key);
        var actual = result.key
        var entered = document.getElementById('old')
            .value;

        if (entered == actual) {
            chrome.runtime.sendMessage({
                action: "removeListener"
            }, (response) => {
                if (response.success) {
                    //console.log("Listener removed successfully.");
                }
            });
        } else {
            document.getElementById('note')
                .style.display = 'block';
            document.getElementById('note')
                .innerHTML = 'Invalid Password';
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