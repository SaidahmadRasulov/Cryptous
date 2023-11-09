const gamburger = document.querySelector('.menu__group');
const navbar = document.querySelector('.navbar')

function ToggleMenu() {
    gamburger.classList.toggle('hide');
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.classList.add('fixed')
    } else {
        navbar.classList.remove('fixed')
    }
})

const incr = true;
const decr = false;
const tbody = document.querySelector('.tbody');
const footer = document.querySelector('.footer__links')

const data = [
    {
        id: 1,
        title: 'Bitcoin BTC',
        price: '$55,206.61',
        dayr: '0.92%',
        week: '15.86%',
        cap: '$1,046,899,935,348',
        vol: '$1,046,899,935,348',
        img: '../Assets/bit.png',
        statimg: '../Assets/true.png',
        dboolean: true,
        wboolean: true
    },
    {
        id: 2,
        title: 'Ethereum ETH',
        price: '$55,206.61',
        dayr: '0.92%',
        week: '15.86%',
        cap: '$1,046,899,935,348',
        vol: '$1,046,899,935,348',
        img: '../Assets/eth.png',
        statimg: '../Assets/true.png',
        dboolean: false,
        wboolean: true
    },
    {
        id: 3,
        title: 'Cardano ADA',
        price: '$55,206.61',
        dayr: '0.92%',
        week: '15.86%',
        cap: '$1,046,899,935,348',
        vol: '$1,046,899,935,348',
        img: '../Assets/car.png',
        statimg: '../Assets/false.png'
    },
    {
        id: 4,
        title: 'Tether USDT',
        price: '$55,206.61',
        dayr: '0.92%',
        week: '15.86%',
        cap: '$1,046,899,935,348',
        vol: '$1,046,899,935,348',
        img: '../Assets/teth.png',
        statimg: '../Assets/true.png',
        dboolean: true,
        wboolean: true
    },
    {
        id: 5,
        title: 'Avalanche AVAX',
        price: '$55,206.61',
        dayr: '0.92%',
        week: '15.86%',
        cap: '$1,046,899,935,348',
        vol: '$1,046,899,935,348',
        img: '../Assets/aval.png',
        statimg: '../Assets/false.png'
    },
    {
        id: 6,
        title: 'Algorand ALGO',
        price: '$55,206.61',
        dayr: '0.92%',
        week: '15.86%',
        cap: '$1,046,899,935,348',
        vol: '$1,046,899,935,348',
        img: '../Assets/alg.png',
        statimg: '../Assets/true.png',
        dboolean: true,
        wboolean: true
    },

];

const links = [
    {
        id: 1,
        name: 'bx bxl-facebook'
    },
    {
        id: 2,
        name: 'bx bxl-twitter'
    },
    {
        id: 3,
        name: 'bx bxl-linkedin'
    },
    {
        id: 4,
        name: 'bx bxl-instagram'
    },
]

function Wrapp() {
    data.map((item, index) => {
        tbody.innerHTML += `
            <tr key='${index + 1}'>
                <td class='gray media__none'>
                <i class='bx bx-star media__none'></i>
                ${index + 1}
                </td>
                <td class='td__width'>
                <img src="${item.img}" />
                ${item.title}
                </td>
                <td class='media__none'>${item.price}</td>
                <td class='media__none ${item.dboolean ? "top" : "down"} '>${item.dayr}</td>
                <td class='media__none ${item.wboolean ? "top" : "down"} '>${item.week}</td>
                <td class='media__none md__media_block'>${item.cap}</td>
                <td class='block'>
                ${item.vol}
                </td>
                <td class='media__none stat__box'>
                    <img src='${item.statimg}' class='stat__img' />
                </td>
            </tr>
        `
    });

    links.map((item,index) => {
        footer.innerHTML += `
            <li key=${index + 1}>
                <i class='${item.name}'></i>
            </li>
        `
    })
};

Wrapp()