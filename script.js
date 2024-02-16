let overlay = document.querySelector('.overlay');
let lists = document.querySelector('.list');
let input = document.querySelector('#inputBox');
let posts = document.querySelector('.posts')


var arr = [
    {name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]


 function addList(){

    input.addEventListener('focus',function(){
        overlay.style.display = 'block'
        lists.style.display = 'block'
    })

    input.addEventListener('blur',function(){
        overlay.style.display = 'none'
        lists.style.display = 'none'
    })
    
    let postCard = '';
    arr.forEach(function(elem){
        postCard +=`<div class="card">
        <img src="${elem.image}" alt="">
        <h5 class="caption">${elem.name}</h5>
        </div>`
    })

  
    posts.innerHTML = postCard;

 }

 function filters(){

    input.addEventListener('input',function(){
        let match = arr.filter((e)=>{
            return e.name.toLowerCase().startsWith(input.value.toLowerCase())
        })
        let clutter ='';
        let newCard = '';
        match.forEach((e)=>{
            clutter += `<div class="z-50 w-full h-10 flex items-center px-8 gap-5 border-b bg-white border-black">
            <i class="ri-search-line font-semibold"></i>
            <h4 class="font-semibold">${e.name}</h4>
            </div>`

            newCard += `<div class="card">
            <img src="${e.image}" alt="">
            <h5 class="caption">${e.name}</h5>
            </div>`
        })
        lists.innerHTML = clutter;
        posts.innerHTML = newCard ;


    })

 }





 filters()





addList()

















