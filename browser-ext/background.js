/**
 * === Handle Toggling of Button Action based on domain match ===
 * This is only necessary because we are using  `page_action` instead of `browser_action`
 */
chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {
                            hostContains: 'linkedin.com'
                        }
                    })
                ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
            }
        ]);
    });
});

// Inject content script when a LinkedIn page is loaded
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes('linkedin.com')) {
        chrome.tabs.executeScript(tabId, { file: 'main.js' });
    }
});

chrome.commands.onCommand.addListener((command) => {
    if (command === 'fill-connection-template') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'fillConnectionTemplate' });
        });
    }
});
