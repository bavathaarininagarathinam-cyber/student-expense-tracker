# Student Expense Tracker 🎓💸

A clean, beginner-friendly web application designed for college students to track daily pocket money, canteen expenses, books, and transit in Indian Rupees (₹). Built with **pure vanilla HTML, CSS, and JavaScript** with zero libraries or build tools required.

---

## 📌 Features

- **Quick Expense Logging**: Add expenses with Name, Amount in Rupees (₹), Category, and Date.
- **Smart Input Validation**: Automatically alerts users if any field is left empty or if a negative/zero amount is entered.
- **Category Breakdown Cards**: Real-time spending totals across 5 college-centric categories:
  - 🍔 **Food**: Canteen lunches, snacks, chai, and mess dues.
  - 🚌 **Travel**: Bus passes, metro recharges, and auto fares.
  - 📚 **Books**: Textbooks, photocopy/xerox notes, stationery, and lab manuals.
  - 🎟️ **Fun**: Outings, movie tickets, fests, and weekend gatherings.
  - 📦 **Other**: Mobile recharge, laundry, and miscellaneous items.
- **Category Filter Dropdown**: Easily filter the expense history to view only one category at a time or see all purchases.
- **Single-Click Deletion**: Dedicated delete button (×) for each item that automatically recalculates all totals.
- **Persistent Storage (localStorage)**: Saves all entries directly inside your browser so data is never lost when refreshing or closing the page.
- **Mobile-Responsive Card Design**: Centered modern card layout with high-contrast typography, category color badges, and accessible touch targets (≥ 44px).

---

## 🛠️ Technologies Used

- **HTML5**: Semantic tags (<header>, <section>, <form>, <select>, <ul>).
- **CSS3**: Modern Flexbox, CSS Grid, custom gradient styling, and mobile @media queries.
- **JavaScript (ES6+)**: DOM manipulation, array methods (filter(), reduce(), unshift()), and the Web Storage API (localStorage).

---

## 📁 Project Structure

```text
student-expense-tracker/
│
├── index.html        # Semantic markup and structure
├── style.css         # Modern centered card layout and category badge styling
├── script.js         # Application logic, validation, filtering & localStorage
└── README.md         # Project documentation and setup guide
```

---

## 🚀 How to Run Locally

You do not need to install Node.js, npm, or any compilers.

1. **Download or Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/student-expense-tracker.git
   cd student-expense-tracker
   ```
2. **Open index.html**:
   - **Method A (Direct)**: Double-click index.html in your file explorer. It will open instantly in Chrome, Safari, Edge, or Firefox.
   - **Method B (VS Code Live Server)**: Open the folder in VS Code, right-click index.html, and select **Open with Live Server**.

---

## 🌐 Publishing to GitHub Pages

1. Create a new public repository on GitHub named `student-expense-tracker`.
2. Upload `index.html`, `style.css`, and `script.js` to the repository.
3. Open **Settings** > **Pages** in your repository.
4. Set **Source** to Deploy from a branch, select `main` / `root`, and click **Save**.
5. Your live app will be published at: `https://<your-username>.github.io/student-expense-tracker/`

---

## 📄 License

This project is open-source and free to use for educational and personal projects.
