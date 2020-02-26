module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
		return false;
	}
 
  return members
    .filter(m => (typeof m === 'string'))
    .map(m => 
      m.trim()
        .replace(/\n{2,}/g, '\n\n')
        .replace(/ +/g, ' ')
        [0].toUpperCase()
      )
  	.sort(function(a, b){
      if((a.charCodeAt(0) - 96) < (b.charCodeAt(0) - 96)) { return -1; }
      if((a.charCodeAt(0) - 96) > (b.charCodeAt(0) - 96)) { return 1; }
    })
    .join('');

};