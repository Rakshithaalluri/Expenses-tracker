# Expense Tracker

## Overview
Expense Tracker is a full-stack web application designed to help users manage their income and expenses efficiently. The application allows users to add, view, and delete their financial transactions, providing insights into their financial habits.

## Features
- **Add Income**: Users can add their income along with relevant details such as title, amount, category, description, and date.
- **Add Expense**: Users can add expenses with similar details to track spending.
- **View Transactions**: Users can view a list of all income and expense transactions.
- **Delete Transactions**: Users can delete any income or expense transaction they no longer need.

## Technologies Used
- **Frontend**: 
  - HTML
  - CSS
  - JavaScript
  - React.js
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (using Mongoose)
- **Others**:
  - Git
  - Vercel (for deployment)
  - dotenv (for environment variable management)

## Installation

### Prerequisites
- Node.js and npm (or yarn) installed
- Git installed
- MongoDB account (if using a cloud database)

## API Endpoints
### Income Endpoints
POST /api/v1/add-income: Add a new income.

GET /api/v1/get-incomes: Retrieve all incomes.

DELETE /api/v1/delete-income/

: Delete an income by ID.

### Expense Endpoints

POST /api/v1/add-expense: Add a new expense.

GET /api/v1/get-expenses: Retrieve all expenses.

DELETE /api/v1/delete-expense/

: Delete an expense by ID.
