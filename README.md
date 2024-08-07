Transaction Management System:

project Description:
This project is a Transaction Management System for an office where an Account Manager can manage daily expenses for cash inflow and outflow. The application is built using React.js and allows the user to view a list of transactions and add new transactions.

Features:
View Transactions: See a list of all transactions with details such as date, description, credit, debit, and running balance.
Add Transactions: Add a new transaction with details including transaction type (credit/debit), amount, and description.

Technologies Used:
Frontend: React.js
Routing: React Router
Styling: CSS
Getting Started
Follow these instructions to set up and run the project locally.

Prerequisites:
Ensure you have the following installed on your machine:

Node.js (v14 or above)
npm (v6 or above)
Installation:
  Clone the repository:
    git clone https://github.com/your-username/transaction-management-system.git
    cd transaction-management-system
  Install the dependencies:
    npm install
    npm install react-router-dom
  Running the Application
    Start the development server:
      npm start
  The application will open in your default browser at http://localhost:3000.

Project Structure:
  Components:
    App.js: The main component that sets up routing and state management for transactions.
    TransactionList.js: Displays the list of transactions with their details.
    AddTransaction.js: A form to add a new transaction.
    App.css: Styles for the main App component.
  Code Overview:
    App.js:
    This component sets up the routes for the application and maintains the state of transactions.
  
    TransactionList.js:
    This component displays the list of transactions in a table format. It calculates the running balance for each transaction.

    AddTransaction.js:
    This component provides a form to add a new transaction. It includes fields for transaction type, amount, and description. Upon submission, it adds the transaction to the state and       redirects to the transaction list.
