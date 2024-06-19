import styles from '@/app/ui/login/login.module.css';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action='' className={styles.form}>
        <h1 className={styles.title}>Login</h1>

        <input type='text' name='username' placeholder='username' />

        <input type='password' name='password' placeholder='password' />
        <button className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
