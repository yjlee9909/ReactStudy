import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [{ title: "Car Insuarnace", amout: 294.67, date: new Date() }];
    return (
        <div>
            hello worldss
            <ExpenseItem />
        </div>
    );
}
export default App;
