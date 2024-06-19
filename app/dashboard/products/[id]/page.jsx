import styles from '@/app/ui/dashboard/products/singleProducts/singleProduct.module.css';
import Image from 'next/image';

const SingleProduct = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/noavatar.png' alt='' fill></Image>
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <label>Title</label>
          <input type='text' name='title' placeholder='iphone' />
          <label>Price</label>
          <input type='text' name='price' placeholder='$1300' />
          <label>Stock</label>
          <input type='number' name='number' placeholder='32' />
          <label>Color</label>
          <input type='text' name='color' placeholder='red' />
          <label>Size</label>
          <input type='text' name='size' placeholder=' size' />
          <label>Cat</label>
          <select name='cat' id='cat'>
            <option value='kitchen'>Kitchen</option>
            <option value='computers'>Computer</option>
          </select>
          <label>Description</label>
          <textarea
            name='desc'
            id='desc'
            rows={10}
            cols={30}
            placeholder='Description'></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProduct;
