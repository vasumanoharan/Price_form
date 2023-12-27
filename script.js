
let button=document.getElementById('Btn')
button.addEventListener('click',()=>{
    let list=document.getElementById('List').value
    let price=document.getElementById('Price').value
    let piece=document.getElementById('Piece').value
   
    
    var tr = document.createElement('tr')
    var listtd = document.createElement('td')
    listtd.textContent=list
    tr.appendChild(listtd)
    

    
    var pricetd = document.createElement('td')
    pricetd.textContent=price
    tr.appendChild(pricetd)
    var tab = document.getElementById("TableSelect")

    var piecetd = document.createElement('td')
    piecetd.textContent=piece
    tr.appendChild(piecetd)
    tab.append(tr)
    
    var Btntd = document.createElement('td')
    
    Btntd.innerHTML = "<button onclick='DeleteBtn(this)' >Delete</button>";
    tr.appendChild(Btntd)
    
    tab.appendChild(tr) 
    

})
function DeleteBtn(arg){
    
    arg.closest('tr').remove()
}
