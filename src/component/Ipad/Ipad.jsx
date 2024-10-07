import React from 'react'

export default function Ipad() {

  return (
    <div>
      <h2>hi, this is my ipad</h2>
    </div>
  )
}


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//component life cycle  
// phase1: mounting
// phase2: updating
// phase3: unmounting
//يهمنى اعرف انا واقف ف اى مرحلة لانه بناء ع كده هعمل اكشن معين
// عاوز متلا لما اعدل فى بيانات المنتج عندى يعمل اكشن معين ع سبيل المثال يطبعلى مسج معينة
//useEffect() عندى هوك من خلاله اقدر اعمل كل حاجة هنا فى ال 3 مراحل بتوعى

  // عاوز ابدا فى مرحلة ال mounting
  // نعملها استدعاء الاول هنا
  // In the mounting phase, it is the best place for calling API
  // useEffect( ()=>{} , [] )


// import React, { useEffect, useState } from 'react';

// export default function Ipad() {

//   // مرحلة التركيب (mounting)
//   useEffect(() => {
//     console.log('Component mounted');

//   }, []); // مصفوفة فارغة: مرحلة التركيب فقط

//   return (
//     <div>
//       <h2>hi, this is my ipad</h2>
//     </div>
//   );
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// عاوز ابدا فى مرحلة ال unmounting


// import React, { useEffect, useState } from 'react';

// export default function Ipad() {

  
//   // مرحلة التركيب (mounting)
//   useEffect(() => {
//     console.log('Component mounted');

//     // مرحلة الإزالة (unmounting)
//     return () => {
//       console.log('Component will unmount');
//     };

//   }, []); // مصفوفة فارغة: مرحلة التركيب فقط

//   return (
//     <div>
//       <h2>hi, this is my ipad</h2>
//     </div>
//   );
// }



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// عاوز ابدا فى مرحلة ال undating

// import React, { useEffect, useState } from 'react';

// export default function Ipad() {
//   // حالة المنتج مثالاً
//   const [product, setProduct] = useState("iPad Pro");

//   // مرحلة التركيب (mounting)
//   useEffect(() => {
//     console.log('Component mounted');

//     // مرحلة الإزالة (unmounting)
//     return () => {
//       console.log('Component will unmount');
//     };

//   }, []); // مصفوفة فارغة: مرحلة التركيب فقط

//   // مرحلة التحديث (updating) عند تحديث حالة المنتج
//   useEffect(() => {
//     if (product !== "") {
//       console.log('Product updated:', product);
//     }
//   }, [product] );   // لو حصل تغيير فى قيمة المنتج هيروح يطبع جملة اللى فوق 

//   return (
//     <div>
//       <h2>hi, this is my ipad</h2>
//       <h2>Hi, this is my {product}</h2>
//       <button onClick={() => setProduct("iPad Air")}>Update Product</button>
//     </div>
//   );
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
