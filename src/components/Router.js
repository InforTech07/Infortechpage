import { Article } from "./Article.js";
import { Home } from "./Home.js";
import{ getDbArticle }from "../helpers/articledb.js";
import{ getDbHome }from "../helpers/homedb.js"
import { ContentVideo } from "./ContentVideo.js";


export function Router() {
    const $articledb=getDbArticle();
    const $homedb=getDbHome();
    const $cont=document.getElementById('contentpage');
    let {hash} = location;
    console.log(hash);
    $cont.innerHTML=null;
    switch (hash) {
        case '/' : 
        case '#/':
                        $cont.appendChild(Home($homedb));
            break;
        case '#/article': $cont.appendChild(Article($articledb));
            break;
        case '#/video':  $cont.appendChild(ContentVideo());
            break;
    
        default:         $cont.appendChild(Home($homedb));
            break;
    }
}