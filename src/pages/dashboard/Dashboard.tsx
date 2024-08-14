import React, {useState} from "react";

import '../../styles/pages/dashboard/Dashboard.css';

import Bar from "../../components/dashboard/Bar";
import CreateForm from "../../components/dashboard/CreateForm";
import ListCategories from "../../components/dashboard/ListCategories";
import ListProducts from "../../components/dashboard/ListProducts";

const Dashboard: React.FC = () => {
    const [option, setOption] = useState<string>();    

    const renderComponent = (option:string | undefined)=>{
        switch(option){
            case "create-cat":
                return <CreateForm action={option}/>
            case "list-cat":
                return <ListCategories />;
            case "create-prod":
                return <CreateForm action={option}/>;
            case "list-prod":
                return <ListProducts />;
            default:
                return <div>Dashboard</div>;
        }
    }

    return (        
        <div className="dashboard-container">
            <Bar setOption={setOption}/>            
            <div className="dashboard-panel">
            {
             renderComponent(option)
            }
            </div>
        </div>
    )
}

export default Dashboard;