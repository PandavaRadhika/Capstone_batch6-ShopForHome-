
import './App.css';
import Home from './Components/Home';
import { BrowserRouter ,Route, Routes} from 'react-router-dom';


import AddCart from './Components/AddCart';
import AddOrder from './Components/AddOrder';
import AddProduct from './Components/AddProduct';
import AddUser from './Components/AddUser';
import AdminDashBoard from './Components/AdminDashBoard';
import AdminLogin from './Components/AdminLogin';
import AdminRegister from './Components/AdminRegister';

import DeleteProduct from './Components/DeleteProduct';
import DeleteUser from './Components/DeleteUser';
import GetAllOrder from './Components/GetAllOrder';
import GetAllProducts from './Components/GetAllProducts';
import GetAllProductsInCart from './Components/GetAllProductsInCart';
import GetAllUsers from './Components/GetAllUsers';
import GetAllWishList from './Components/GetAllWishList';
import GetProductByCategory from './Components/GetProductByCategory';
import SortProducts from './Components/SortProducts';
import UpdateProduct from './Components/UpdateProduct';
import UpdateUser from './Components/UpdateUser';
import UserLogin from './Components/UserLogin';
import UserMenu from './Components/UserMenu';
import UserRegister from './Components/UserRegister';
import AddDiscount from './Components/AddDiscount';
import PaymentPage from './Components/PaymentPage';
import GetDiscountByCouponName from './Components/GetDiscountByCouponName';
import GetReports from './Components/GetReports';
import BulkUpload from './Components/BulkUpload';






function App() {
  return (
   <>
   <div>
<BrowserRouter>
<Routes>

<Route exact path='/' element={<Home></Home>}> </Route>
<Route path='/addCart' element={<AddCart></AddCart>}>AddCart</Route>
<Route path='/AddOrder' element={<AddOrder></AddOrder>}>Add Order</Route>
<Route path='/AddDiscount' element={<AddDiscount></AddDiscount>}>Add Discount Coupon</Route>
<Route path='/AddProduct' element={<AddProduct></AddProduct>}>Add Product</Route>
<Route path='/AddUser' element={<AddUser></AddUser>}>Add User</Route>
<Route path='/AdminRegister' element={<AdminRegister></AdminRegister>}>Admin Register</Route>
<Route path='/DeleteProduct' element={<DeleteProduct></DeleteProduct>}></Route>
<Route path='/DeleteUser' element={<DeleteUser></DeleteUser>}></Route>
<Route path='/GetAllProducts' element={<GetAllProducts></GetAllProducts>}></Route>
<Route path='/GetAllOrder' element={<GetAllOrder></GetAllOrder>}></Route>
<Route path='/getallusers' element={<GetAllUsers></GetAllUsers>}></Route>
<Route path='/GetProductByCategory' element={<GetProductByCategory></GetProductByCategory>}></Route>
<Route path='/SortProducts' element={<SortProducts></SortProducts>}></Route>
<Route path='/UpdateProduct' element={<UpdateProduct></UpdateProduct>}></Route>
<Route path='/UpdateUser' element={<UpdateUser></UpdateUser>}></Route>
<Route path='/UserLogin' element={<UserLogin></UserLogin>}></Route>
<Route path='/UserRegister' element={<UserRegister></UserRegister>}></Route>
<Route path='/AdminLogin' element={<AdminLogin></AdminLogin>}></Route>
<Route path='/UserMenu' element={<UserMenu></UserMenu>}></Route>
<Route path='/GetAllWishList' element={<GetAllWishList></GetAllWishList>}> </Route>
<Route path='/GetAllProductsInCart' element={<GetAllProductsInCart></GetAllProductsInCart>}></Route>
<Route path='/AdminDashBoard' element={<AdminDashBoard></AdminDashBoard>}></Route>
<Route path='/PaymentPage' element={<PaymentPage></PaymentPage>}></Route>
<Route path='/GetDiscountByCouponName' element={<GetDiscountByCouponName></GetDiscountByCouponName>}></Route>
<Route path='/GetReports' element={<GetReports></GetReports>}></Route>
<Route path='/BulkUpload' element={<BulkUpload></BulkUpload>}></Route>

</Routes>

</BrowserRouter>
   </div>

          
   </>
  );
}

export default App;
