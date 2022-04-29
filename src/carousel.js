async function getImages() {
    const data = await fetch('https://picsum.photos/v2/list?page=1&limit=10').then((response) => response.json())
    return data?.map(image => `<img src="${image.download_url}"></img>`)
}

async function setSwiper() {
    new Swiper('.swiper', {
        direction: 'horizontal',
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        virtual: {
            slides: await getImages(),
        },
    });
}

setSwiper()
