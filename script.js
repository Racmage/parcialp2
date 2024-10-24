function calculate(x){
    var form =document.getElementById('calculatorForm');
    var formData = new FormData(form)

    let val1=parseFloat(document.getElementById(v1)) || 0;
    let val2=parseFloat(document.getElementById(v2)) || 0;
    

    let bsum=formData.get('sum');
    let bres=formData.get('res');
    let bmul=formData.get('mul');
    let bdiv=formData.get('division');

    if(x == 'sum'){
    bsum= function(val1,val2){
        let resul=parseFloat(document.getElementById(result).innerText(val1+val2)) || 0;
        return(resul)
    }
    }
    if(x == 'res'){
    bres= function(val1,val2){
        resul=val1-val2
        return(resul)
    }
    }
    if(x == 'mul'){
    bmul= function(val1,val2){
        resul=val1*val2
        return(resul)
    }
    }
    if(x == 'division'){
    bdiv= function(val1,val2){
        resul=val1/val2
        return(resul)
    }
    }
    
}