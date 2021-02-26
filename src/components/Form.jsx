import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <section className={styles.form__first}>
          <div className={styles.box1}>
            <label className={styles.owner}>
              Owner *
              <select>
                <option value="">userName</option>
              </select>
            </label>
            <div className={styles.slash}>/</div>
            <label className={styles.repo}>
              Repository Name *
              <input type="text" />
            </label>
          </div>
          <div className={styles.text1}>
            Great repository names are short and memorable. Need inspiration?
            How about laughing-bassoon?
          </div>
          <label className={styles.desc}>
            Description (optional)
            <input type="text" />
          </label>
        </section>

        <section className={styles.form__second}>
          <div className={styles.radio_box}>
            <input type="radio" name="show" value="public" checked />
            <div className={styles.radio_box__desc}>
              <span>Public</span>
              <span>
                Anyone on the internet can see this repository. You choose who
                can commit.
              </span>
            </div>
          </div>
          <div className={styles.radio_box}>
            <input type="radio" name="show" value="private" />
            <div className={styles.radio_box__desc}>
              <span>Private</span>
              <span>You choose who can see and commit to this repository.</span>
            </div>
          </div>
        </section>

        <section className={styles.form__third}>
          <div className={styles.form__third__desc}>
            <span>Initialize this repository with:</span>
            <span>
              Skip this step if you’re importing an existing repository.
            </span>
          </div>
          <div className={styles.checkBox}>
            <input type="checkbox" name="" value="" />
            <div className={styles.checkBox__desc}>
              <span>Add a README file</span>
              <span>
                This is where you can write a long description for your project.{" "}
                <a href="">Learn more.</a>
              </span>
            </div>
          </div>
          <div className={styles.checkBox}>
            <input type="checkbox" name="" value="" />
            <div className={styles.checkBox__desc}>
              <span>Add .gitignore</span>
              <span>
                Choose which files not to track from a list of templates.{" "}
                <a href="">Learn more.</a>
              </span>
            </div>
          </div>
          <div className={styles.checkBox}>
            <input type="checkbox" name="" value="" />
            <div className={styles.checkBox__desc}>
              <span>Choose a license</span>
              <span>
                A license tells others what they can and can't do with your
                code. <a href="">Learn more.</a>
              </span>
            </div>
          </div>
        </section>

        <button className={styles.button}>Create Reposiory</button>
      </form>
    </div>
  );
};

export default Form;
