const page = document.getElementById('Readweb');
const page_high = page.scrollHeight
var a = 0;
function myAutoFunction(){
    setInterval(function(){
        if(a<page_high){
            a = a+100;
            console.log(a);
            page.scrollTo({
                top:a,
                behavior: 'smooth' // 平滑滚动，去掉这行则为瞬间滚动
      });
        }else{
            console.log('到底');
        }
    },3000);
}
