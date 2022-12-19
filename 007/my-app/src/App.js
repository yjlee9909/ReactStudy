import ExpensesItem from "./components/ExpensesItem";
import Card from "./components/propsEx/Card";
import SettingCard from "./components/propsEx/SettingCard";
import ShardCard from "./components/propsEx/ShardCard";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  return (
    <>
      <ExpensesItem
        title={DUMMY_EXPENSES[0].title}
        amount={DUMMY_EXPENSES[0].amount}
        date={DUMMY_EXPENSES[0].date}
      />
      <ExpensesItem
        title={DUMMY_EXPENSES[1].title}
        amount={DUMMY_EXPENSES[1].amount}
        date={DUMMY_EXPENSES[1].date}
      />
      <ExpensesItem
        title={DUMMY_EXPENSES[2].title}
        amount={DUMMY_EXPENSES[2].amount}
        date={DUMMY_EXPENSES[2].date}
      />
      {/* <Card className="setting" value="챌린지">
        <SettingCard />
      </Card>
      <Card className="share" value="공유">
        <ShardCard />
      </Card> */}
    </>
  );
}
export default App;
