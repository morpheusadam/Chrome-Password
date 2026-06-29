// Saves the browser-lock password to chrome.storage.
// SECURITY: the password is hashed with SHA-256 before being stored, so the
// raw password is never persisted to disk.

const LS = {
    getAllItems: () => chrome.storage.local.get(),
    getItem: key => chrome.storage.local.get(key)[key],
    setItem: (key, val) => chrome.storage.local.set({[key]: val}),
    removeItems: keys => chrome.storage.local.remove(keys),
  };

// Returns the lowercase hex SHA-256 digest of the given string.
async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

async function save_options() {

  var old = document.getElementById('old').value;
  var newPassVal = document.getElementById('new').value;
  document.getElementById('note').style.display='block';

   if(old == ""  || newPassVal =="" ){

  document.getElementById('note').style.display='block';
  document.getElementById('note').innerHTML='enter both fields';
  }


  else if(newPassVal == old){

    // Store only the hash, never the plaintext password.
    const hashed = await sha256(newPassVal);
    chrome.storage.local.set({ key: hashed }, () => {
    });
	  document.getElementById('note').innerHTML='password saved';
	  document.getElementById('old').value='';
	  document.getElementById('new').value='';
	  document.getElementById('save').style.display='none';

    chrome.windows.getCurrent({}, function(window) {
        chrome.windows.remove(window.id);
    });

  }
  else{

	  document.getElementById('note').innerHTML='both passwords need to match';

  }


}

document.getElementById('save').addEventListener('click',save_options);
