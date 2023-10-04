import React from 'react'
import "../style/body.scss"

function Body({ products }) {

    return (
        <div className='main-body'>

            <table>
                <thead >
                    <tr className='body-tr'>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Quantiy Per Unit</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                    </tr>

                </thead>
                <tbody className='body-tbody'>
                    {products.map((product) =>
                        <tr className='product-tr' key={product.id}>

                            <td id='one' className='body-td' >{product.id}</td>
                            <td id='two' className='body-td'>{product.productName}</td>
                            <td id='three' className='body-td'>{product.quantityPerUnit}</td>
                            <td id='four' className='body-td'>{product.unitPrice}</td>
                            <td id='five' className='body-td'>{product.unitsInStock}</td>

                        </tr>
                    )}
                </tbody>
                
            </table>

        </div>
    )

};


export default Body;