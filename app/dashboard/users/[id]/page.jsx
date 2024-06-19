import styles from '@/app/ui/dashboard/user/singleUser/singleUser.module.css';
import Image from 'next/image';

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/noavatar.png' alt='' fill></Image>
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <label>Username</label>
          <input type='text' name='username' placeholder='John Doe' />
          <label>Email</label>
          <input type='email' name='email' placeholder='john@doe' />
          <label>Password</label>
          <input type='password' name='password' placeholder='password' />
          <label>Phone</label>
          <input type='text' name='phone' placeholder='+1234135325' />
          <label>Address</label>
          <input type='text' name='address' placeholder=' Melbourne' />
          <label>Is Admin?</label>
          <select name='isAdmin' id='isAdmin'>
            <option value={true}>Yes</option>
            <option value={false}>false</option>
          </select>
          <label>Is Active?</label>
          <select name='isActive' id='isActive'>
            <option value={true}>Yes</option>
            <option value={false}>false</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
