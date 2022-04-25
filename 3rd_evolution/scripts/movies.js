// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
  // https://www.omdbapi.com/?s=ave&apikey=94711136&t
  let seats=JSON.parse(localStorage.getItem("ammount"))
  let wallet =document.getElementById("wallet")
  wallet.innerText=seats

  async function searchmovies(){
      try{
          const quary=document.getElementById("search").value
        const res=await fetch(`https://www.omdbapi.com/?s=${quary}&apikey=94711136&t`)
        const data=await res.json()
        // console.log(data)
        const movies=data.Search
        // console.log(movies)
        return movies

      }catch(err){
        console.log(err)
      }
  }

async function main(){
    let data=await searchmovies();
    if(data==undefined){
        return false
    }
    console.log(data)
    appenmovies(data)
}


function appenmovies(data){
    let movies_div=document.getElementById("movies")

    if(data==undefined){
        return false
    }
    movies_div.innerHTML=null;
    data.map(({Poster,Title})=>{

        let box=document.createElement("div") 
        // box.setAttribute("id","movies")
        img=document.createElement("img")
        img.src=Poster
        let name=document.createElement("h4")
        name.innerText=Title

        let book=document.createElement("button")
        book.setAttribute("class","book_now")
        book.innerText="book Now"
       

        box.append(img,name,book)

        let data={
            Poster,
            Title,
        }

        book.onclick=()=>{
            showvideo(data)
        }
        movies_div.append(box)
    })
}


const showvideo=(x)=>{
    console.log(x)
    window.location.href="checkout.html"
    localStorage.setItem("movie",JSON.stringify(x))
}



let id;
function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
    id=setTimeout(function(){
        func()
    },delay)
}