import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";


function Expenses(props) {
    const [year, setYear] = useState("2023");
  
    const filterChangeHandler = (selectedYear) => {
      setYear(selectedYear);
    };
  
    const filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === year;
    });
  
    return (
      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
        {filteredExpenses.length === 0 ? (
          <h3>No se encontraron gastos</h3>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              date={expense.date}
              title={expense.title}
              amount={expense.amount}
            />
          ))
        )}
      </Card>
    );
  }

export default Expenses;