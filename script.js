// script.js - Student Expense Tracker with Category Breakdown & Filter

// 1. STATE & STORAGE
const STORAGE_KEY = 'student_expenses';
let expenses = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// Defined categories with friendly emoji labels
const CATEGORIES = [
  { id: 'Food', label: '🍔 Food' },
  { id: 'Travel', label: '🚌 Travel' },
  { id: 'Books', label: '📚 Books' },
  { id: 'Fun', label: '🎉 Fun' },
  { id: 'Other', label: '🏷️ Other' }
];

// 2. DOM REFERENCES
const expenseForm = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseCategoryInput = document.getElementById('expense-category');
const expenseDateInput = document.getElementById('expense-date');
const filterCategorySelect = document.getElementById('filter-category');

const totalAmountEl = document.getElementById('total-amount');
const categoryGridEl = document.getElementById('category-breakdown-grid');
const expenseListEl = document.getElementById('expense-list');
const emptyStateEl = document.getElementById('empty-state');

// Set default date to today
expenseDateInput.value = new Date().toISOString().split('T')[0];

// 3. STORAGE HELPER
function saveExpenses() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
}

// 4. RENDER FUNCTION
function renderApp() {
  // A. Calculate Overall Total
  const totalSpent = expenses.reduce((sum, item) => sum + item.amount, 0);
  totalAmountEl.textContent = `₹${totalSpent.toFixed(2)}`;

  // B. Feature 1: Render Category Breakdown Cards
  categoryGridEl.innerHTML = '';
  CATEGORIES.forEach((cat) => {
    // Sum all expenses matching this specific category
    const catTotal = expenses
      .filter((item) => item.category === cat.id)
      .reduce((sum, item) => sum + item.amount, 0);

    const card = document.createElement('div');
    card.className = 'category-stat-card';
    card.innerHTML = `
      <span class="category-stat-title">${cat.label}</span>
      <span class="category-stat-amount">₹${catTotal.toFixed(2)}</span>
    `;
    categoryGridEl.appendChild(card);
  });

  // C. Feature 2: Filter Expenses by Selected Category
  const selectedFilter = filterCategorySelect.value;
  const filteredExpenses = selectedFilter === 'All'
    ? expenses
    : expenses.filter((item) => item.category === selectedFilter);

  // D. Render Expense History List
  expenseListEl.innerHTML = '';

  if (filteredExpenses.length === 0) {
    emptyStateEl.style.display = 'block';
    emptyStateEl.textContent = selectedFilter === 'All'
      ? 'No expenses added yet. Enter your first spend above!'
      : `No ${selectedFilter} expenses found.`;
  } else {
    emptyStateEl.style.display = 'none';

    filteredExpenses.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'expense-item';

      li.innerHTML = `
        <div class="expense-info">
          <h4>${escapeHtml(item.name)}</h4>
          <div class="expense-meta">
            <span class="category-tag tag-${item.category}">${item.category}</span>
            <span>•</span>
            <span>${item.date}</span>
          </div>
        </div>
        <div class="expense-right">
          <span class="expense-amount">₹${item.amount.toFixed(2)}</span>
          <button class="delete-btn" onclick="deleteExpense('${item.id}')" title="Delete">✕</button>
        </div>
      `;

      expenseListEl.appendChild(li);
    });
  }

  // Save to localStorage
  saveExpenses();
}

// 5. ADD EXPENSE EVENT LISTENER
expenseForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = expenseNameInput.value.trim();
  const amount = parseFloat(expenseAmountInput.value);
  const category = expenseCategoryInput.value;
  const date = expenseDateInput.value;

  // Validation
  if (!name || isNaN(amount) || amount <= 0 || !category || !date) {
    alert('Please enter valid expense details in all fields.');
    return;
  }

  // Create & prepend new item
  const newExpense = {
    id: 'exp_' + Date.now(),
    name: name,
    amount: amount,
    category: category,
    date: date
  };

  expenses.unshift(newExpense);
  renderApp();

  // Reset inputs
  expenseNameInput.value = '';
  expenseAmountInput.value = '';
  expenseCategoryInput.value = '';
  expenseNameInput.focus();
});

// 6. DELETE EXPENSE FUNCTION
window.deleteExpense = function (id) {
  expenses = expenses.filter((item) => item.id !== id);
  renderApp();
};

// 7. FILTER CHANGE LISTENER: Instant update when dropdown changes
filterCategorySelect.addEventListener('change', renderApp);

// XSS Protection
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Initial render
renderApp();
