
let cartarr =
JSON.parse(localStorage.getItem("cart")) || [];

let container =
document.getElementById("cart-container");



let itemCount =
document.getElementById("item-count");

DisplayProduct(cartarr);

function DisplayProduct(data){
    let totalPrice = document.getElementById("cart-total");
    container.innerHTML="";

    if(data.length == 0){

        container.innerHTML =
        "<h2>Your Cart is Empty 🛒</h2>";

        totalPrice.innerText = 0;
        itemCount.innerText = 0;

        return;
    }


    data.forEach((ele,ind) => {
      let card=document.createElement("div");

      card.classList.add("cart-card");

      let image=document.createElement("img");
      image.src=ele.src;


      let description=document.createElement("p")
      description.innerText=ele.Description;

      let brand=document.createElement("h3");
      brand.innerText=ele.category;

      let price=document.createElement("h4");
      price.innerText= "₹" + ele.Price;

      let quantity=document.createElement("span");
      quantity.innerText=ele.quantity;

      let remove=document.createElement("button");
      remove.innerText="Remove";

      let increament=document.createElement("button");
      increament.innerText="+";

      let decreament=document.createElement("button");
      decreament.innerText="-";

      remove.addEventListener("click" , () =>{
           cartarr=cartarr.filter((el,index) =>{
             if(index==ind){
                return false;
             }else{
                return true;
             }
           });
       localStorage.setItem("cart", JSON.stringify(cartarr));
       DisplayProduct(cartarr);
      });

      increament.addEventListener("click", () =>{
           ele.quantity++;

        localStorage.setItem("cart", JSON.stringify(cartarr));
        DisplayProduct(cartarr);
      });

      decreament.addEventListener("click",()=>{
        if(ele.quantity>1){
              ele.quantity--;

            localStorage.setItem("cart", JSON.stringify(cartarr));
            DisplayProduct(cartarr);
        }
      })

      card.append(image,brand,description,price,quantity,increament,decreament,remove);
      container.append(card);


    });

    let sum=0;
    let totalItems = 0;
    for(let i=0;i<cartarr.length;i++){
        sum+=cartarr[i].Price*cartarr[i].quantity;
        totalItems +=cartarr[i].quantity;

    }
    totalPrice.innerText=sum;
    itemCount.innerText = totalItems;
}

