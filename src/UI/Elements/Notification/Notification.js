import styles from './Notification.module.css';

const Notification = ({type = '', message = 'Mensaje', title = '', ubication = ''}) => {
    let div = document.createElement('div');
    let notiClass = [];
    notiClass.push(styles.notification__container);
    switch (ubication) {
        case 'ul':
            notiClass.push(styles.showUpLeft);
            break;
        case 'u':
            notiClass.push(styles.showUp);
            break;
        case 'ur':
            notiClass.push(styles.showUpRight);
            break;
        case 'r':
            notiClass.push(styles.showRight);
            break;
        case 'dr':
            notiClass.push(styles.showDownRight);
            break;
        case 'd':
            notiClass.push(styles.showDown);
            break;
        case 'dl':
            notiClass.push(styles.showDownLeft);
            break;
        case 'l':
            notiClass.push(styles.showLeft);
            break;
        case 'c':
            notiClass.push(styles.showCenter);
            break;
        default:
            notiClass.push(styles.showCenter);
            break;
    }
    switch (type) {
        case 's':
            notiClass.push(styles.noti__success);
            break;
        case 'd':
            notiClass.push(styles.noti__danger);
            break;
        case 'w':
            notiClass.push(styles.noti__warning);
            break;
        case 'i':
            notiClass.push(styles.noti__info);
            break;
        case 'y':
            notiClass.push(styles.noti__system);
            break;
        case 'b':
            notiClass.push(styles.noti__black);
            break;
        default:
            notiClass.push(styles.noti__default);
            break;
    }
    div.className = notiClass.join(' ');
    let text = document.createTextNode(message);
    div.appendChild(text);
    document.body.appendChild(div);

    div.addEventListener('click', () => {
        div.className = div.className.replace(notiClass, '');
        div.parentNode.removeChild(div);
    });

    setTimeout(() => {
        if (document.querySelector('#notification__container') !== null) {
            div.className = div.className.replace(ubiClass, '');
            div.parentNode.removeChild(div);
        }
    }, 30000);
}

export default Notification;