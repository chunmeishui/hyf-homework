import {useState,useEffect} from "react";
export function TimeOnPage(){
const [Time,setTime] = useState(0);
useEffect(()=> {
    setTimeout(()=> {
        setTime(prev => prev +1) 
    } ,1000)
   
},[Time])

return <p>You have used {Time} Seconds on this website</p>

};
