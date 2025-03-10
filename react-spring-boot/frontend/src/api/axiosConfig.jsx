import axios from 'axios';
export default axios.create({
    //tüm HTTP isteklerinin temel URL'si
    //spring boot apimiz localde 8080 portunda çalışıyor
    baseURL:'http://localhost:8080',
    //istek başlıklarına özel bir başlık
    headers:{"ngrok-skip-browser-warning":"true"}
});