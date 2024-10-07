// import { useState } from "react"
// import Blog from "../Blog/Blog"


// export function About(){
//     let [product, setProduct] = useState({pName:'hp', price:20000, category:'laptop', onsale:true})


//     return ( 
//         <>
//         <h1>Hi Navbar</h1>
//         <Blog productItem = {product}/>
//         </>
//     )
// }



// // summary about how to transfer data from About component to Blog component
// // we want to send object(product) from About to Blog, then must be About(parent) and Blog(child)
// // how??? through putting this selector <Blog/> in About component, also take care import Blog in About
// // put this selector <About/> in APP.jsx
// // go to selector <Blog productItem = {product}/> ..... add property in selector
// // go to Blog component, we find props(build in any component) to take the object >>> destructing >>>> display





// // Now how to send array of objects from About to Blog

import { useState } from "react"
import Blog from "../Blog/Blog"


export function About(){
    let [products, setProducts] = useState(
    [
        {pName:'hp', price:20000, category:'laptop', onsale:true},
        {pName:'dell', price:50000, category:'laptop', onsale:true},
        {pName:'toshiba', price:80000, category:'laptop', onsale:false}, 
        {pName:'samsung', price:60000, category:'laptop', onsale:true},
        {pName:'hp', price:90000, category:'laptop', onsale:false},
        {pName:'hp', price:90000, category:'laptop', onsale:false}

    ] );


    function deleteProduct(i){
       let myProducts = structuredClone(products);  //deep copy using this method
       myProducts.splice(i,1)
       setProducts(myProducts)
    }


    function updateProduct(index){

        let myProducts = structuredClone(products); //deep copy
        myProducts[index].price++ // increase price value or price--
        setProducts(myProducts); // علشان يسمع ع اخر تعديل حصل عنده render

    }


//     return ( 
//         <>
//         <div className="container">
//             <div className="d-flex flex-wrap justify-content-between">
//                 <Blog productItem = {products[0]}/>
//                 <Blog productItem = {products[1]}/>
//                 <Blog productItem = {products[2]}/>
//                 <Blog productItem = {products[3]}/>
//                 <Blog productItem = {products[4]}/>
//                 <Blog productItem = {products[5]}/>      
//             </div>
//         </div>       
//         </>
//     )
// }

// // // ده مش احسن حاجة كل عنصر ابعته لوحده بالشكل ده المفروض امشى على كل عنصر ف الاراى وابعته مرة واحدة
// // // وطبعا هنا ممنوع استخدام الفور والفور ايتش 
// // // الحل هو ال map 
// // // [1,4,8].map( function(){} )
    
    return ( 
        <>
        <div className="container">
            <div className="d-flex flex-wrap justify-content-between">
                {
                    products.map( function(product , index){
                        return <Blog key = {index} productItem = {product} productIndex = {index} del = {deleteProduct} update = {updateProduct}/>

                    })
                }
                   
            </div>
        </div>       
        </>
    )

}

