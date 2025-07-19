document.getElementById("saveBtn").addEventListener("click", () => {
  const userData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    linkedin: document.getElementById("linkedin").value,
    portfolio: document.getElementById("portfolio").value,
    resume: document.getElementById("resume").value,
    currentJob: document.getElementById("currentJob").value,
    experience: document.getElementById("experience").value,
    skills: document.getElementById("skills").value,
    location: document.getElementById("location").value,
    about: document.getElementById("about").value,
  };

  chrome.storage.sync.set({ userData }, () => {
    alert("Job seeker data saved!");
  });
});

// Load existing saved data on popup open
window.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get("userData", ({ userData }) => {
    if (!userData) return;

    document.getElementById("name").value = userData.name || "";
    document.getElementById("email").value = userData.email || "";
    document.getElementById("phone").value = userData.phone || "";
    document.getElementById("linkedin").value = userData.linkedin || "";
    document.getElementById("portfolio").value = userData.portfolio || "";
    document.getElementById("resume").value = userData.resume || "";
    document.getElementById("currentJob").value = userData.currentJob || "";
    document.getElementById("experience").value = userData.experience || "";
    document.getElementById("skills").value = userData.skills || "";
    document.getElementById("location").value = userData.location || "";
    document.getElementById("about").value = userData.about || "";
  });
});

// Auto-Fill Button Logic (Inject content.js)
document.getElementById("fillBtn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["content.js"]
    });
  });
});
