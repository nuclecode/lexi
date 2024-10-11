import React from 'react';
import Footer from '@/components/footer/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <main style={{ flex: '1' }}>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
