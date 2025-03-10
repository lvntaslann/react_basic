import React, { useEffect, useState } from 'react'

 function UseEffect() {
    const [name,setName] = useState("react")

    {/* // boş bir dizi koyulması içine gelecek verinin
     sayfa yüklendikten sonra bi kere çalışacağını gösteriyor */}
    useEffect(() =>{
        setTimeout(() => {
            setName("react güncellendi...")
        }, 4000); // 4 sn sonra yazı gelmesi için
    },[] )
    
  return (
    <div>
    {/* başlangıçta react yazısı gelirken 4 sn sonra useEffect fonskiyonu çalışacak */}
      {name}
    </div>
  )
}
export default UseEffect
