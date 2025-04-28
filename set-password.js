// Saves options to chrome.storage

const LS = {
    getAllItems: () => chrome.storage.local.get(),
    getItem: key => chrome.storage.local.get(key)[key],
    setItem: (key, val) => chrome.storage.local.set({[key]: val}),
    removeItems: keys => chrome.storage.local.remove(keys),
  };


function save_options() {

  var old = document.getElementById('old').value;
  var newPassVal = document.getElementById('new').value;
  document.getElementById('note').style.display='block';
 
   if(old == ""  || newPassVal =="" ){
	 
  document.getElementById('note').style.display='block';
  document.getElementById('note').innerHTML='enter both fields';
  }
  
  
  else if(newPassVal == old){
	  
	 
	  
    chrome.storage.local.set({ key: newPassVal }, () => {
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
