export function Head() {
    const $Header=document.createElement('div');
    $Header.classList.add('mastHead');
    $Header.innerHTML=`
        <div>
            <a href="#">InforTech</a>
        </div>
        <div>
            <ul>
                <li><a href="#/">Home</a></li>
                <li><a href="#/article">Artículos</a></li>
                <li><a href="#/video">Videos</a></li>
            </ul> 
        </div>       
        `;
    return $Header; 
}


