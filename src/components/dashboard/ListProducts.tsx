import { useEffect, useState } from "react";

interface Category {
    id: number;
    name: string;
    categoryCode: string;
    enable: boolean;
}

interface Product{
      id: number,
      code_string: string,
      description: string,
      name: string,
      price: string,
      store: number,
      level: number,
      article_type: string,
      img: string,
      model_number: number,
      brand: string,
      enable: boolean,
      last_update: string,
      stock: number,
      availability: string,
      season_code: string,
      category: Category
}

const ListProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts = () => {
        fetch('http://localhost:8080/api/dashboard/products/')
        .then(response => response.json())
        .then(data => {
            if(data.message === 'success'){
                setProducts(data.productResponseList);
            }
        })
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Code String</td>
                        <td>Description</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Store</td>
                        <td>Level</td>
                        <td>Article Type</td>
                        <td>Image</td>
                        <td>Model Number</td>
                        <td>Brand</td>
                        <td>Enable</td>
                        <td>Last Update</td>
                        <td>Stock</td>
                        <td>Availability</td>
                        <td>Season Code</td>
                        <td>Category Code</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products && products.map((product)=>{
                            return (
                                <tr key={product.id}>
                                    <td>{product.code_string}</td>
                                    <td>{product.description}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.store}</td>
                                    <td>{product.level}</td>
                                    <td>{product.article_type}</td>
                                    <td>{product.img}</td>
                                    <td>{product.model_number}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.enable ? "True": "False"}</td>
                                    <td>{product.last_update}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.availability}</td>
                                    <td>{product.season_code}</td>
                                    <td>{product.category.categoryCode}</td>
                                    <td className="actions-btn"><button className="update-btn">Update</button>
                                    <button className="delete-btn">Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListProducts;