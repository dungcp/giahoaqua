function check() {
    let fruit = document.getElementById('fruit').value;
    alert(fruit)
    switch (fruit) {
        case 'ổi':
            document.getElementById('text').innerHTML = 20000 + 'VNĐ/kg'
            break;
        case 'dưa hấu':
            document.getElementById('text').innerHTML = 20000 + 'VNĐ/kg'
             break;
        case 'táo':
            document.getElementById('text').innerHTML = 30000 + 'VNĐ/kg' 
            break;
        case 'xoài':
            document.getElementById('text').innerHTML = 30000 + 'VNĐ/kg'
            break;
        case 'cam':
            document.getElementById('text').innerHTML = 40000 + 'VNĐ/kg'
            break;
         case 'chôm chôm':
            document.getElementById('text').innerHTML = 40000 + 'VNĐ/kg'
            break;
            case 'măng cụt':
            document.getElementById('text').innerHTML = 50000 + 'VNĐ/kg'
            break;
         

    }
}