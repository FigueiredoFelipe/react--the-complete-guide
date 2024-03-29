import React, { useState } from 'react';
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card'
import ExpensesChart from './ExpensesChart';

import './Expenses.css'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        // props.onFilterChange(selectedYear)
        console.log(`From Expenses.js: ${selectedYear}`);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </li>
    )

}

export default Expenses