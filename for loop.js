const num= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
for (let i=0; i<20;i++){
    console.log(num[i]);
    if (i%5==0){
        console.log("buzz");
    }
    else if (i%3==0){
        console.log("fizz");
    }else{console.log("");}
}