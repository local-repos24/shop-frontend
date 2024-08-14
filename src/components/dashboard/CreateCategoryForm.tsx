
import '../../styles/pages/dashboard/Forms.css'
const CreateCategoryForm: React.FC = () => {

    return(
        <form className="form-component form-create-cat">
            <input type="text" placeholder="Category Name" />
            <h2>Enable</h2>
            <label>
                <input type="radio" value="true" name="enable"/>
                True
            </label>
            <label>
            <input type="radio" value="false" name="enable"/>
            False
            </label>
            <input type="text" placeholder="Category Code" />
        </form>);
}

export default CreateCategoryForm;