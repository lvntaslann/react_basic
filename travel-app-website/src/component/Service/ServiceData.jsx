import { FaPlane,FaHotel,FaUmbrellaBeach,FaBell    } from "react-icons/fa";
const serviceData = [
    {
      id: 1,
      title: "Flight booking",
      icon: <FaPlane className="text-4xl text-blue-500"/>,
      description:"We provide easy and quick"
    },
    {
        id: 2,
        title: "Hotel booking",
        icon: <FaHotel className="text-4xl text-blue-500"/>,
        description:"We provide easy and quick"
    },
    {
        id: 3,
        title: "Beach Tours",
        icon: <FaUmbrellaBeach className="text-4xl text-blue-500"/>,
        description:"We provide easy and quick"
    },
    {
        id: 4,
        title: "Concierge Services",
        icon: <FaBell className="text-4xl text-blue-500"/>,
        description:"We provide easy and quick"
    },
  ];
  
  export default serviceData;
  