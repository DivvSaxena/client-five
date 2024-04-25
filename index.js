//UI ELEMENTS

const JuicesEl = document.getElementById('Juices')
const LocationEl = document.getElementById('Location')
const AboutEl = document.getElementById('About')
const ItemsEl = document.getElementById('Items')

let click = true

document.getElementById('hamburger').addEventListener('click', (e) => {
    if(click){
        renderHamburger()
        click = false
    }else {
        notRenderHamburger()
        click = true
    }
    
})


function renderHamburger(){
    document.getElementById('list').style.display = `flex`
}

function notRenderHamburger(){
    document.getElementById('list').style.display = `none`
}

function scrollFunctionOne(){
    JuicesEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
    notRenderHamburger()
}

function scrollFunctionTwo(){
    AboutEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
    notRenderHamburger()
}

function scrollFunctionThree(){
    LocationEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
    notRenderHamburger()
}

function scrollFunctionFour(){
    ItemsEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
    notRenderHamburger()
}