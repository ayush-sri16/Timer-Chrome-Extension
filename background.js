chrome.alarms.create({
    periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener((alarm) => {
    chrome.storage.local.get(["Timer", "isRunning"], (res) => {
        const time = res.Timer ?? 0;
        const isRunning = res.isRunning ?? true
        if (!isRunning) {
            return
        }
        chrome.storage.local.set({
            Timer: time + 1,
        });
        chrome.action.setBadgeText({
            text: `${time + 1}`,
        });
    });
});