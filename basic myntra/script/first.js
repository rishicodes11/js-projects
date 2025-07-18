let bagItems;
onLoad(); 

function onLoad(){
let bagItemsStr=localStorage.getItem('bagItems');
bagItems=bagItemsStr ? JSON.parse(bagItemsStr):[];
displayItemsonHomePage();
displayBagIcon();
}

function addToBag(itemId){
bagItems.push(itemId);
localStorage.setItem('bagItems',JSON.stringify(bagItems));
displayBagIcon()
}

function displayBagIcon(){
    let bagItemCountElement=document.querySelector('.bag-item-count');
    if(bagItems.length>0){
        bagItemCountElement.style.visibility='visible';
        bagItemCountElement.innerText=bagItems.length;
    }else{
        bagItemCountElement.style.visibility='hidden';
    }
}

function displayItemsonHomePage(){

 let itemContainerElement= document.querySelector('.items-container');
if(!itemContainerElement) return;

let innerHTML='';
items.forEach(item=>{

  innerHTML+=`
<div class="item-container">
    <img  class ="item-image" src="${item.image}" alt="item image">
    <div class="rating">
        ${item.rating.stars} | ${item.rating.count}
    </div>
    <div class="company">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price"> Rs ${item.current_price}</span>
        <span class="orignal-price"> Rs ${item.orignal_price}</span>
        <span class="discount">(${items.discount}% off)</span>
    </div>
    <button class="add-to-bag" onclick="addToBag(${item.id})">Add to Bag</button>

            </div>
`;
})
itemContainerElement.innerHTML= innerHTML;

}



