document.addEventListener('DOMContentLoaded', function(){

    const shopItems = document.querySelectorAll('.shop-item')
    const popUps = document.querySelectorAll('.pop-up')
    const dropDowns = document.querySelectorAll('.ri-arrow-down-s-line')
    
    shopItems.forEach((item, index) =>{
        item.addEventListener('click', function(event){
            event.stopPropagation()
            if(popUps[index].classList.contains('open-pop-up')){
                popUps[index].classList.remove('open-pop-up')
                dropDowns[index].classList.remove('ri-arrow-up-s-line')
            }else{
                popUps.forEach(popUp=>popUp.classList.remove('open-pop-up'))
                dropDowns.forEach(dropDown=>dropDown.classList.remove('ri-arrow-up-s-line'))
                popUps[index].classList.add('open-pop-up')
                dropDowns[index].classList.add('ri-arrow-up-s-line')
            }
        })
    })
    document.addEventListener('click', function(){
        popUps.forEach(popUp => popUp.classList.remove('open-pop-up'))
        dropDowns.forEach(dropdown => dropdown.classList.remove('ri-arrow-up-s-line'))
    })
    window.addEventListener('scroll', function(){
        if(this.scrollY>250){
            popUps.forEach(popUp => popUp.classList.remove('open-pop-up'))
            dropDowns.forEach(dropdown => dropdown.classList.remove('ri-arrow-up-s-line'))
        }
    })



    const galleryImages = [
        {
            backgroundImage: 'assets/1.jpg',
            hoverImage: 'assets/model1.jpg',
            description: 'This timeless Classic Comfort Tee brings a perfect blend of style, comfort, and versatility to your everyday wardrobe. Made with soft, breathable cotton, this shirt is lightweight yet durable, designed to keep you cool and comfortable through all seasons. With a relaxed fit and a smooth finish, it’s ideal for layering under jackets or wearing on its own. Available in a variety of classic and seasonal colors, this tee is your go-to for casual, laid-back style or elevated layering.'
        },
        {
            backgroundImage: 'assets/2.jpg',
            hoverImage: 'assets/model2.jpg',
            description: 'The Essential Tee is your new wardrobe staple, bringing effortless style with a minimalist look. Crafted from ultra-soft, high-quality cotton, it offers a relaxed fit that’s perfect for any day. This tee is designed to give you freedom of movement without sacrificing style, making it an easy choice for layering or wearing solo. Available in a range of timeless colors, it complements anything from jeans to tailored slacks.'
        },
        {
            backgroundImage: 'assets/3.jpg',
            hoverImage: 'assets/model3.jpg',
            description: 'Designed for the active lifestyle, our Performance Tee combines functionality with a sleek, modern look. Made from moisture-wicking fabric that keeps you dry and cool, it’s ideal for workouts, outdoor adventures, or casual wear. The tee’s flexible fit allows for unrestricted movement, making it as comfortable as it is practical. Available in fresh, energizing colors, this tee brings both style and performance to any activity.'
        },
        {
            backgroundImage: 'assets/4.jpg',
            hoverImage: 'assets/model4.jpg',
            description: 'With a soft touch and refined design, the Heritage Tee merges comfort with classic style. Made from sustainably sourced materials, this shirt not only feels good but does good. Its relaxed fit and ribbed collar give it a timeless look, making it easy to pair with anything from jeans to chinos. The Heritage Tee is perfect for those who appreciate quality craftsmanship and a touch of sophistication in their everyday wear.'
        },
        {
            backgroundImage: 'assets/5.jpg',
            hoverImage: 'assets/model5.jpg',
            description: 'Our Eco-Friendly Tee is crafted from 100% organic cotton, combining environmental consciousness with comfort. This tee has a lightweight, breathable feel and is ideal for warm weather or layered styles. Its soft, natural texture complements the skin, while the range of earth-toned colors highlights its eco-conscious roots. This is more than a shirt; it’s a choice to support a sustainable future without sacrificing style or comfort.'
        },
        {
            backgroundImage: 'assets/6.jpg',
            hoverImage: 'assets/model6.jpg',
            description: 'Bring an elevated touch to your casual wardrobe with the Luxe Tee. Made from a smooth, finely woven fabric, this shirt boasts a tailored fit that feels like it was made just for you. Lightweight and breathable, it’s comfortable for all-day wear, whether you’re at the office or out for dinner. The Luxe Tee redefines casual elegance, pairing effortlessly with both relaxed and dressier pieces for a polished look every time.'
        },
        {
            backgroundImage: 'assets/7.jpg',
            hoverImage: 'assets/model7.jpg',
            description: 'Our Vintage Tee combines nostalgia with modern comfort, featuring a classic cut and a unique faded finish. This tee is made from pre-washed, ultra-soft cotton that feels broken-in from the first wear. Its retro look and feel make it a go-to for anyone who appreciates timeless style with a worn-in vibe. Pair it with jeans or shorts for an effortlessly cool, laid-back outfit that never goes out of style.'
        },
        {
            backgroundImage: 'assets/8.jpg',
            hoverImage: 'assets/model8.jpg',
            description: 'Perfect for the outdoor enthusiast, the Adventure Tee is built to move with you. Constructed from a durable yet flexible fabric blend, it resists wear and tear while providing a comfortable, stretchable fit. Designed for everything from city walks to trail hikes, this tee holds its shape and style no matter where you go. Choose the Adventure Tee when your day demands both resilience and refined casual style.'
        }
    ];
    
    
    let imageHolders = document.querySelectorAll('.gallery-area .image-area')

    imageHolders.forEach((imageHolder, index) => {
        imageHolder.style.backgroundImage = `url(${galleryImages[index].backgroundImage})`
    })

    let cards = document.querySelectorAll('.card')
    let cartBtn = document.querySelector('.cart-btn')
    let cartValue = document.querySelectorAll('.cart-badge')
    let addToCartIsClicked = false
    let number = 0
    cartBtn.addEventListener('click', () => {
        if (addToCartIsClicked) {
            console.log('Cannot click anymore');
            return;
        } else {
            number++;
            addToCartIsClicked = true; // Prevent further clicks until reset
            console.log('First click');
            cartValue.forEach(badge => {
                badge.innerHTML = number;
            });
        }
    });

    cards.forEach((card, index) => {
        card.addEventListener('mouseenter', ()=>{
            imageHolders[index].style.backgroundImage = `url(${galleryImages[index].hoverImage})`
        })
        card.addEventListener('mouseleave', ()=>{
        imageHolders[index].style.backgroundImage = `url(${galleryImages[index].backgroundImage})`
        })
        const tl2 = gsap.timeline({paused: true})
        let productImage = document.querySelector('.product-image')
        let productDesc = document.querySelector('.product-desc-content p')
        tl2.to('.product-section',{
            top: '0px'
        })
        card.addEventListener('click', ()=>{
            addToCartIsClicked = false
            console.log('cart button is clicked?: ',addToCartIsClicked);
            productImage.style.backgroundImage = `url(${galleryImages[index].backgroundImage})`
            productImage.style.setProperty('--side-image', `url(${galleryImages[index].hoverImage})`)
            productDesc.textContent = galleryImages[index].description
            tl2.play()
            document.body.style.overflowY =  'hidden'
        })
        let productClose = document.querySelector('.product-header .cancel-btn')
        productClose.addEventListener('click', ()=>{
            tl2.reverse()
            document.body.style.overflowY =  'unset'
        })
    })













    let menuBtn = document.querySelector('.menu-btn')
    const menu = document.querySelector('.nav-menu')
    const closeBtn = document.querySelector('.nav-head .cancel-btn')
    // menuBtn.addEventListener('click', ()=>{
    //     menu.style.transform = 'translateX(0)'
    //     document.body.style.overflowY =  'hidden'
    // })
    // closeBtn.addEventListener('click', ()=>{
    //     menu.style.transform = 'translateX(-100%)'
    //     document.body.style.overflowY =  'unset'
    // })

    const tl = gsap.timeline({ paused: true });
    tl.to(menu, {
        x: '0px',
    })
    tl.from('.menu-items li', {
        x: '-100px',
        stagger: .05,
        // duration: 0.5
    }, '-=0.2')
    tl.from('.menu-links-container .social-link', {
        y: '100px',
        stagger: 0.05
    }, '-=0.5')
    menuBtn.addEventListener('click', ()=>{
        document.body.style.overflowY =  'hidden'
        tl.play()
    })
    closeBtn.addEventListener('click', ()=>{
        document.body.style.overflowY =  'unset'
        tl.reverse()
    })



    // const productImage = document.querySelector('.product-image')
    // let currentImage = 0
    // const images = [
    //     '/assets/model1.jpg',
    //     '/assets/1.jpg'
    // ];
    // setInterval(() => {
    //     productImage.style.backgroundImage = `url(${images[currentImage]})`
    //     currentImage++
    //     if(currentImage > 1){
    //         currentImage = 0
    //     }
    // }, 5000);
})

// let cartValue = document.querySelectorAll('.cart-badge')
// console.log(cartValue.length);
// cartValue.forEach(cart =>{
//     cart.innerHTML = value
// })
