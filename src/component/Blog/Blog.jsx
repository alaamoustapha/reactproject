import React from "react";


export default function Blog(props) {
  let {pName,price,category,onsale} = props.productItem;  //object kolo // destructing
  return (
   
    <>
         
         <div className="bg-success-subtle p-4 position-relative">
            <h2>{props.productIndex}</h2>
            <p>product Name: {pName}</p>
            <p>product Price: {price}</p>
            <p>product Category: {category}</p>
            
            {onsale == true? <div className="bg-danger position-absolute top-0 end-0">sale</div> : ''}
            <button onClick={()=>{props.del(props.productIndex)}} className="btn border border-danger mx-2 w-50">delete</button>
            <button onClick={()=>{props.update(props.productIndex)}} className="btn border border-info mx-2 w-50 m-2">update</button>


         </div>       
    </>
  )
}



// delete process
// 1- عند الضغط ع الزرار لحذف الاوبجيت المفروض عند الضغط هيروح ينفذ فانكشن موجودة مع الداتا فى Navbar component
// 2- اروح انشا فانكشن جديدة تحت البيانات مباشرة 
// 3- ثم انفذ السطر ده فى النافبار return <Blog key = {index} productItem = {product} del = {deleteProduct} />
// هنا انا عاوز ابعت الفانكشن لل props through new preperty(del) 
// 4- بعد كده اروح جوه البلوج اعملها كول بال خاصية ال del
// <button onClick={props.del} className="btn border border-danger mx-5 w-50">delete</button>
// 5- علشان بقى احذف لازم ده هيتم من خلال انى اروح امسك كل اوبجكت من الاندكس بتاعه 
// 6- بعد كده اروح لدالة الحذف امسك الاراى بس مع الرياكت الوضع مختلف مينفعش اتعامل مع النسخة الاصلية للاراى لازم اخد منها نسخة منفصلة عنها اتعامل معاها
// 7- لازم النسخة يكون التغيير جواها مش هيسمع مع النسخة الاصلية بتاعتها فالحل مع دالة ال structuredClone(اسم الحاجة اللى هتعملها استنساخ منظم)
// 8- اخر حاجة لازم اعدل الكلام ده ف الدالة بال setProducts علشان يسمع معايا 



