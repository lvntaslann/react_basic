import { useCallback, useState } from "react";
import Counter from "../components/Counter";


 function UseCallBackAndReactMemo() {
 //useCallback React.memo gibi bir işlem için kullanılır
 //aralarındaki fark ise useMemo sayfa render olduğunda fonksiyon içerisindeki değeri hash eder
 //useCallback ise bir fonksiyonun referansını döndürür
  const [count,setCount] = useState(0)
  
  //component olarak kullanılan Counterdaki render edildi butona her basıdldığında console yazdırarak gereksiz cpu kullanımı yapıyor
  //Counter componentinde React.memo kullanılarak bunun önüne geçiliyor
 
  //increment fonksiyonu böyle oluşturulduğunda
  //counterda React.memo olsa bile render edildi yazmaya devam edicek
  //bunun önüne geçmek için useCallback kullanılır
  const increment = useCallback(() => {
    //prev count kullanmayıp sonda [count] yazsaydıkta olurdu
    setCount(prevCount => prevCount + 1);
  }, []);
  
  //useCallback kısaca neyin ne kadar çalışacağını belirliyor eğer prev ya da count ifadesi kullanmassak arttırma ifadesi 1 kere çalışacaktı
  
  return (
    <>
    <div>{count}</div>
    
    <Counter increment = {increment}/>
    </>
  );
};
export default UseCallBackAndReactMemo