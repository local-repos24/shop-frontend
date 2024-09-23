import { useEffect, useState } from "react";

import '../../styles/components/dashboard/Tables.css'
interface Category {
    id: number;
    name: string;
    categoryCode: string;
    enable: boolean;
}

const ListCategories = () => {

    const [categories, setCategories] = useState<Category[]>([]);  
    useEffect(()=>{
        getAllCategories();
    },[]);

    const getAllCategories = () => {
        fetch('http://localhost:8080/api/dashboard/categories/')
        .then(response => response.json())
        .then(data => {
            if(data.message === 'success'){
                setCategories(data.categoryResponseList);
            }
        });
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Category Code</td>
                        <td>Enable</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories && categories.map((category)=>{
                            return (
                                <tr key={category.id}>
                                    <td>{category.name}</td>
                                    <td>{category.categoryCode}</td>
                                    <td>{category.enable ? 'Yes' : 'No'}</td>
                                    <td className="actions-btn"><button className="update-btn">Update</button>
                                    <button className="delete-btn">Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListCategories;