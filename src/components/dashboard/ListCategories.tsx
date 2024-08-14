import { useEffect, useState } from "react";

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
            setCategories(data);
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
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    );
}

export default ListCategories;