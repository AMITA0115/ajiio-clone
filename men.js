let container=document.getElementById("product-container");
let fetchdata=[];
let allProducts=[];
// const API="https://dummyjson.com/products/category/mens-shirts";
const API="https://dummyjson.com/products?limit=0";

fetch(API)
.then((response)=>{
  return response.json();
})

.then((data) =>{
    const menswear=data.products.filter(product =>
        ["mens-shirts", "mens-shoes", "mens-watches", "tops", "sunglasses"].includes(product.category));

        allProducts = menswear;

        // console.log(allProducts);

        displayProduct(allProducts);
    // fetchdata=data.products;
    // displayProduct(data.products);
    // console.log(data);
})

.catch((error) => {
    console.log(error);
})

 let cartarr=JSON.parse(localStorage.getItem("cart")) || [];

 function displayProduct(data){
    container.innerHTML="";
    data.forEach((ele,ind) =>{
        let card=document.createElement("div");

        let image=document.createElement("img");
        image.src=ele.thumbnail;

        let brand=document.createElement("h3");
        brand.innerText=ele.brand;

        let title=document.createElement("p");
        title.innerText=ele.title;

        let price=document.createElement("h4");
        price.innerText= "₹"  + ele.price

        let category=document.createElement("p");
        category.innerText=ele.category;

        let addToCart = document.createElement("button");
        addToCart.innerText="Add To Cart"

        addToCart.addEventListener("click", () => {
            if(checkDuplicate(ele)){
              alert("Product Already in Cart")
            } else {
                cartarr.push({
                    
                    src: ele.thumbnail,
                    category: ele.category,
                    Description: ele.title,
                    Price: ele.price,
                    quantity: 1
                });
              localStorage.setItem("cart",JSON.stringify(cartarr))
              alert("Product Added To Cart")
            }
              })
       
              card.append(image,brand,title,price,category,addToCart);
              container.append(card);
    })
 }

// ***************** Filter *****************

let searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {

    let searchValue = searchInput.value.toLowerCase();

    let filteredData = allProducts.filter((product) =>
        product.title.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue)
    );

    displayProduct(filteredData);

});


// **************** price sorting ****************** //

let sortSelect = document.getElementById("sort");

sortSelect.addEventListener("change", () => {

    let sortedData = [...allProducts];

    if(sortSelect.value === "low"){
        sortedData.sort((a,b) => a.price - b.price);
    }

    if(sortSelect.value === "high"){
        sortedData.sort((a,b) => b.price - a.price);
    }

    displayProduct(sortedData);

});


 function checkDuplicate(element){
    for(let i=0;i<cartarr.length;i++){
        if(cartarr[i].id == element.id){
            return true;
        }
        
    }
    return false;
 }

 
