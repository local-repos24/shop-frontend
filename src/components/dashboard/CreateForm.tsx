import CreateCategoryForm from "./CreateCategoryForm";
import CreateProductForm from "./CreateProductForm";

interface CreateFormProps{
    action: string;
}
const CreateForm: React.FC<CreateFormProps> = ({action}) => {


    return action === "create-cat" 
            ? <CreateCategoryForm />
            : <CreateProductForm />;
}

export default CreateForm;