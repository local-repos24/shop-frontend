import { useEffect, useState } from 'react';
import '../../styles/pages/dashboard/Forms.css'

interface Category {
    name: string;
    enable: boolean;
    categoryCode: string;
}
const CreateCategoryForm: React.FC = () => {

    const [category, setCategory] = useState<Category>({
        name: "",
        enable: false,
        categoryCode: ""
    });


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(category)

        fetch('http://localhost:8080/api/dashboard/categories/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(category),
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            setCategory({
                name: "",
                enable: false,
                categoryCode: ""
            });
            
        })
    }

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategory({
            ...category,
            enable: e.target.value === 'true'
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCategory({
            ...category,
            [name]: value
        });
    };

    return(
        <form className="form-component form-create-cat" onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder="Category Name"  value={category.name} onChange={handleInputChange}/>
            <h2>Enable</h2>
            <label>
                <input type="radio" value="true" name="enable" checked={category.enable==true} onChange={handleRadioChange}/>
                True
            </label>
            <label>
            <input type="radio" value="false" name="enable" checked={category.enable==false} onChange={handleRadioChange}/>
            False
            </label>
            <input type="text" name="categoryCode" placeholder="Category Code" value={category.categoryCode} onChange={handleInputChange}/>
            <button type="submit">Create Category</button>
        </form>);
}

export default CreateCategoryForm;