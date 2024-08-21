import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import axios from "axios"
import { useState } from "react"
import '../components/home.css';
/*
Router ile yapay veri için kullanılıyor
export const data = [
    {
        id:0,
        name: "React",
        description:"React açıklama"

    },
    {
        id:1,
        name: "Vue",
        description:"Vue açıklama"

    },
    {
        id:2,
        name: "Angular",
        description:"Angular açıklama"

    },
]
*/
    
const Home = () => {
    const navigate = useNavigate()
    const [allData,setAllData] = useState([])
    const [loading,setLoading] = useState(true)
    
    useEffect(() => {
      const getData = async () => {
          try {
              setLoading(true);
              const response = await axios.get('https://fakestoreapi.com/products/category/jewelery');
              console.log('API Response:', response); 
              setAllData(response.data);
          } catch (error) {
              console.error("Error fetching data: ", error);
          } finally {
              setLoading(false);
          }
      };
      getData();
  }, []);
  

    console.log(allData,"allData")
    return (
        <div>
          {
            /*
            Router ile kullanılıyor
            data.map((dt, index) => (
              <div onClick={() => navigate(`detail/${dt.id}`)} style={{ cursor: "pointer", marginBottom: "30px" }} key={index}>
                <div>{dt.name}</div>
                <div>{dt.description}</div>
              </div>
            ))
            */
          }
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {allData?.map((data, index) => (
                <div key={index}>
                  <div>{data?.title}</div>
                  <img src={data?.image} alt={data?.title || "Image" } className="image-size" />
                </div>
              ))}
            </div>
          )}
        </div>
      );
}


export default Home
