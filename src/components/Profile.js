import {getDataProfile} from '../helpers/profiledb.js'

export function Profile() {
    const dataprofile=getDataProfile();
    const $profile=document.createElement('div');
    $profile.classList.add('Profile');
    $profile.setAttribute('id','procontent');
    $profile.innerHTML=`
                <div class="Avatar">
                    <img src="${dataprofile[0].srclogo}" alt="infortech">
                </div>
                <span>informática & tecnología</span>
                <div>
                    <p>
                        ${dataprofile[0].sentence}
                        <br>
                        ${dataprofile[0].autor}
                    </p>
                </div>
                <ul>
                    <li><img src="./src/assets/image/github.png" width="25px" height="25px" alt=""><a href="https://github.com/InforTech07" target="_blank">Ir enlace...</a></li>
                    <li><img src="./src/assets/image/yuotube.png" width="25px" height="25px" alt=""><a href="https://www.youtube.com/channel/UCP6mdmKlVSe8arwYQ0oYyzA" target="_blank">Ir enlace...</a></li>
                    <li><img src="./src/assets/image/twiter.png" width="25px" height="25px" alt=""><a href="#">Ir enlace...</a></li>
                    <li><img src="./src/assets/image/whatsapp.png" width="25px" height="25px" alt=""><a href="#">Ir enlace...</a></li>
                    <li><img src="./src/assets/image/instagram.png" width="25px" height="25px"><a href="https://www.instagram.com/infortech07/" target="_blank">Ir enlace...</a></li>
                </ul>
                `;
    return $profile;
}