import Questions from "./components/Questions/Questions";
import classes from "./app.module.css";

function App() {
  return (
    <div className={classes.app}>
      <h1 className={classes.title}>Quiz</h1>
      <Questions />
    </div>
  );
}

export default App;
