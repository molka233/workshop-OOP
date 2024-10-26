//declaration de class
class Product{
    constructor(id,name,price){
        this.id=id;
        this.name=name;
        this.price=price;
    }
}

class ShoppingCartItem{
    constructor(Product,quantity){
        this.product=product;
        this.quantity=quantity;
    }
    
}
class ShoppingCard{
    constructor(){
        this.items=[];
    }
//function pour calculer ma somme
calculateTotalPrice(){
    return this.product.price*this.quantity;
}
}
//ajouter un produit et son quantity
addItem(product,quantity=1);{
    const existingitem=this.items.find(item=>item.product.id === product.id);
    if(existingitem){
        existingitem.quantity+=quantity;
    } else {
        const newItem= new ShoppingCartItem(product,quantity);
        this.items.push(newItem);
    }
    
}
//supprimer un produit
removeItem(productId);{
    this.items=this.items.filter(item=> item.product.id !== productId);
}

