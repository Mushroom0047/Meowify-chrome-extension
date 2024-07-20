document.getElementById('meowButton').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['libs/confetti.browser.min.js', 'content.js']
  });
});
