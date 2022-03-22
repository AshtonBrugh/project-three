import React from 'react';
import Sidebar from '../browseSidebar.js';
import ProductList from '../productList.js';

const Browse = () => {

    const [currentFilter, setCurrentFilter] = React.useState('');

    const renderPage = () => {
        return <ProductList currentFilter={currentFilter} />
    };

    return (
        <>
            <Sidebar currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />
            {renderPage()}
        </>
    )
}

export default Browse;
