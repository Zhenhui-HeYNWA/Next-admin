
import styles from '@/app/ui/dashboard/user/addUser/addUser.module.css';
const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action='' className={styles.form}>
        <input type='text' placeholder='username' name='username' required />
        <input type='email' placeholder='email' name='email' required />
        <input
          type='password'
          placeholder='password'
          name='password'
          required
        />
        <input type='phone' placeholder='phone' name='phone' />

        <select name='isAdmin' id='isAdmin'>
          <option value={false} defaultValue>
            Is Admin?
          </option>
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </select>
        <select name='isActive' id='isActive'>
          <option value={true} defaultValue>
            Is Active?
          </option>
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </select>

        <textarea
          name='address'
          id='address'
          cols='30'
          rows='16'
          placeholder='Address'></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;