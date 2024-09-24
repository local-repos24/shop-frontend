import {useState} from 'react';

interface Product {
    id: number;
    code_string: string;
    description: string;
    name: string;
    price: string;
    store: number;
    level: number;
    article_type: string;
    img: string;
    model_number: number;
    brand:string;
    enable: boolean;
    last_update: string;
    stock: number;
    availability: string;
    season_code: string;
    category_id: number;
}

const CreateProductForm = () => {
    const [product, setProduct] = useState<Product>({
        id: 0,
        code_string: "",
        description: "",
        name: "",
        price: "",
        store: 0,
        level: 0,
        article_type: "",
        img: "",
        model_number: 0,
        brand:"",
        enable: false,
        last_update: "",
        stock: 0,
        availability: "",
        season_code: "",
        category_id: 0
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        fetch('http://localhost:8080/api/dashboard/products/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);

            if(response.message === "success"){
                setProduct({
                    id: 0,
                    code_string: "",
                    description: "",
                    name: "",
                    price: "",
                    store: 0,
                    level: 0,
                    article_type: "",
                    img: "",
                    model_number: 0,
                    brand:"",
                    enable: false,
                    last_update: "",
                    stock: 0,
                    availability: "",
                    season_code: "",
                    category_id: 0
                });
            }
        })
        console.log(product)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setProduct({
            ...product,
            [name]: value
        })
    }

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({
            ...product,
            enable: e.target.value === 'true'
        });
    };


    return(        
        <form className="form-create-product" onSubmit={handleSubmit}>
            <div className="input-section-product">
                <input type="text" name="code_string" value={product.code_string} onChange={handleInputChange} placeholder="Code String" />
                <input type="text" name="description" placeholder="Description" value={product.description} onChange={handleInputChange}/>
                <input type="text" name="name" placeholder="Name" value={product.name} onChange={handleInputChange}/>
                <input type="text" name="price" placeholder="Price" value={product.price} onChange={handleInputChange}/>
                <input type="text" name="store" placeholder="Store" value={product.store} onChange={handleInputChange}/>
                <input type="text" name="level" placeholder="Level" value={product.level}  onChange={handleInputChange}/>
                <input type="text" name="article_type" placeholder="Article Type" value={product.article_type}  onChange={handleInputChange}/>
                <input type="text" name="img" placeholder="Image" value={product.img}  onChange={handleInputChange}/>
            </div>
            <div className="input-section-product">
                <input type="text" name="model_number" placeholder="Model Number" value={product.model_number}  onChange={handleInputChange}/>
                <input type="text" name="brand" placeholder="Brand" value={product.brand}  onChange={handleInputChange}/>
                <h2>Enable</h2>
                <label>
                    <input type="radio" value="true" name="enable" checked={product.enable==true} onChange={handleRadioChange}/>
                    True
                </label>
                <label>
                <input type="radio" value="false" name="enable" checked={product.enable==false} onChange={handleRadioChange}/>
                False
                </label>    
                <input type="text" name="stock" placeholder="Stock" value={product.stock} onChange={handleInputChange}/>
                <input type="text" name="availability" placeholder="Availability" value={product.availability} onChange={handleInputChange}/>
                <input type="text" name="season_code" placeholder="Season Code" value={product.season_code} onChange={handleInputChange}/>
                <input type="text" name="category_id" placeholder="Category ID" value={product.category_id} onChange={handleInputChange}/>
                <button type="submit">Create Product</button>
            </div>
        </form>
    );
}

export default CreateProductForm;