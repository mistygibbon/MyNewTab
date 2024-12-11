    // Function to save the input to localStorage
    function setItem(userInput) {
        console.log("OK",userInput);
      }

      function onError(error) {
        console.log(error);
      }

    function saveToLocalStorage() {
        const userInput = document.getElementById("user-input").value;
        store = {"userInput": userInput};
        browser.storage.local.set({"userInput": userInput}).then(setItem(userInput), onError);;
        // displaySavedMessage();
      }
  
      // Function to display the saved message from localStorage
      function displaySavedMessage() {
        savedTextElement = document.getElementById("saved-text");
        const savedText = browser.storage.local.get("userInput", (savedText)=>{document.getElementById("user-input").value = savedText["userInput"];console.log(savedText)});
  
        // if (savedText) {
        //   savedTextElement.textContent = savedText;
        // } else {
        //   savedTextElement.textContent = "No saved message found.";
        // }
      }

      document.getElementById("user-input").addEventListener("input", saveToLocalStorage);

      browser.storage.local.onChanged.addListener(displaySavedMessage);
  
      // Event listener for the save button
    //   document.getElementById("save-button").addEventListener("click", saveToLocalStorage);
  
      // Call the displaySavedMessage function when the page loads
      window.onload = function () {
        displaySavedMessage();
      };