import React, { useState, ReactNode } from 'react';
import productContext from './context';

interface ProductStateProps {
    children: ReactNode;
}

const ProductState: React.FC<ProductStateProps> = ({ children }) => {
    const [mode, setMode] = useState(false);
    return (
        <productContext.Provider value={{ mode, setMode }}>
            {children}
        </productContext.Provider>
    );
};

export default ProductState;
