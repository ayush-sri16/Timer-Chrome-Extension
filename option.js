const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {
    chrome.storage.sync.set(
        {
            yourName: nameInput.value,
        },
        () => {
            
        }
    );
});

chrome.storage.sync.get(["yourName"], (result) => {
    nameInput.value = result.yourName ?? "???";
});
