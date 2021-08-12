module.exports = function toReadable (number) {
  
    let num = {
        0:['','one','two','three','four', 'five','six','seven','eight','nine'],
        1:['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'],
        2:['','','twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'],
        3:['hundred','thousand','million', 'billion','trillion'],
    
    
    };
    number = number.toString().split('');

    if (number[0] == 0) {
        return 'zero';
    }
    if (number.length == 1) {
        return num[0][number];
    }
    else if (number.length == 2) {
        if (number[0] == 1) 
            return num[1][number[1]];
        
        
        else if (number[1] == 0) 
           return num[2][number[0]];
        
        else 
            return num[2][number[0]] + ' ' + num[0][number[1]];
        
    } 
    else if (number.length == 3) {
        if (number[1] == 0 && number[2] == 0) 
        return  num[0][number[0]] +' ' + num[3][0] ;

        else if (number[1] == 1) 
        return num[0][number[0]] +' ' + num[3][0]+ ' ' +num[1][number[2]];

        else if (number[1] == 0) 
            return num[0][number[0]] + ' ' +num[3][0] + ' ' + num[0][number[2]];
        
        else if (number[2] == 0) 
        return num[0][number[0]] + ' ' +num[3][0] + ' ' + num[2][number[1]];
        
        else 
            return num[0][number[0]] + ' ' + num[3][0] + ' ' + num[2][number[1]] + ' ' + num[0][number[2]];
        
        
    } 
    
}  
