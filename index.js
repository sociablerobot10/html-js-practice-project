import { menuArray } from './data.js'


let menu = document.getElementById('menu')
let ingred = document.getElementById('ingredients')
let html =''

for(let item of menuArray) {
    console.log(item)
    
    html += `<section id="item"><span id="left-side-emoji">
                    ${item.emoji}
                </span>
                 <section id="right-side">
                
                <span id="item-name">
                    ${item.name}</span>
                    
                <div id="ingredients">`
    
    for(let food of item.ingredients){
         
      /*  if(item.ingredients.length-1 != item.ingredients.indexOf(food)){
        menu.innerHTML += ` ${food}, `
        }
        
        
        else {
         menu.innerHTML += ` ${food}</div></section></section>`
        
        }*/
        
      
       html += `${food}, `
        }
          html += `</div>`
         html += `<section class="price">$${item.price}</section></section><img id="order-icon" src = 'images/add-icon'></section><hr></hr>`
    }
    
   menu.innerHTML += html;
    
    
console.log(menu.innerHTML)






