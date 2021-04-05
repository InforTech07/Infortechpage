export function Footer() {
    const $footer=document.createElement('footer');
    $footer.innerHTML=`
        <div class="footercontact">
            <ul>
                <li><img src="./src/assets/image/github.png" width="25px" height="25px" alt=""><a href="https://github.com/InforTech07" target="_blank">Ir enlace...</a></li>
                <li><img src="./src/assets/image/yuotube.png" width="25px" height="25px" alt=""><a href="https://www.youtube.com/channel/UCP6mdmKlVSe8arwYQ0oYyzA" target="_blank">Ir enlace...</a></li>
                <li><img src="./src/assets/image/twiter.png" width="25px" height="25px" alt=""><a href="#">Ir enlace...</a></li>
                <li><img src="./src/assets/image/whatsapp.png" width="25px" height="25px" alt=""><a href="#">Ir enlace...</a></li>
                <li><img src="./src/assets/image/instagram.png" width="25px" height="25px"><a href="https://www.instagram.com/infortech07/" target="_blank">Ir enlace...</a></li>
            </ul>
        </div>
    <span> Infortech | informática & tecnología </span>      
    `;
    return $footer;
}