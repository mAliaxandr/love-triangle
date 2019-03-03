/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
        for( var i = 0; i < preferences.length; i++){
            var pech1 = preferences[i] - 1;
            var pech2 = preferences[pech1] - 1;
            var pech3 = preferences[pech2] - 1;
            if(pech3 == i){
                    preferences[pech1] = NaN;    
                        if(pech1 != pech2 ){
                            count +=1; 
                        }
                }
        }
        return count ;
};
