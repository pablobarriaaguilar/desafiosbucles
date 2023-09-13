sum = 0;
product = 1;

for(i = 0; i < 20; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

for(i = 0; i <= 100; i++ ){
    if(i % 3 == 0){
        console.log(i);
    }
}


for(i = 4 ;i <= -3.5; i-1.5 ){
    console.log(i);
}


for(i = 0; i <= 100; i++){
    sum = sum + i;
}

console.log(sum);

for (i = 1; i <= 12; i++){

    product = product * i;
    console.log(product);
}

