export const navOptions = [
  { id: "home", label: "Home", path: "/" },
  { id: "products", label: "Products", path: "/products" },
  { id: "services", label: "Services", path: "/services" },
];

export const adminNavOptions = [
  { id: "adminListing", label: "Manage Products", path: "/admin/products" },
  { id: "adminNewProduct", label: "Add New Product", path: "/admin/add" },
  { id: "adminServices", label: "Manage Services", path: "/admin/services" },
];

export const loginFormControls = [
  {
    id: "email",
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    componentType: "input",
  },
  {
    id: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    componentType: "input",
  },
];
export const registerFormControls = [
  {
    id: "firstName",
    label: "First Name",
    placeholder: "Enter your first name",
    type: "text",
    componentType: "input",
  },
  {
    id: "lastName",
    label: "Last Name",
    placeholder: "Enter your last name",
    type: "text",
    componentType: "input",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    componentType: "input",
  },
  {
    id: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    componentType: "input",
  },
  {
    id: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Confirm your password",
    type: "password",
    componentType: "input",
  },
];

export const addProductFormControls = [
  {
    id: "name",
    label: "Product Name",
    placeholder: "Enter product name",
    type: "text",
    componentType: "input",
  },
  {
    id: "price",
    label: "Product Price",
    placeholder: "Enter product price",
    type: "number",
    componentType: "input",
  },
  {
    id: "description",
    label: "Product Description",
    placeholder: "Enter product description",
    type: "text",
    componentType: "input",
  },
  {
    id: "type",
    label: "Product Type/Category",
    placeholder: "Shampoo, Condition, etc.",
    type: "text",
    componentType: "input",
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyC_A9lUTT8_-AC1dt0sYMvf_gfZ5rPs574",
  authDomain: "prettyqueen-f2767.firebaseapp.com",
  projectId: "prettyqueen-f2767",
  storageBucket: "prettyqueen-f2767.appspot.com",
  messagingSenderId: "526527637889",
  appId: "1:526527637889:web:7faaed25f830be3e60e080",
};

export const firebaseStorageURL = "gs://prettyqueen-f2767.appspot.com";
