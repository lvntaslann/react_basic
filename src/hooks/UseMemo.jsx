import { useMemo, useRef, useState } from "react";


 function UseMemo() {
  //useEmo büyük veriler sayfada yüklenirken performans arttırmak için kullanılır
  //sayfa yüklendiğinde veri gelir kullanılana kadar bir daha yüklenme işlemi olmaz
  const [count,setCount] = useState(0)
  const [textChange,setTextChange] = useState("")
  
  //tek başına b işlemin yapılması sitenin çökmesine neden olacaktır
  //useMemo ile işlemin hızlanmasını değil işlemin gerekmediği sürece bir kere yapılmasını sağladık
  const largeDataFunc = useMemo(() => {
    [...new Array(100000000)].forEach((item) => {
    });
    
    return count * 3;
  },[]);


  
  return (
    <>
    <div>{count}</div>
    <button onClick={()=>setCount(count + 1)}>
      Count  arttır !
    </button>
    {largeDataFunc}
    <input type="text" onChange={e=>setTextChange(e.target.value)}/>
    </>
  );
};
export default UseMemo