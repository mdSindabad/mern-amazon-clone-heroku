import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ProductContainer from './ProductContainer';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import Registration from './Registration';
import SignIn from './SignIn';
import PublicRoute from '../helpers/PublicRoute';
import PrivateRoute from '../helpers/PrivateRoutes'
import Page404 from './Page404';
import AddProducts from './AddProducts';
import Shipping from './Shipping';
import PaymentScreen from './PaymentScreen';
import OrderPage from './OrderPage';
import AdminRoutes from '../helpers/AdminRoutes';

function PageContainer() {
    return (
        <div className='page-container'>
            <Switch>
                <Route exact path='/' component={ProductContainer} />
                <Route path='/cart' component={Cart} />
                <PublicRoute path='/registration' component={Registration} />
                <PublicRoute path='/signin' component={SignIn} />
                <Route path='/product/:id' component={ProductDetails} />
                <Route path='/shipping' component={Shipping} />
                <AdminRoutes path='/add-products' component={AddProducts} />
                <PrivateRoute path='/payment' component={PaymentScreen} />
                <PrivateRoute path='/order' component={OrderPage} />
                <Route>
                <Page404 />
                </Route>
            </Switch>
        </div>
    )
}

export default PageContainer
