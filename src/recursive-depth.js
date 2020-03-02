module.exports = class DepthCalculator {
    calculateDepth (arr, checked) {               
        checked = checked || new Set();
        if (!Array.isArray(arr) || checked.has(arr)) 
            return 0;
        checked.add(arr);

        let arrDepth = 0;         
        arr.forEach(el => arrDepth = Math.max(arrDepth, this.calculateDepth(el, checked)));

        return ++arrDepth;    
    };
}
   
