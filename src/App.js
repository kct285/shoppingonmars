import React, {useState} from 'react';
import './App.css';

let shoppingCartItems = [
  {
    item: 'War and Peace',
    image: 'https://images4.penguinrandomhouse.com/cover/9781400079988',
    description: 'War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature',
    price: 100
  },
  {
    item: 'Anti-Alien Spray',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9rP2ZWpWF9-dfdVhrACCDunASgzeddwzs1GhvXZcX-MUPO-rV',
    description:'Keep those pesky aliens away from you 24/7! They bite and sting!',
    price: 250
  },
  {
    item: 'Zero Gravity Cashews',
    image: 'https://secureservercdn.net/160.153.137.14/1vn.d20.myftpupload.com/wp-content/uploads/2019/07/Goan-Regular-Cashew-nut-Kaju-SDL585330725-2-b3b05-600x702.jpg',
    description: 'Undeniably, the best snack out there in open space. Roasted on Earth.',
    price: 30
  },
  {
    item: 'Galaxy Blaster',
    image: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/f9/Quad_Blaster_GotGV2_Promo.png/revision/latest/scale-to-width-down/2000?cb=20170418030218',
    description: 'Just in case you meet Starlord and the rest of the Guardians of the Galaxy.',
    price: 350
  },
  {
    item: 'Martian Space Clothing set',
    image: 'https://files.cults3d.com/uploaders/14103733/illustration-file/91812fce-abc0-4a2e-b9a2-57ad66fad882/The%20Martian%20002_large.jpg',
    description: 'Blend in with the martians with this super cool, super chic space set.',
    price: 600
  },
  {
    item: '100% Earth H2O',
    image: 'https://5.imimg.com/data5/ON/NN/MY-29819733/packaged-water-bottle-500x500.jpg',
    description: 'Gluten free. Vegan. No added oils, MSG or fat. All natural. ',
    price: 10
  }
  
];

function App(){

  const [products, setProducts] = useState([]);

  const productSearch = function(e) {
    shoppingCartItems.filter(product => product.item == -1 )
    console.log(e.target.value);
  }



  return(
    <div className="App">
      <h1>Your Shopping Cart</h1>
      <SearchForm onChange={productSearch} />
      {shoppingCartItems.map(ShoppingCart)}
    </div>
  )
}

function ShoppingCart(data){
  return(
    <div> <Product shoppingCartItems={data} /></div>
  )
}


// THE ORIGINAL CODE....
// function Product() {
//   return(
//     <div className="product">
//       <img src={shoppingCartItems[0].image} width="100"/>
//     </div>
//   )
// }





function Product(props){

  return(
    <div className="productCard">
      <div className="productImage" />
      <div className="productHeader">
        <h2>{props.shoppingCartItems.item}</h2>
      </div>
      <div className="productDescription">
        <img src={props.shoppingCartItems.image} alt="img" width="200" />
        <p>{props.shoppingCartItems.description}</p>
        <h3>{props.shoppingCartItems.price}</h3>
      </div>
    </div>
  );
}



function SearchForm(props) {
  return(
    <form>
      <label>
        Search:
        <input onChange={props.onChange} label="Search Cart" placeholder="Search" 
         />
      </label>
      <input type="submit" value="Enter" />
    </form>
  );
}




export default App;
