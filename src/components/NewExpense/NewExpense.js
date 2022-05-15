import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onSubmitExpenseDataHandler = (data) => {
    const expenceData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenceData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseData={onSubmitExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
