import { useRef } from "react";


 function UseRef() {
  //useStateden farkı use state tüm sayfayı yenilerken useRef sadece current değeri yeniler!
  const countRef = useRef(0);
  

  const clickFunc = () =>{
    countRef.current++;
    console.log(countRef.current,"countRef")
  }
  return (
    <>
    <button onClick={clickFunc}>
      click me!
    </button>
    </>
  );
};
export default UseRef