import React, { useState } from 'react';
import '../../styles/pages/dashboard/Bar.css';

const Bar : React.FC<{ setOption: React.Dispatch<React.SetStateAction<string | undefined>> }> 
= ({ setOption }) => {
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [showProductDropdown, setShowProductDropdown] = useState(false);

    return (
        <div className="dashboard-bar">
            <p className='menu-dropdown' onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}>Categories</p>
                {showCategoryDropdown && (
                    <div className="dropdown">
                        <p className='menu-dropdown'
                        onClick={()=>setOption("create-cat")}>Create Category</p>
                        <p className='menu-dropdown'
                        onClick={()=>setOption("list-cat")}>List Categories</p>
                    </div>
                )}
                <p className='menu-dropdown' onClick={()=>setShowProductDropdown(!showProductDropdown)}>Products</p>
                {
                    showProductDropdown && (
                        <div className="dropdown">
                            <p className='menu-dropdown'
                            onClick={()=>setOption("create-prod")}>Create Product</p>
                            <p className='menu-dropdown'
                            onClick={()=>setOption("list-prod")}>List Products</p>
                        </div>
                    )
                }
            </div>
    );
}

export default Bar;
