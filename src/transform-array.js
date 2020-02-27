const DISCARD_NEXT_TXT = '--discard-next';
const DISCARD_PREV_TXT = '--discard-prev';
const DOUBLE_NEXT_TXT = '--double-next';
const DOUBLE_PREV_TXT = '--double-prev';

module.exports = function transform(arr) {

    if(!arr || !Array.isArray(arr)) {
        throw new Error();
       }

    if(!arr.length) {
        return [];
    }  
   
    if(arr.includes(DOUBLE_NEXT_TXT)) 
        double_next(arr);

    if(arr.includes(DOUBLE_PREV_TXT))
        double_prev(arr); 

    if(arr.includes(DISCARD_NEXT_TXT)) 
        discard_next(arr);

    if(arr.includes(DISCARD_PREV_TXT))
        discard_prev(arr);
       
    return arr;
    };  
   
    function discard_next (arr) {
     
        for(i = 0; i < arr.length; i++) {        
           if(arr[i] === DISCARD_NEXT_TXT) {
             if((i+1) < arr.length) {            
               arr.splice(i, 2);            
               return discard_next(arr);
              }
              else {
              	arr.splice(i, 1)
                return discard_next(arr);
              }
           } 
       }           
           
          return arr;  
     };
 
 
    function discard_prev(arr) {
        for(i = 0; i < arr.length; i++) {        
           if(arr[i] === DISCARD_PREV_TXT) {
             if((i-1) >= 0) {            
               arr.splice((i-1), 2);            
              }
              else {
               arr.splice(i, 1)
              }
              return discard_prev(arr);
           } 
       }           
           
          return arr;   
    };
 
    function double_next (arr) {
       for(i = 0; i < arr.length; i++) {        
           if(arr[i] === DOUBLE_NEXT_TXT) {
             if((i+1) < arr.length) {            
               arr.splice(i, 1, arr[i+1]);            
              }
              else {
              	arr.splice(i, 1)
              }
              return double_next(arr);
           } 
       }           
           
          return arr;  
    };

    function double_prev  (arr) {
           for(i = 0; i < arr.length; i++) {        
           if(arr[i] === DOUBLE_PREV_TXT) {
             if((i-1) >= 0) {            
               arr.splice(i, 1, arr[i-1]);            
              }
              else {
              	arr.splice(i, 1)
              }
              return double_prev(arr);
           } 
       }           
           
          return arr;  
    };