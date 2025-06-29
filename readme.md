# 🎧 PodcastApp

## Description

PodcastApp is a responsive and modular podcast listing interface that uses a custom Web Component (< podcast-preview >) to display podcast previews. Each preview card is fully encapsulated using Shadow DOM and communicates with the main application using custom events.

---

### 🔧 Features

- Display podcast previews using a reusable Web Component

- Show cover image, title, genres, season count, and last updated timestamp

- Encapsulated styling and logic using Shadow DOM

- Trigger modal view on card click using custom events

- Responsive layout for mobile and desktop

- Data-driven: accepts dynamic podcast content

---

### 🧩 Web Component Capabilities

| Requirement                            | ✅ Implemented |
| -------------------------------------- | -------------- |
| Uses `customElements.define()`         | ✅ Yes         |
| Accepts data via attributes/properties | ✅ Yes         |
| Stateless and externally controlled    | ✅ Yes         |
| Encapsulated with Shadow DOM           | ✅ Yes         |
| Emits custom events to parent app      | ✅ Yes         |

---

### 📁 Project Structure

📁 project-root/
│
├── 📁 assets/
│ ├── 🖼️ logo.png
│ ├── 🔍 search.png
│ ├️── 👤 user.png
│ └── 🌐 favicon.png
│
├── 📄 index.html
├── 🎨 styles.css
├── 📜 main.js
│
└── 📁 scripts/
│
├── 📁 UI/
│ └── ✨ modal.js  
 │
├── 📁 components/
│ └── 🎧 PodcastPreview.js  
 │
├── 📁 utils/
│ ├── 💾 storage.js
│ └── ⏱️ time.js
│
└── 📁 initialData/
└── 📊 data.js

---

### 🚀 How to use

1. Clone or Download
   Place all files in a web project directory.

2. Open index.html
   No build tools or installations required. Just open index.html in a browser.

---

### ✨ Compatibility

#### 🌐 Browser Support

| Browser | Support |
| ------- | ------- |
| Chrome  | ✅ Full |
| Firefox | ✅ Full |
| Safari  | ✅ Full |
| Edge    | ✅ Full |

#### 🔒 No Dependencies

🔮 No frameworks
🛠️ No build tools
📦 No third-party packages

Just HTML, CSS, and JS.

---
