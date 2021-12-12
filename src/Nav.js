import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <nav className="Nav" id="Nav">
    
    </nav>
  );
document.getElementById("Nav").addEventListener("click", function col(){
const txt = '[{"name":"John", "age":30, "city":"New York"}, {"name":"gurpreet"," age":16}]'
const obj = JSON.parse(txt);
var x = Math.floor(Math.random() * 2);
console.log(obj[x].name);

})

 
}

export default Nav;
