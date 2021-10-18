fetch(`https://newsapi.org/v2/everything?q=tesla&from=2021-09-18&sortBy=publishedAt&apiKey=7c1a8408bd464ae9a36113147527d46f`)
.then(function(res){
    return res.json();
})
.then(function(res){
    console.log('res:', res.articles);
    newsarticles(res.articles);
})
// 7c1a8408bd464ae9a36113147527d46f

//   async function newspaper(){
//       let res=await  fetch("https://newsapi.org/v2/everything?q=tesla&from=2021-09-18&sortBy=publishedAt&apiKey=7c1a8408bd464ae9a36113147527d46f")

//       let data=await res.json();
//       console.log('data:', data)
//       newsarticles(data)



let container=document.getElementById("home")

function newsarticles(data){

   data.forEach(datas => {
      
       let div=document.createElement("div")
       div.onclick=function(){
           onclick(datas)
       }

       let img=document.createElement("img")

       img.src=datas.urlToImage

       let title=document.createElement("h4")

       title.innerText=datas.title
       
        

      div.append(img,title)
      container.append(div)
   });
}newsarticles()
