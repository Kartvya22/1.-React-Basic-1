import './NewProduct.css';
import ProductForm from './ProductForm';

function NewProduct(props) {

    function saveProduct(product){
        console.log('i am inside the NewProduct.js')
        console.log(product);

        // calling parent function
        props.printProduct(product);
    }

    return (
        <div className=' new-product'>
            {/* we  pass the saveProduct function to child component(ProductForm) */}
            <ProductForm onSaveProduct={saveProduct} />
            
        </div>
    )
}

export default NewProduct;