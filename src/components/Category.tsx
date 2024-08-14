import { useEffect, useState } from "react";
import { Interface } from "readline";

import '../styles/components/Category.css'
interface UserData{
    id: string,
    name: string,
    username: string 
};

const Category = ({option} : {option:string}): JSX.Element => {

    const [data, setData] = useState<UserData[]>();
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(obj => obj.json())
        .then(obj =>{
            setData(obj);
        })
    },[]);

    return(
        <div className="category-component">
            <h1>Shop By {option}</h1>
            <div className="category-grid">
            {
               data && data?.map((item : UserData) => {
                {console.log("je " + item.name)}
                return <div className="category-card" key={item.id}>{item.name}</div>
               })
            }
            </div>
        </div>    
    );
}

export default Category;