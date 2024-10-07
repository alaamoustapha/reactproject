// import { useState } from "react"

// export default function Home(){

//     // // let count = 0;  in JS
//     // // destructing
//     // // let [state, setstate] = useState(initialState)
//     let [count,setCount] = useState(0); //return array[variable , function]
//     let [userName,setName] = useState('mona'); 
//     let [isAdmin,setAdmin] = useState(false); 
//     let [product,setProduct] = useState({pName:'hp',price:20000});
//     let [products,setProducts] = useState([
//         {pName:'hp',price:20000},
//         {pName:'dell',price:50000}, 
//         {pName:'toshiba',price:80000},
//     ]   
//     );

//     function changeCount(){
       
//         setCount(Math.round(Math.random()*10)) //random values from 0 to 1 
       
//     }

//     function changeName(){
//         setName('hoda');
//     }

// //     //binding {js} you must put Home selector in APP.jsx 
//     return (
//         <>
//             <div> Count {count} </div>  
//             <div> Name {userName} </div>
//             <div> Product {product.pName} </div>
//             <button onClick= {changeCount} className="bg-danger text-white m-2">Click1</button>
//             <button onClick= {changeName} className="bg-danger text-white m-2">Click2</button>

//         </>
//     )
// }


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// هنشرح هنا ازاى اعمل كول لل API 
// زمان كنا بنستخدم الفيتش ده ظهر مؤخرا ف 2017 فهلاقى انه مش احسن حاجة مع البراوزر القديمة 
// فالافضل نستخدم مكتبة مسئولة عن كده وننزلها عندنا بالامر ده npm i axios
//1. install >>>>> npm i axios
//2. import axios from 'axios'
//3. create getData() to get data from API
//4. Inside getData(), we find axios.get('API url'), it return response with unlimited time, so we will put await before it
//5. here we will API calling in the mounting phase of the component using useEffect()
//6. Now enter Home.jsx & show the response in the console (response = object inside data), then put the response in empty array 
//7. create empty array using useState to store response >>> let productList = []
//8. We change array status from empty array to array contain response by setProduct()
// خد بالك البيانات اللى جيالى عبارة عن اوبجكت جواه اوبجكت تانى اسمه داتا جواه اراى اسمها داتا برضو
//9. Display data in function >>> return
//10. do mapping on each product object in my array


import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function Home() {

    const [productList, setProduct] = useState([]);

    async function getData(){
        let response = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
        console.log(response.data.data); 
        setProduct(response.data.data);    
    

    }

    useEffect(()=>{
        getData()
    } , [] )

  return (
    <>
        <div className="container">
            <div className="d-flex flex-wrap justify-content-between">
                {
                    productList.map( function(product){
                        return( 
                            <div className='w-25 shadow-lg mb-3 border border-danger'>
                                <h2>{product.title}</h2>
                                <img src={product.imageCover} width={100} alt={product.title}/>
                                <p>{product.description}</p>
                            </div> 
                        )
                    })
                }
                
            </div>
        </div>       
    </>
  )
}







