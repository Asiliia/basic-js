const MODERN_ACTIVITY = 15; 
const RATE_CONSTANT = 0.693 / 5730;

  module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== 'string' 
                              || sampleActivity instanceof String
                              || /[a-zA-Z]/g.test(sampleActivity) 
                              || sampleActivity <= 0
                              || sampleActivity > MODERN_ACTIVITY) {
        return false;
    }

    return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / RATE_CONSTANT);    
};
