import "../style/navbar.scss"
import React from 'react'


function Navi({categories}) {

    return (
        <nav className="nav-bar">
<h1 className="header-">Frondend Co.</h1>

<ul id="ul-id">
    {categories.map((categorie) => 
        <li id={"li-id"} key={categorie.id}>{categorie.categoryName}</li>
        )}
</ul>
        </nav>
    );
}

export default Navi;