// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//author-- eswar yaga
let activeListener;
let closedTabs = []; // Array to store closed tabs
let lastOptionsId = null;
chrome.runtime.onInstalled.addListener(async function(details) {
    await chrome.tabs.create({
        url: "options.html"
    });
});
chrome.runtime.onStartup.addListener(async function() {
    chrome.storage.local.get(['key'], (result) => {
        //console.log('Value retrieved:', result.key);
        if (result.key) {
            closeAllTabs();
            chrome.tabs.create({
                url: chrome.runtime.getURL("options-1.html")
            }, (tab) => {
                // The 'tab' parameter contains the newly created tab's details
                //console.log("New tab ID:", tab.id);
                let currentWindowId = tab.id;
                lastOptionsId = tab.id;
                activeListener = createOnTabActivated(currentWindowId);
                chrome.tabs.onActivated.addListener(activeListener);
                chrome.tabs.onUpdated.addListener(onTabUpdated);
            });
        } else {
            chrome.tabs.create({
                url: chrome.runtime.getURL("options.html")
            });
        }
    });
});
function onTabUpdated(tabId, changeInfo, tab) {
    if (tabId === lastOptionsId) {
        if (changeInfo.url && changeInfo.url !== chrome.runtime.getURL("options-1.html")) {
            //console.log(`Closing options-1.html tab because URL changed: ${changeInfo.url}`);
            chrome.tabs.remove(tabId); // Close the options tab
        }
    }
}
function createOnTabActivated(currentWindowId) {
    return function(activeInfo) {
        //console.log('Tab activated:', activeInfo);
        //console.log('Additional arguments:', currentWindowId);
        chrome.tabs.get(activeInfo.tabId, (tabs) => {
            if (tabs.id !== currentWindowId) {
                // Close the previous window if it's different from the new active tab's window
                chrome.windows.getCurrent({}, function(window) {
                    chrome.windows.remove(window.id);
                });
            }
        });
    };
}
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "removeListener") {
        if (activeListener) {
            reopenClosedTabs();
            chrome.tabs.onActivated.removeListener(activeListener);
            chrome.tabs.onUpdated.removeListener(onTabUpdated);
            //console.log('Listener removed');
            activeListener = null; // Clear the reference after removing
        }
        sendResponse({
            success: true
        });
    }
});
function closeA() {
    chrome.windows.getAll({}, function(window) {
        for (var i = 0; i < window.length; i++) {
            chrome.windows.remove(window[i].id);
        }
    });
}
function closeAllTabs() {
    chrome.tabs.query({}, (tabs) => {
        closedTabs = tabs
            .filter(tab => tab.url !== chrome.runtime.getURL("options-1.html"))
            .filter(tab => tab.url !== chrome.runtime.getURL("options.html"))
            .map(tab => ({
                url: tab.url,
                windowId: tab.windowId,
                index: tab.index,
            }));
        // Close all tabs
        tabs.forEach(tab => {
            chrome.tabs.remove(tab.id);
        });
        //console.log('All tabs closed and stored:', closedTabs);
    });
}
function reopenClosedTabs() {
    if (closedTabs.length === 0) {
        chrome.tabs.query({
            url: chrome.runtime.getURL("options-1.html")
        }, (tabs) => {
            tabs.forEach((tab) => {
                chrome.tabs.remove(tab.id, () => {
                    //console.log('Closed options.html tab with ID:', tab.id);
                });
            });
        });
        // No tabs to reopen, open about:blank
        chrome.tabs.create({
            url: "about:blank"
        }, (newTab) => {
            //console.log('Opened about:blank:', newTab.id);
        });
    } else {
        closedTabs.forEach(tab => {
            chrome.tabs.create({
                url: tab.url,
                windowId: tab.windowId,
                index: tab.index
            }, (newTab) => {
                //console.log('Reopened tab:', newTab.id);
            });
        });
        chrome.tabs.query({
            url: chrome.runtime.getURL("options-1.html")
        }, (tabs) => {
            tabs.forEach((tab) => {
                chrome.tabs.remove(tab.id, () => {
                    //console.log('Closed options.html tab with ID:', tab.id);
                });
            });
        });
    }
    closedTabs = null;
}