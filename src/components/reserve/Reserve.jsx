import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import "./reserve.css";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../global";
import { SearchContext } from "../../Context/SearchContext";

const Reserve = ({ setOpen, hotelId ,days}) => {
 // console.log('reserveid',hotelId)
  const [selectedRooms, setSelectedRooms] = useState([]);
 const [totalprice,setTotalPrice]=useState()

  const no_of_reserved_rooms=selectedRooms.length;
  console.log(selectedRooms.length)
  console.log("days",days)


  const { data, loading, error } = useFetch(`${API}/hotels/room/${hotelId}`);
  const { dates } = useContext(SearchContext);

 const  getDatesInRange =(startDate, endDate) => {
     const start = new Date(startDate);
    const end = new Date(endDate);

    const date1 = new Date(start.getTime());
    let list=[]
//     const dates = [];

    while (date1 <= end) {
      list.push(new Date(date1).getTime());
     date1.setDate(date1.getDate() + 1);
    }
  
    return list
   };  
   const alldates=(getDatesInRange(dates[0].startDate, dates[0].endDate));

   const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date1) =>
      alldates.includes(new Date(date1).getTime())
    );

    return !isFound;
  };




  //  const handleSelect = (item) => {
  //   console.log(item)
  
  
  //   // const checked = e.target.checked;
  //   // const value = e.target.value;
 
  //   // setSelectedRooms(
  //   //   checked
  //   //     ? [...selectedRooms, value]
  //   //     : selectedRooms.filter((item) => item !== value)
  //   // );
  // };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    console.log("checked",checked)
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();


  const handleClick = async () => {
 
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`${API}/rooms/availability/${roomId}`, {
            dates: alldates,
           
          }
         
          );
          return res.data;
         
        })
     
      );
      setOpen(false);
      navigate("/");

    } catch (err) {}
  };


  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        { console.log(data)}
        {data.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">Rs.{item.price}</div>
            </div>
            <div className="rSelectRooms">
              {item.roomNumbers.map((roomNumber) => (
                <div className="room">
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                 
                    onChange={handleSelect}
                    // onChange={handleSelect(item)}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
              
                 
            </div>
           { console.log(days*item.price*no_of_reserved_rooms)}
      
          </div>
         
        ))}
      
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;