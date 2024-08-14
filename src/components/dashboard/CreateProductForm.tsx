
const CreateProductForm = () => {

    return(        
        <form className="form-create-product">
            <div className="input-section-product">
                <input type="text" placeholder="Code String" />
                <input type="text" placeholder="Description" />
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Price" />
                <input type="text" placeholder="Store" />
                <input type="text" placeholder="Level" />
                <input type="text" placeholder="Article Type" />
                <input type="text" placeholder="Image" />
            </div>
            <div className="input-section-product">
                <input type="text" placeholder="Model Number" />
                <input type="text" placeholder="Brand" />
                <input type="text" placeholder="Enable" />
                <input type="text" placeholder="Stock" />
                <input type="text" placeholder="Availability" />
                <input type="text" placeholder="Season Code" />
                <input type="text" placeholder="Category ID" />
            </div>
        </form>
    );
}

export default CreateProductForm;