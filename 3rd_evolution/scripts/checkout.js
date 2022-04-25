// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let seats=JSON.parse(localStorage.getItem("amount"))
let wallet =document.getElementById("wallet")
wallet.innerText=seats
function value(id){
    return document.getElementById(id).value
}
function confurm(){
    let name=value("user_name")
    let seat=value("number_of_seats")
    p=Number(seat)*100
    // console.log(p)
    // console.log(seats)
    if(seats>=p){
        let amount=seats-p
        wallet.innerText=amount
        alert(`Booking successful!`)
        localStorage.setItem("amount",amount)
    }
    else if(seats<p){
        alert("Insufficient Balance!")
    }
}

let getmovie =JSON.parse(localStorage.getItem("movie"))
console.log(getmovie)

let box=document.getElementById("movie")
let img=document.createElement("img")
img.src=getmovie.Poster
let name=document.createElement("h2")
name.innerText=getmovie.Title
box.append(name,img)

