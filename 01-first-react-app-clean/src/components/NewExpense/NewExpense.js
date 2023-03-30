import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

const NewExpense = (props) => {

    let [newExpense, setNewExpense] = useState(false)


    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData)
    }


    const addNewExpenseHandler = (event) => {
        setNewExpense(true)
    }

    const cancelExpenseHandler = (event) => {
        setNewExpense(false)
    }

    if (newExpense === false) {
        return (
            <div className='new-expense'>
                <button onClick={addNewExpenseHandler}>Add New Expense</button>
            </div>
        )
    } else if (newExpense === true) {
        return (
            <div className='new-expense'>
                <ExpenseForm onCancelExpenseData={cancelExpenseHandler} onSaveExpenseData={saveExpenseDataHandler} />
            </div>
        )
    }

}



export default NewExpense