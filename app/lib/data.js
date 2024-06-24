import { connect } from 'mongoose';
import { User, Product } from './models';
import { connectToDB } from './utils';

export const fetchUsers = async (query, page) => {
  const regex = new RegExp(query, 'i');

  //set item per page
  const ITEM_PER_PAGE = 4;
  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    return { count, users };
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch users!');
  }
};

export const fetchSingleUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch user!');
  }
};

export const fetchProducts = async (query, page) => {
  const regex = new RegExp(query, 'i');

  //set item per page
  const ITEM_PER_PAGE = 4;
  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch products!');
  }
};

export const fetchSingleProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);

    return product;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch product!');
  }
};
