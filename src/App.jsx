import ExpenseItem from "./components/ExpenseItem";
import mockedData from "./data/mockedData";

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      {mockedData.map((data) => {
        return (
          <ExpenseItem
            id={data.id}
            date={data.date}
            title={data.title}
            amount={data.amount}
            quantity={data.quantity}
          />
        );
      })}
    </div>
  );
}

export default App;
