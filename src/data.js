 export const API_KEY = 'AIzaSyB3LUJ_3L_wcOJGPVOP47lRSVt7GGWq0Yo';

  export const value_converter = (value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }else if(value>=1000){
        return Math.floor(value/1000)+"K";
     
    }else{
        return value;
    }
 }