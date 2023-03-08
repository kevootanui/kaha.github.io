const bar=document.getElementById('bar');
const btn=document.getElementById('btn');
const nav=document.getElementById('navbar');

if (bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
    if (btn){
        btn.addEventListener('click',()=>{
            nav.classList.remove('active')
        })
}
