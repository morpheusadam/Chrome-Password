<div align="center">
# 🔒 Chrome Lock — Password for Your Browser
### A lightweight Manifest V3 Chrome extension that asks for a password before anyone can use your browser — ideal for shared computers, workplaces and privacy.

<p>
  <img src="https://img.shields.io/github/license/morpheusadam/ChromeLock?style=for-the-badge&color=4c1" alt="License" />
  <img src="https://img.shields.io/github/stars/morpheusadam/ChromeLock?style=for-the-badge&color=ffca28" alt="Stars" />
  <img src="https://img.shields.io/github/forks/morpheusadam/ChromeLock?style=for-the-badge&color=42a5f5" alt="Forks" />
  <img src="https://img.shields.io/github/last-commit/morpheusadam/ChromeLock?style=for-the-badge&color=8e44ad" alt="Last commit" />
  <img src="https://img.shields.io/github/repo-size/morpheusadam/ChromeLock?style=for-the-badge&color=e67e22" alt="Repo size" />
</p>

<p>
  <img src="https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Chrome Extension" />
  <img src="https://img.shields.io/badge/Manifest-V3-34A853?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Manifest V3" />
  <img src="https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/HTML5-Markup-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-Styles-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
</p>

</div>

---

## 📖 Overview

**Chrome Lock** is a small, no-frills **Chrome browser extension** that puts a password gate in front of your browser. Once you set a password, the extension prompts for it whenever Chrome starts — until you enter the correct password, your open tabs are closed away and you can't browse. Type the right password and your previous tabs are restored, so you pick up right where you left off.

It's built with **vanilla JavaScript** on **Chrome's Manifest V3** platform using a background **service worker** and `chrome.storage.local`. There's no build step, no framework, and no external servers — everything runs locally in the browser. It's a handy lightweight lock for **shared/family computers, workplace machines, and privacy-conscious users** who want a quick barrier against casual unauthorized access.

> 🔎 **Keywords:** chrome extension, browser password, chrome lock, lock browser, browser security, manifest v3, password protection, shared computer, privacy extension, chrome startup password.

> ⚠️ **Security note:** This extension is a lightweight deterrent. The password is stored in plain text in `chrome.storage.local` (it is **not** hashed or encrypted), and the lock is enforced in the UI layer. Use it to discourage casual access on shared machines — not as protection against a determined user or as a replacement for OS-level account passwords / disk encryption.

---

## ✨ Features

- 🔐 **Set a browser password** — choose a master password from the setup page.
- 🚪 **Lock on startup** — if a password is set, Chrome prompts for it every time it launches.
- 🗂️ **Tab restore** — your open tabs are closed during lock and re-opened after you unlock.
- ⌨️ **Press-Enter to unlock** — submit the password with the Enter key or the button.
- 🪶 **Lightweight & local** — vanilla JS, no build tools, no external network calls.
- 🧩 **Manifest V3** — modern Chrome extension with a background service worker.
- 🔁 **Change anytime** — update your password from the extension's options page.

---

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| Platform | Chrome Extension — Manifest V3 |
| Background | Service worker (`bg.js`) |
| Storage | `chrome.storage.local` |
| Permissions | `storage`, `tabs` |
| UI | HTML + CSS + vanilla JavaScript |

---

## 🚀 Getting Started

### Prerequisites

- **Google Chrome** (or any Chromium-based browser that supports Manifest V3)

### Installation (Load Unpacked)

```bash
# 1. Clone or download this repository
git clone https://github.com/morpheusadam/ChromeLock.git
```

1. Open Chrome and navigate to `chrome://extensions`.
2. Enable **Developer mode** (toggle in the top-right corner).
3. Click **Load unpacked** and select the project folder.
4. Pin the extension for easy access.

---

## 📦 Usage

1. After installing, the **set password** page opens automatically.
2. Enter the same password in both fields to save it.
3. From now on, when Chrome starts, the **enter password** page appears and your tabs are locked away.
4. Type your password and press **Enter** (or click the button) to unlock and restore your tabs.
5. To change the password, open the extension's **options page** and set a new one.

> 💡 If you forget the password, remove and re-add the extension via `chrome://extensions` (this clears the stored password).

---

## 🗂️ Project Structure

```text
Chrome-Password/
├── manifest.json          # MV3 manifest (permissions: storage, tabs)
├── bg.js                  # service worker: lock/unlock + tab handling
├── set-password.html      # password setup UI
├── set-password.js        # saves the password to chrome.storage.local
├── enter-password.html    # unlock prompt UI
├── enter-password.js      # validates entry & releases the lock
├── assets/                # icons, screenshots & styles
│   ├── icons/
│   └── style/
└── data/verified_contents.json
```

---

## 🔐 Permissions

| Permission | Why it's needed |
| --- | --- |
| `storage` | Store and read the password (`chrome.storage.local`). |
| `tabs` | Close tabs while locked and re-open them after unlocking. |

---

## 🤝 Contributing

Contributions are welcome! Open an [issue](https://github.com/morpheusadam/ChromeLock/issues) or submit a pull request. Security-hardening improvements — such as hashing the stored password or adding an idle auto-lock — are especially welcome.

## 📜 License

Distributed under the **MIT License** — see [`LICENSE`](LICENSE) for details (or the repository license, if present).

---

<div align="center">

### 👤 Author — Morpheus Adam

Web developer & cheerful hacker · PHP · Laravel · Go

<p>
  <a href="https://github.com/morpheusadam"><img src="https://img.shields.io/badge/GitHub-morpheusadam-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="https://sam.zeonic.me"><img src="https://img.shields.io/badge/Website-sam.zeonic.me-4c1?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Website" /></a>
  <a href="mailto:morpheusadam95@gmail.com"><img src="https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

⭐ **If Chrome Lock helps keep your browser private, consider giving it a star!** ⭐

</div>


---

## ⭐ Star History

<a href="https://star-history.com/#morpheusadam/ChromeLock&Date">
  <img src="https://api.star-history.com/svg?repos=morpheusadam/ChromeLock&type=Date" alt="Chrome-Password — Star History Chart" width="70%" />
</a>

<div align="center">

### If this project helps you, please give it a ⭐

A star helps other developers discover **Chrome-Password** and supports continued development.

</div>
