# autofill-chrome-tool
A lightweight Chrome extension that auto-fills repetitive web forms using saved user data. Built to save time and reduce manual input on job applications, contact forms, and more.

# AutoForm Magic – Smart Auto-Fill Extension for Job Seekers

AutoForm Magic is a Chrome extension that helps job seekers auto-fill repetitive job application forms with their saved information — saving time and reducing errors.

---

## Features

- Save your job-related details once and reuse them on any form.
- Smart auto-filling of common fields like name, email, phone, LinkedIn, portfolio, resume link, and more.
- Uses Chrome Sync Storage to persist data across browser sessions.
- One-click autofill for job application forms.
- Simple, clean UI styled with Tailwind CSS.

---

## Preview

🎥 Watch the demo video here: [Click to view AutoForm Magic in action](https://youtu.be/mVXAkEUJMoc)

---

## Technologies Used

- HTML, CSS (Tailwind)
- Vanilla JavaScript
- Chrome Extension APIs (`storage`, `activeTab`)
- Manifest V3

---

## Installation (Manual for Development)

1. Clone or download this repository.
2. Go to `chrome://extensions/` in your browser.
3. Enable **Developer Mode** (top right).
4. Click **Load unpacked** and select the project folder.
5. Pin the extension for easy access and start using it!

---

## How to Use

1. Click the **AutoForm Magic** icon in your browser.
2. Fill in your job seeker details (name, email, resume link, etc.).
3. Click **Save** to store them.
4. On any job application form, click **Auto-Fill**.
5. Fields will be automatically populated with your saved info!

---

## Permissions

This extension uses:

- `storage` — to save your data locally using Chrome Sync.
- `activeTab` — to inject autofill logic into the current form page.

**No data is collected or transmitted. Everything stays in your browser.**

---

## Example Test Form

Try testing on this sample form:  
[https://qavalidation.com/demo-form/](https://qavalidation.com/demo-form/)

---

## Known Limitations

- Works best with standard input fields (`name`, `email`, etc.).
- Forms with non-standard names or dynamic loading may require custom selectors.
- Resume upload is currently a URL only (file upload support planned).

---

## Roadmap & Ideas

- [ ] Resume file upload handling
- [ ] AI-based smart field detection
- [ ] Export/Import saved data
- [ ] Firefox extension compatibility

---

## License

MIT License — free to use, modify, and share.

---

## Acknowledgments

Built to help job seekers save time and energy during applications.

---


