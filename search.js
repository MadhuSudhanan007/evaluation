function sub(){

    let name=document.getElementById("inp").value
    console.log('name:', name)
    fetch(`https://newsapi.org/v2/everything?q=${name}&from=2021-09-18&sortBy=publishedAt&apiKey=7c1a8408bd464ae9a36113147527d46f`)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        console.log('res:', res.articles);
        newsarticles(res.articles);
    })

  


   let container=document.getElementById("home")

   function newsarticles(data){

       data.forEach(datas => {
          
           let div=document.createElement("div")
           div.onclick=datas.url

           let img=document.createElement("img")

           img.src=datas.urlToImage

           let title=document.createElement("h4")

           title.innerText=datas.title

          
          div.append(img,title)
          container.append(div)
       });
   }newsarticles()
}