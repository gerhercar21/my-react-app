import React from "react";
import estilos from "./ExpenseDate.module.css";

function ExpenseDate(props) {
    const month = props.date.toLocaleString("es-MX", { month: "long" });
    const day = props.date.toLocaleString("es-MX", { day: "2-digit" });
    const year = props.date.getFullYear();
  
    return (
      <div className={estilos["expense-date"]}>
        <div className={estilos["expense-date-month"]}>{month}</div>
        <div className={estilos["expense-date-year"]}>{year}</div>
        <div className={estilos["expense-date-day"]}>{day}</div>
      </div>
    );
  }

export default ExpenseDate;