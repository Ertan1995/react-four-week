import React, { useState } from 'react'
import "../style/sidebar.scss"



function Sidebar({categories,setProducts,products}) {
 
    const [categorie,setCategorie]=useState("");
    const [productName,setProductName]=useState("");
    const [quantiy,setQuantiy]=useState("");
    const [unit,setUnit]=useState("");
    const [stock,setStock]=useState("");

const addProduct = (e) => {
e.preventDefault()


let categorieId = null;
categories.map((cate)=>cate.categoryName===categorie?categorieId=cate.id:cate)

setProducts(
    
[...products,{
    id:products.length+1,
    categoriyId:categorieId,
    productName:productName,
    quantityPerUnit:quantiy,
    unitPrice:unit,
    unitsInStock:stock,
    isDeleted:false
}]
)
setCategorie("")
setProductName("")
setQuantiy("")
setUnit("")
setStock("")
alert("Ürün başarılı bir şekilde eklendi.")
console.log(categorieId);
};
    
    return (

        <div className='side-bar'>
           <ul id='sidebar-ul'>
            <h1>Categories</h1>
            {categories.map(categorie => 
            
            <li id='sidebar-li' key={categorie.id} >{categorie.categoryName}</li>
            
            ) }
           </ul>

           <form onSubmit={addProduct}>
<select value={categorie} onChange={(e)=>{setCategorie(e.target.value)}} required>

<option selected> Kategori Seçiniz </option>
    
{categories.map(categorie => 
            <option value={categorie.categoryName} id='sidebar-li' key={categorie.id} >{categorie.categoryName}</option>
            
            ) }

</select >

            <input value={productName} placeholder='Product' type="text" onChange={(e)=>{setProductName(e.target.value)}}id='' required/>  
            <input value={quantiy} placeholder='Quantiy Per Unit' type="text" onChange={(e)=>{setQuantiy(e.target.value)}} id=''required />
            <input value={unit}placeholder='Unit Price' type="number" onChange={(e)=>{setUnit(e.target.value)}}id='' required/>
            <input value={stock} placeholder='Units In Stock' type="number"  onChange={(e)=>{setStock(e.target.value)}}id='' required/>
            <input type="submit" value={"Ekle"} />
           </form>
        </div>
    );
}

export default Sidebar;



// const meyveler= [
//     {
// id : 1,
// adi : "elma",
// renk : "kırmızı"

// },
// {
// id : 2,
// adi : "erik",
// renk : "yeşil"

// },
// {
//     id : 3,
//     adi : "üzüm",
//     renk : "beyaz"
    
//     },
// ];

// console.log(meyveler.map( (meyve) => {

//     return meyve.adi;

// } ));