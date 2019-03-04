
/**
 * Created by lgs on 2018/1/16.
 */
let scrollLock = false;

export function funcBarInit(ele) {
    // checkBtnDisplay(ele);

    var funcbar  = ele;
    // var sbTop = funcbar.getElementsByClassName('scroll-btn-top')[0];
    // var sbBottom = funcbar.getElementsByClassName('scroll-btn-bottom')[0];

    // sbTop.onclick = function(){
    //     smoothScroll(funcbar, -338);
    // }

    // sbBottom.onclick = function(){
    //     smoothScroll(funcbar, 338);
    // }

    window.onresize = function () {
        // checkBtnDisplay(ele);
    }
}

function checkBtnDisplay(ele){
    var funcbar  = ele;
    var sbTop = funcbar.getElementsByClassName('scroll-btn-top')[0];
    var sbBottom = funcbar.getElementsByClassName('scroll-btn-bottom')[0];

    sbTop.style.display = 'none';
    sbBottom.style.display = 'none';
    if(parseInt(funcbar.scrollTop) == 0){
        sbTop.style.display = 'none';
        if(funcbar.offsetHeight < funcbar.scrollHeight - funcbar.scrollTop) {
            sbBottom.style.display = 'block';
        }
    } else {
        sbTop.style.display = 'block';
        if((funcbar.scrollTop + funcbar.offsetHeight) <  (funcbar.scrollHeight - 1)){
            sbBottom.style.display = 'block';
        }
    }
}

let scrollTimer = null;//表示当前正在滚动
let curDirection = 'down'; //当前滚动方向  down | up
let lastFinishTop = 0;//记录上次计算出的最终top值

export function smoothScroll(e) {
    processScroll(e);
}

function stopPropagation(e){
    if (e.stopPropagation) e.stopPropagation();
        else e.cancelBubble = true;
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false; 
}


function processScroll(e){
    e = e || window.event; 
    scrollLock = true;
    if(!e.currentTarget) {return ;}
    let ele = e.currentTarget;//当前元素
    let parentElm = ele.parentElement;//父元素
    let distance = e.wheelDeltaY !== undefined ? e.wheelDeltaY : - e.deltaY;//滚动值,IE的未deltaY，并且向下滚为正数
    let direction = distance < 0 ? 'down' : 'up';

    ele.style.position = 'relative';

    //当前top值
    var curTop = ele.style.top ? parseInt(ele.style.top.match(/^(-?\d+)px$/)[1])  : 0;
    if(direction === curDirection){//同一方向滚动
        distance += lastFinishTop - curTop + distance;
    } 
    curDirection = direction;
    

    //计算最终的top值
    var finishTop = ele.offsetHeight - parentElm.offsetHeight <= 0 ?
        0 
        : (curTop + distance) > 0 ? 0 
        :   (curTop + distance) <
            -1 * (ele.offsetHeight - parentElm.offsetHeight) ?
            -1 * (ele.offsetHeight - parentElm.offsetHeight) : (curTop + distance);
    
    if(lastFinishTop !== finishTop || scrollTimer !== null){
        //阻止事件冒泡
        stopPropagation(e);
    }
    lastFinishTop = finishTop;
    var stepTop = curTop; 
    var step = Math.floor(distance / 60);
    
    (function loop() {
        stepTop += step; 
        if(curDirection === 'down' ){//向下滚
            if(stepTop < finishTop){
                stepTop = finishTop;
            }
        }
        else{
            if(stepTop > finishTop){
                stepTop = finishTop;
            }
            if(stepTop > 0){
                stepTop = 0;
            }
        }
        if (stepTop != finishTop) {
            ele.style.top = stepTop + 'px';
            clearTimeout(scrollTimer); 
            scrollTimer = setTimeout(loop, 3);
        } else {
            ele.style.top = stepTop + 'px';
            scrollTimer = null; 
        }
    })();
}