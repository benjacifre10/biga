import styles from '../../../styles.module.css';

const Notification = ({type = '', message = 'Mensaje', title = '', ubication = ''}) => {
    let div = document.createElement('div');
    let notiClass = [];
    notiClass.push(styles.biga83__noti__container);
    switch (ubication) {
        case 'ul':
            notiClass.push(styles.biga83__noti__showUpLeft);
            break;
        case 'u':
            notiClass.push(styles.biga83__noti__showUp);
            break;
        case 'ur':
            notiClass.push(styles.biga83__noti__showUpRight);
            break;
        case 'r':
            notiClass.push(styles.biga83__noti__showRight);
            break;
        case 'dr':
            notiClass.push(styles.biga83__noti__showDownRight);
            break;
        case 'd':
            notiClass.push(styles.biga83__noti__showDown);
            break;
        case 'dl':
            notiClass.push(styles.biga83__noti__showDownLeft);
            break;
        case 'l':
            notiClass.push(styles.biga83__noti__showLeft);
            break;
        case 'c':
            notiClass.push(styles.biga83__noti__showCenter);
            break;
        default:
            notiClass.push(styles.biga83__noti__showCenter);
            break;
    }
    switch (type) {
        case 's':
            notiClass.push(styles.biga83__noti__success);
            break;
        case 'd':
            notiClass.push(styles.biga83__noti__danger);
            break;
        case 'w':
            notiClass.push(styles.biga83__noti__warning);
            break;
        case 'i':
            notiClass.push(styles.biga83__noti__info);
            break;
        case 'y':
            notiClass.push(styles.biga83__noti__system);
            break;
        case 'b':
            notiClass.push(styles.biga83__noti__black);
            break;
        default:
            notiClass.push(styles.biga83__noti__default);
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
        if (document.querySelector('#biga83__noti__container') !== null) {
            div.className = div.className.replace(ubiClass, '');
            div.parentNode.removeChild(div);
        }
    }, 3000);
}

export default Notification;