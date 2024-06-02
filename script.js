var busyFlag = false;
var TIME = 1000;



async function bubbleSort(){
    busyFlag = true;

    let bars = document.getElementsByClassName('bars');

    for(let i =0;i<bars.length;i++){
        let flag = false;
        for(let j=0;j<bars.length-i-1;j++){

            if(!busyFlag) return;

            bars[j].style.background = "red";
            bars[j+1].style.background = "red";
            await delay();

            
            

            if(Number.parseInt(bars[j].innerHTML) > Number.parseInt(bars[j+1].innerHTML)){

                bars[j].style.background = "yellow";
                bars[j+1].style.background = "yellow";
                await delay();

                let tmpT = bars[j].innerHTML;
                bars[j].innerHTML = bars[j+1].innerHTML;
                bars[j+1].innerHTML = tmpT;

                tmpT = bars[j].style.height;
                bars[j].style.height = bars[j+1].style.height;
                bars[j+1].style.height = tmpT;

                flag = true;
            }

            bars[j].style.background = "#44447f";
            bars[j+1].style.background = "#44447f";
            
           
        }

        if(!flag){
            busyFlag=false;
            return;
        }
    }
    busyFlag=false;
}

async function selectionSort(){
    busyFlag = true;
    let bars = document.getElementsByClassName('bars');

    for(let i=0;i<bars.length;i++){

        for(let j=i+1;j<bars.length;j++){

            if(!busyFlag) return;

            bars[i].style.background="red";
            bars[j].style.background="red";

            await delay();

            if(Number.parseInt(bars[i].innerHTML) > Number.parseInt(bars[j].innerHTML)){

                bars[i].style.background="yellow";
                bars[j].style.background="yellow";

                await delay();

                let tmpT = bars[j].innerHTML;
                bars[j].innerHTML = bars[i].innerHTML;

                bars[i].innerHTML = tmpT;

                tmpT = bars[j].style.height;

                bars[j].style.height = bars[i].style.height;
                bars[i].style.height = tmpT;

                bars[j].style.background="#44447f";
                bars[i].style.background="#44447f";
            }

            bars[j].style.background="#44447f";
            bars[i].style.background="#44447f";
        }
    }

    busyFlag=false;
}

async function quickSortD(bars,s,e){
    busyFlag = true;
    await quickSort(bars,s,e);
    busyFlag = false;
}

async function quickSort(bars,s,e){
    if(!busyFlag) return;
    if(s < e){
        const p = partition(bars,s,e);

        bars[p].style.background = 'yellow';
        await delay();

        for(let i=s;i<p;i++){
            bars[i].style.background = "green";
        }
        for(let i=p+1;i<=e;i++){
            bars[i].style.background = "green";
        }

        await delay();

        for(let i=s;i<p;i++){
            bars[i].style.background = "#44447f";
        }
        for(let i=p+1;i<=e;i++){
            bars[i].style.background = "#44447f";
        }

        bars[p].style.background = "#44447f";
        await quickSort(bars,s,p-1);
        await quickSort(bars,p+1,e);
    }
}

function partition(bars,s,e){


    let pivot = Number.parseInt(bars[s].innerHTML);

    bars[s].innerHTML = bars[e].innerHTML;
    const th = bars[s].style.height;
    bars[s].style.height = bars[e].style.height;
    
    bars[e].innerHTML = pivot.toString();
    bars[e].style.height = th;

    const oe = e;
    e--;

    while(s <= e){

        while(s <= e && Number.parseInt(bars[s].innerHTML) <= pivot){
            s++;
        }

        while(s <= e && Number.parseInt(bars[e].innerHTML) > pivot){
            e--;
        }

        if(s<e){
            const ti = bars[s].innerHTML;
            const the = bars[s].style.height;
            bars[s].innerHTML = bars[e].innerHTML;
            bars[s].style.height = bars[e].style.height;

            bars[e].innerHTML = ti;
            bars[e].style.height = the;
        }
    }

    const ti = bars[s].innerHTML;
    const the = bars[s].style.height;
    bars[s].innerHTML = pivot.toString();
    bars[s].style.height = th;

    bars[oe].innerHTML = ti;
    bars[oe].style.height = the;

    return s;

}

async function insertionSort(){

    busyFlag  = true;

    const bars = document.getElementsByClassName("bars");

    for(let i=1;i<bars.length;i++){

        if(!busyFlag) return;

        bars[i].style.background="red";
        await delay();

        let curr = Number.parseInt(bars[i].innerHTML)
        let val = i;

        while(val >0 && curr < Number.parseInt(bars[val-1].innerHTML)){

            bars[val].style.background="red";
            await delay();

            bars[val].innerHTML = bars[val-1].innerHTML;
            bars[val].style.height = bars[val-1].style.height;

            bars[val].style.background="#44447f";

            bars[val-1].innerHTML = `${curr}`;
            bars[val-1].style.height=`${curr}vh`;
            val--;
        }

        bars[val].style.height=`${curr}vh`;
        bars[val].innerHTML=`${curr}`;

        bars[i].style.background="#44447f";
    }
    busyFlag=false;
}

async function mergeSortD(bars,s,e){
    busyFlag = true;
    await mergeSort(bars,s,e);
    busyFlag = false;
}

async function mergeSort(bars,s,e){
    
    if(!busyFlag) return;
    let mid = Math.floor((s+e)/2);
    if(s<e){
        
       await mergeSort(bars,s,mid);
       await mergeSort(bars,mid+1,e);

       if(!busyFlag) return;

       for(let i=s;i<=e;i++){
        bars[i].style.background = "yellow";
       }
       await delay();
        merge(bars,s,mid,e);
        for(let i=s;i<=e;i++){
            bars[i].style.background = "#44447f";
           }
        
    }
}

function merge(bars,s,mid,e){
    

    while(s <= mid){

        if(Number.parseInt(bars[s].innerHTML) > Number.parseInt(bars[mid+1].innerHTML)){

            let t = bars[mid+1].innerHTML;
            bars[mid+1].innerHTML = bars[s].innerHTML;
            bars[s].innerHTML = t;

            t = bars[mid+1].style.height;
            bars[mid+1].style.height = bars[s].style.height;
            bars[s].style.height = t;
            

            let tmp = mid+1;

            while(tmp<e && Number.parseInt(bars[tmp].innerHTML) > Number.parseInt(bars[tmp+1].innerHTML)){
    
                let tmpT = bars[tmp].innerHTML;
                bars[tmp].innerHTML = bars[tmp+1].innerHTML;
                bars[tmp+1].innerHTML=tmpT;

                tmpT = bars[tmp].style.height;
                bars[tmp].style.height = bars[tmp+1].style.height;
                bars[tmp+1].style.height=tmpT;
    
                tmp++;
            }

            
        }

        s++;
    }
   

}

async function cocktailShakerSort(){

    const bars = document.getElementsByClassName("bars");
    let fes = 0;
    //console.log(bars[0].innerHTML);
    for(let i=0;i<bars.length;i++){

        for(let j=i+fes;j<bars.length-1-i;j++){

            bars[j].style.background="yellow";
            bars[j+1].style.background="yellow";
            await delay();

            if(Number.parseInt(bars[j].innerHTML) > Number.parseInt(bars[j+1].innerHTML)){
                
                bars[j].style.background="red";
                bars[j+1].style.background="red";
                await delay();

                let tmpT = bars[j].innerHTML;
                bars[j].innerHTML = bars[j+1].innerHTML;
                bars[j+1].innerHTML = tmpT;

                tmpT = bars[j].style.height;
                bars[j].style.height = bars[j+1].style.height;
                bars[j+1].style.height = tmpT;
            }
            bars[j].style.background="#44447f";
            bars[j+1].style.background="#44447f";
        }

        for(let k=bars.length-2-i;k>0+fes;k--){
            bars[k].style.background="yellow";
            bars[k-1].style.background="yellow";
            await delay();

            if(Number.parseInt(bars[k].innerHTML) < Number.parseInt(bars[k-1].innerHTML)){
                
                bars[k].style.background="red";
                bars[k-1].style.background="red";
                await delay()

                let tmpT = bars[k].innerHTML;
                bars[k].innerHTML = bars[k-1].innerHTML;
                bars[k-1].innerHTML = tmpT;

                tmpT = bars[k].style.height;
                bars[k].style.height = bars[k-1].style.height;
                bars[k-1].style.height = tmpT;
            }

            bars[k].style.background="#44447f";
            bars[k-1].style.background="#44447f";
            await delay();
        }
        fes++;
    }
}



function randomize(){
    if(busyFlag)return;
    let bars = document.getElementsByClassName("bars");

    for(let bar in bars){
        let rn = Math.floor(Math.random()*90);
        bars[bar].innerHTML=`${rn}`;

        if(bars[bar].style!=undefined)
        bars[bar].style.height=`${rn}vh`;
    }
}

function run(){

    if(busyFlag){
        alert("First stop the currently running algorithm")
        return;
    }

    let algo = document.getElementsByClassName("selection")[0].value;
    
    switch(algo){

        case 'bubble_sort': bubbleSort(); break;

        case 'selection_sort': selectionSort(); break;

        case 'insertion_sort': insertionSort(); break;

        case 'merge_sort': mergeSortD(document.getElementsByClassName("bars"),0,23); break;

        case 'quick_sort': quickSortD(document.getElementsByClassName("bars"),0,23); break;

        case 'cocktail_shaker_sort': cocktailShakerSort(); break;

        default:alert("invalid selection algorithm");
    }
}

function stop(){
    busyFlag = false;
}

function speed(){
    const btn = document.getElementById("speedBtn");

    if(TIME == 1000){
        btn.innerHTML = "SPEED 2x";
        TIME = 500;
    }else if(TIME == 500){
        btn.innerHTML = "SPEED 3x";
        TIME = 100;
    }else{
        btn.innerHTML = "SPEED 1x";
        TIME = 1000;
    }
}

const delay = ()=>new Promise((resolve)=>{setTimeout(()=>{resolve(1)},TIME)})


randomize();

const nameASCII =`                                  __      __                       
    /\\                            \\ \\    / /                       
   /  \\   _ __ _   _  __ _ _ __    \\ \\  / /__ _ __ _ __ ___   __ _ 
  / /\\ \\ | '__| | | |/ _\` | '_ \\    \\ \\/ / _ \\ '__| '_ \` _ \\ / _\` |
 / ____ \\| |  | |_| | (_| | | | |    \\  /  __/ |  | | | | | | (_| |
/_/    \\_\\_|   \\__, |\\__,_|_| |_|     \\/ \\___|_|  |_| |_| |_|\\__,_|
                __/ |                                              
               |___/                                               
`;

console.log(`%c${nameASCII}`,'font-family:monospace');
console.log("Linked In : https://www.linkedin.com/in/aryan-verma-b4a643228");
console.log("Git Hub : https://github.com/Aryan-verma2025/Sorting-Algorithms-Visualizer");