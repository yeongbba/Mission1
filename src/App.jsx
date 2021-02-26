import styles from "./App.module.css";
import Title from "./components/Title";
import Form from "./components/Form";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Title />
        <Form />
      </div>
    </div>
  );
}

export default App;
