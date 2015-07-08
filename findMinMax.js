
function findMinMax(array_value){
    var pos_max = array_value[0];
    var pos_min = array_value[0];

    
        for(var j = 1; j<array_value.length; j++){
            if(pos_max < array_value[j]){
                pos_max = array_value[j];
            }else if(pos_min > array_value[j]){
              pos_min = array_value[j];
            }
        }
     
     if(pos_min === pos_max){
         return [pos_min];
     }else{
         return [pos_min, pos_max];
     }
}
