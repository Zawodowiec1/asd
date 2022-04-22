const textEl = document.getElementById('text')
const dataEl = document.getElementById('data')

textEl.addEventListener('input', (e)=>{
    console.log('input')
})

textEl.addEventListener('change', (e)=>{
    console.log('change')
})

// -----------

const divEl=document.querySelector('#d1')
const pEl=document.querySelector('#d1>p')
const spanEl=document.querySelector('#d1>p>span')

divEl.addEventListener('click', (e)=>{
    console.log('Element div')
})
pEl.addEventListener('click', (e)=>{
    console.log('Element p')
})
spanEl.addEventListener('click', (e)=>{
    console.log('Element span')
}, true)

const elClick=document.getElementById('click')
const elBtn=document.getElementById('unclick')

// ------------

const funkcja=()=>{
    console.log("Działa jeszcze jak")
}
elClick.addEventListener('click', funkcja)

elBtn.addEventListener('click', ()=>{
    elClick.removeEventListener('click', funkcja)
})

// ------------
const submitBtn=document.getElementById('submit')
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log("Bla Blas")
})

// -------------