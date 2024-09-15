document.getElementById('applyBtn').addEventListener('click', function () {
    const selectedColor = document.getElementById('colorPicker').value;
  
    // Inject a content script to change the background color of the current tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: changeBackgroundColor,
        args: [selectedColor]
      });
    });
  });
  
  // Function to change the background color on the page
  function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }

  

  