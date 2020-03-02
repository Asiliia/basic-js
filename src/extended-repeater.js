module.exports = function repeater(str, options) {
    let strArr = new Array('repeatTimes' in options ? options.repeatTimes : 1);
    strArr.fill(str);  
   
    let add = 'addition' in options 
    	? options['addition'] === null 
        	? 'null' 
            : options['addition'] 
        : ''; 

    let addArr = new Array('additionRepeatTimes' in options ? options.additionRepeatTimes : 1);
    addArr.fill(add);
  
    let addStr = addArr.join('additionSeparator' in options ? options.additionSeparator : '|');
    
    return strArr.map(x => x += addStr).join((('separator' in options) ? options.separator : '+'));
};
  