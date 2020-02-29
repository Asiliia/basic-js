const chainMaker = {
  param:[],
  addLink(value) {
     this.param.push(`( ${value} )`);
     return this;
  },
  removeLink(position) {
    if(typeof(position) !== 'number' 
      || !Number.isInteger(position)
      || this.param[position]=== undefined
      || position < 1 
      || position > this.param.length
      ){
        this.param=[];
        throw new Error('Error');
    }
    this.param.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.param.reverse();
    return this;
  },
  finishChain() { 
    let array = [...this.param];
    this.param = [];
    return array.join('~~');
  }
};

module.exports = chainMaker;
