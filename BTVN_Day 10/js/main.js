let quadraticEquation2 = (a, b, c) =>      
{        
            if (a ==  0){
                if (b == 0){
                    return "Phương trình có vô số nghiệm!"
                }
                else{
                    // bx +c = 0 
                    return "Phương trình có 1 nghiệm là: " + (- c / b); 
                }
            }
            //a != 0 
            else {
                let denta = b * b  -  4 * a * c;
                if (denta < 0 ){
                    let  realPart = ( -b / ( 2 * a) ).toFixed( 2 );
                    let imgPart =   (Math.sqrt(-denta) / (2 * a)).toFixed(2);
                    return  `Phương trình có 2 nghiệm ảo: ${realPart} + ${imgPart}i and ${realPart}  - ${imgPart}i`; 
                }
                else if ( denta == 0 ){
                    return `Phương trình có 1 nghiệm duy nhất là: ${-b/ ( 2 * a)}`;
                }
                else
                {
                     let  result1 = (( -b + Math.sqrt(denta)) / ( 2 * a )).toFixed(2);
                     let  result2 = (( -b - Math.sqrt(denta)) / ( 2 * a )).toFixed(2);
                     return `Phương trình có 2 nghiệm phân biệt: ${result1} + ${result2}`;
                }
            }
            
   }

document.getElementById("root").innerHTML = quadraticEquation2(1 ,1, 1);