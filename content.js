alert("Auto-fill script running!");

chrome.storage.sync.get("userData", ({ userData }) => {
  if (!userData) return;

  const tryFill = (selector, value) => {
    const input = document.querySelector(selector);
    if (input) input.value = value;
  };

  // tryFill('input[name="name"]', userData.name);
  tryFill(['input[name="g4072-fullname"]'], userData.name);
  tryFill('input[name="email"]', userData.email);
  tryFill('input[type="email"]', userData.email);
  tryFill('input[name="phone"]', userData.phone);
  tryFill('input[type="tel"]', userData.phone);
  tryFill('input[name="linkedin"]', userData.linkedin);
  tryFill('input[name="portfolio"]', userData.portfolio);
  tryFill('input[name="resume"]', userData.resume);
  tryFill('input[name="currentJob"]', userData.currentJob);
  tryFill('input[name="experience"]', userData.experience);
  tryFill('input[name="skills"]', userData.skills);
  tryFill('input[name="location"]', userData.location);
  tryFill('textarea[name="about"]', userData.about);
});

