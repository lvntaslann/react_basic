import React from 'react'
import React, {useState} from 'react'
 function useState() {
  // ilk değişken değişkeni etkileyecek fonksiyon ve useState içerisinde başlangıç değeri
  const [name,setName] = useState("Levent Aslan")
  const [count,setCount] = useState(0)
  const [input,setInput] = useState("Name")
  const [data,setData] =useState([])
  
  const clickFunc = () =>{
    setName("Aslan levent")
  }
  const getInput = () => {
    //datayı bir liste içerisinde tuttuyoruz
    // ...prev ifadesi ile  eski olanları silmeyip tutabiliyoruz
    setData(prev => ([...prev,input]))
  }
  return (
    <div>
      <div onClick={clickFunc}>{name}</div> <br />
       {/* props işlemi olmadan buttonlarla sayı azaltma */}
       <button onClick={() =>setCount(count -1)}>Azalt</button>
      <div>{count}</div>
      <button onClick={() => setCount(count+1)}>arttır</button> <br />

      {/* onChange methodu kullanarak inputu güncelleme */}
      <input type="text" onChange={(e) =>setInput(e.target.value)} />
      <div>Target ınput : {input}</div> 
      
      <button onClick={getInput}>Tıkla</button>
      {/* liste içeğini ayrı ayrı yazdırmak için mapleme işlemi yaptık */}
      <div>
        {
          data.map((dt,i)=> (
            <div key = {i}>{dt}</div>
          ))
        }
      </div>
    </div>
  )
}
export default useState