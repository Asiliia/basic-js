module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const MIN_TURNS = Math.pow(2, disksNumber) - 1;
    return {
        turns: MIN_TURNS,
        seconds: MIN_TURNS / (turnsSpeed / 3600)
    }
}