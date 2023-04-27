
 let BillsContainer= {Bills:[124,48,268,180,42]};
 let tip=[]
 let total=[];

for(let i=0; i<BillsContainer.Bills.length; i++){
//     for(let i=0; i<BillsContainer.Bills.length; i++){
//         total[i]= BillsContainer.Bills[i]+tip
      
 if(BillsContainer.Bills[i]<50){
    tip[i] =BillsContainer.Bills[i]*.2;
    console.log(tip)
 }else if(50<BillsContainer.Bills[i]<200){
    tip[i]=BillsContainer.Bills[i]*.15;
    console.log(tip)
 }else{
    tip[i] =BillsContainer.Bills[i]*.1;
 }
// }

}

for(let i=0; i<BillsContainer.Bills.length;i++){
total[i]=BillsContainer.Bills[i]+tip[i]
}
console.log(total);