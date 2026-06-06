function addToCart(src,name,price){

    let cart =JSON.parse(localStorage.getItem("cart") ) || [];

    let existing =
    cart.find(item =>
        item.Description === name
    );

    if(existing){

        existing.quantity++;

    }else{

        cart.push({

            src:src,
            
            category: "Footwear",

            Description:name,

            Price:price,

            quantity:1

        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("Product Added To Cart");
}