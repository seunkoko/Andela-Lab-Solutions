
function aritGeo(arr){
    if(arr.length > 0){
        var is_arr = true;
        var is_geo = true;
        diff1 = arr[1] - arr[0];
        diff2 = arr[1] / arr[0];
        
        for(var i=1; i<arr.length; i++){
            test1 = arr[i] - arr[i-1];
            test2 = arr[i] / arr[i-1];
            
            if(test1 != diff1){
                is_arr = false;
            }
            
            if(test2 != diff2){
                is_geo = false;
            }
        }
        
        if(is_arr){
            return "Arithmetic";
        } else if(is_geo) {
            return "Geometric";
        } else {
            return -1;
        }
    } else {
        return 0;
    }
}

