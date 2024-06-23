import { updateProduct } from '@/app/lib/actions';
import { fetchSingleProduct } from '@/app/lib/data';
import styles from '@/app/ui/dashboard/products/singleProducts/singleProduct.module.css';
import Image from 'next/image';

const SingleProduct = async ({ params }) => {
  const { id } = params;

  const product = await fetchSingleProduct(id);
  console.log(product.cat);
  console.log(product);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={product.img || '/noavatar.png'} alt='' fill></Image>
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type='hidden' name='id' value={product.id} />
          <label>Title</label>
          <input type='text' name='title' placeholder={product.title} />
          <label>Price</label>
          <input type='text' name='price' placeholder={product.price} />
          <label>Stock</label>
          <input type='number' name='number' placeholder={product.stock} />
          <label>Color</label>
          <input type='text' name='color' placeholder={product.color} />
          <label>Size</label>
          <input type='text' name='size' placeholder={product.size} />
          <label>Cat</label>
          <select name='cat' id='cat'>
            <option value='kitchen'>Kitchen</option>
            <option value='computers'>Computer</option>
            <option value='phone'>Phone</option>
          </select>
          <label>Description</label>
          <textarea
            name='desc'
            id='desc'
            rows={10}
            cols={30}
            placeholder={product.desc}></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProduct;
