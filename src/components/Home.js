export function Home(dbs) {
    const $article=document.createElement('div');
    $article.classList.add('pag');
    $article.innerHTML=null;
    for (let index = 0; index < dbs.length; index++) {
        $article.innerHTML +=`
        <article class="Row animate__fadeInDown">
                            <h2>${dbs[index].title}</h2>
                            <p>
                                 <time datetime="2020-02-10T00:00:00+00:00">${dbs[index].date} </time>&emsp;
                            </p>
                            <p>
                                ${dbs[index].description}
                                <br>
                                <a href="${dbs[index].ref}" target="_blank"> Ir repositorio</a>
                            </p>
                            <p>
                                <img src="${dbs[index].src}" alt="img" >
                            </p>
                            
         </article>`;
    }
    return $article;
}
