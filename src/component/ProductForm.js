import { useState } from 'react';
import './ProductForm.css';

function ProductForm(props){

    // // handle all state one by one 
    const [newTitle, setTitle] = useState("");
    const [newDate, setDate] = useState("");

    function titleChangeHandler(event) {
        // console.log("title change karoge");
        setTitle(event.target.value);
        // console.log(event.target.value);
    }

    function dateChangeHandler(event) {
        // console.log(event.target.value);
        setDate(event.target.value);
        // console.log(event.target.value);
    }
 
    function submitHandler(event) {

        event.preventDefault();

        const productData = {
            title:newTitle,
            date:newDate
        }

        console.log("i am inside the ProductForm.js")
        console.log(productData);
        // passing data(object) to onSaveProduct
        props.onSaveProduct(productData);


        setTitle('');
        setDate('');
    }

    // we can handle this all state using one object 

    return (
        <form onSubmit={submitHandler} >
            <div className='new-product-title'>
                <label>Title</label>
                <input value={newTitle} className="py-2 border-4 mx-3" type='text' onChange={titleChangeHandler}></input>
            </div>
            <div className='new-product-date'>
                <label>Date</label>
                <input value={newDate} type='date' onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
            </div>
            <div className='new-product-button'>
                <button type='submit' className='bg-blue'>Add Product</button>
            </div>
        </form>
    )
}

export default ProductForm;