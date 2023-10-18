import React from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
    const saveExpense = (expense) => {
      const newExpense = {
        ...expense,
        id: Math.random().toString(),
      };
      props.onAddExpense(newExpense);
    };
  
    return (
        <div>
            <h1>Control de gastos</h1>
            <ul>
                <li>
                    Escribe el concepto del gasto en <strong>descripción</strong>.
                </li>
                <li>
                    Agrega el monto de gasto en <strong>monto</strong>.
                </li>
                <li>
                    Selecciona la fecha cuando se hizo el gasto en <strong>fecha</strong> (tiene que ser una fecha que no rebase el díe de hoy).
                </li>
            </ul>
            <p></p>
            <Card className="new-expense">
                <ExpenseForm onSaveExpense={saveExpense} />
            </Card>
        </div>

    );
  }
  
export default NewExpense;