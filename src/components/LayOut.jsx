import React from 'react';
import { CartProvider } from '../context/CartContext';
import Header from './Header';
import Footer from './Footer';
import ContactForm from './ContactForm';
import Cart from './Cart';

const Layout = ({ children }) => {
    return (
        <>
            <CartProvider>
                <div>
                    <Header />
                    <Cart />
                    <main >
                        {children}
                    </main>
                    <ContactForm />
                    <Footer />
                </div>
            </CartProvider>
        </>
    );
};
export default Layout;