let btnStart = document.querySelector('.btn-start1')
let btnStart1 = document.querySelector('.btn-start2')
let inpt = document.querySelector('.input1');
let inpt1 = document.querySelector('.input2');
let cnt = 0;
btnStart.addEventListener('click', () => {
    btnStart.innerText = 'start';
});
btnStart1.addEventListener('click', () => {
    cnt++;
    if (cnt > 10) cnt = 1;
    btnStart1.innerText = `${cnt}`;

});
inpt.addEventListener('change', () => {
    inpt.innerText = `${inpt.value}`;
});
// inpt1.addEventListener("mousedown",(event)=>{
//     // inpt1.innerText=`event happening`;
//     console.log(event.button);
// });
inpt1.addEventListener('mousedown', (event) => {
    let xCord = event.pageX;
    let yCord = event.pageY;
    // inpt1.innerHTML=`Xcoordinate${xCord}...Ycoordinate${yCord}`;
    console.log(xCord, yCord);
})

