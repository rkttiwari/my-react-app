import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import Footer from "./footer";
import Home from "./home";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: "12.67",
      date: new Date(2021, 1, 10),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: "294.67",
      date: new Date(2021, 1, 10),
    },
    {
      id: "e3",
      title: "New TV",
      amount: "212.67",
      date: new Date(2021, 1, 10),
    },
    {
      id: "e4",
      title: "New Desk",
      amount: "312.67",
      date: new Date(2021, 1, 10),
    },
  ];

  return (
    <div>
      <h2>Let's Get Started</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />

      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem> */}
    </div>

    // <div className="App">
    // <Header />

    // <div class="container">
    //   <div class="row">
    //     <Home /><Home /><Home />
    //   </div>
    // </div>

    // <Footer />
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    // </div>
  );
}

export default App;
