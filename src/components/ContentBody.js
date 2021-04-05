import { ContentPage } from './ContentPage.js';
import { Profile } from './Profile.js'

export function ContentBody() {
    const $contentbody=document.createElement('div');
        $contentbody.classList.add('Content');
        $contentbody.appendChild(Profile());
        $contentbody.appendChild(ContentPage());
    return $contentbody;
}