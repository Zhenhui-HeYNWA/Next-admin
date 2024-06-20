const { default: mongoose } = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  //CreateAtDate method
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      minlength: 0,
    },
    img: {
      type: String,
    },
    stock: {
      type: Number,
      required: true,
      minlength: 0,
    },

    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  //CreateAtDate method
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);

module.exports = { User, Product };
