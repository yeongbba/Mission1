import styles from "./Title.module.css";


const Title = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create a new repository</h2>
      <div className={styles.text}>A repository contains all project files, including the revision history. Already have a project repository elsewhere?</div>
      <a href="" className={styles.text}>Import a repository.</a>
    </div>
  );
}

export default Title;