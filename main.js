document.addEventListener('DOMContentLoaded', function(){

    const shopItems = document.querySelectorAll('.shop-items')
    const popUps = document.querySelectorAll('.pop-up')
    const dropDowns = document.querySelectorAll('.ri-arrow-down-s-line')
    console.log(popUps.length);
    console.log(dropDowns.length);
    console.log(shopItems.length);
    
    
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
    let lastScrollTop = 0;
    window.addEventListener('scroll', function(){
        let currentScroll = window.scrollY;
        const nav = document.querySelector('.nav');
        if(this.scrollY>250){
            popUps.forEach(popUp => popUp.classList.remove('open-pop-up'))
            dropDowns.forEach(dropdown => dropdown.classList.remove('ri-arrow-up-s-line'))
        }
        if (currentScroll < 300) {
            // If scrolled less than 500px, remove the 'top-menu' class
            nav.classList.remove('top-menu');
        } else if (currentScroll > lastScrollTop) {
            // Scrolling down and passed 500px
            nav.classList.remove('top-menu');
        } else if (currentScroll < lastScrollTop) {
            // Scrolling up
            nav.classList.add('top-menu');
        }
    
        lastScrollTop = currentScroll;
    })



    const galleryImages = [
        {
            backgroundImage: 'assets/1.jpg',
            hoverImage: 'assets/model1.jpg',
            description: 'This timeless Classic Comfort Tee brings a perfect blend of style, comfort, and versatility to your everyday wardrobe. Made with soft, breathable cotton, this shirt is lightweight yet durable, designed to keep you cool and comfortable through all seasons. With a relaxed fit and a smooth finish, it’s ideal for layering under jackets or wearing on its own. Available in a variety of classic and seasonal colors, this tee is your go-to for casual, laid-back style or elevated layering.',
            price: '$20.00'
        },
        {
            backgroundImage: 'assets/2.jpg',
            hoverImage: 'assets/model2.jpg',
            description: 'The Essential Tee is your new wardrobe staple, bringing effortless style with a minimalist look. Crafted from ultra-soft, high-quality cotton, it offers a relaxed fit that’s perfect for any day. This tee is designed to give you freedom of movement without sacrificing style, making it an easy choice for layering or wearing solo. Available in a range of timeless colors, it complements anything from jeans to tailored slacks.',
            price: '$18.00'
        },
        {
            backgroundImage: 'assets/3.jpg',
            hoverImage: 'assets/model3.jpg',
            description: 'Designed for the active lifestyle, our Performance Tee combines functionality with a sleek, modern look. Made from moisture-wicking fabric that keeps you dry and cool, it’s ideal for workouts, outdoor adventures, or casual wear. The tee’s flexible fit allows for unrestricted movement, making it as comfortable as it is practical. Available in fresh, energizing colors, this tee brings both style and performance to any activity.',
            price: '$22.00'
        },
        {
            backgroundImage: 'assets/4.jpg',
            hoverImage: 'assets/model4.jpg',
            description: 'With a soft touch and refined design, the Heritage Tee merges comfort with classic style. Made from sustainably sourced materials, this shirt not only feels good but does good. Its relaxed fit and ribbed collar give it a timeless look, making it easy to pair with anything from jeans to chinos. The Heritage Tee is perfect for those who appreciate quality craftsmanship and a touch of sophistication in their everyday wear.',
            price: '$24.00'
        },
        {
            backgroundImage: 'assets/5.jpg',
            hoverImage: 'assets/model5.jpg',
            description: 'Our Eco-Friendly Tee is crafted from 100% organic cotton, combining environmental consciousness with comfort. This tee has a lightweight, breathable feel and is ideal for warm weather or layered styles. Its soft, natural texture complements the skin, while the range of earth-toned colors highlights its eco-conscious roots. This is more than a shirt; it’s a choice to support a sustainable future without sacrificing style or comfort.',
            price: '$25.00'
        },
        {
            backgroundImage: 'assets/6.jpg',
            hoverImage: 'assets/model6.jpg',
            description: 'Bring an elevated touch to your casual wardrobe with the Luxe Tee. Made from a smooth, finely woven fabric, this shirt boasts a tailored fit that feels like it was made just for you. Lightweight and breathable, it’s comfortable for all-day wear, whether you’re at the office or out for dinner. The Luxe Tee redefines casual elegance, pairing effortlessly with both relaxed and dressier pieces for a polished look every time.',
            price: '$30.00'
        },
        {
            backgroundImage: 'assets/7.jpg',
            hoverImage: 'assets/model7.jpg',
            description: 'Our Vintage Tee combines nostalgia with modern comfort, featuring a classic cut and a unique faded finish. This tee is made from pre-washed, ultra-soft cotton that feels broken-in from the first wear. Its retro look and feel make it a go-to for anyone who appreciates timeless style with a worn-in vibe. Pair it with jeans or shorts for an effortlessly cool, laid-back outfit that never goes out of style.',
            price: '$22.00'
        },
        {
            backgroundImage: 'assets/8.jpg',
            hoverImage: 'assets/model8.jpg',
            description: 'Perfect for the outdoor enthusiast, the Adventure Tee is built to move with you. Constructed from a durable yet flexible fabric blend, it resists wear and tear while providing a comfortable, stretchable fit. Designed for everything from city walks to trail hikes, this tee holds its shape and style no matter where you go. Choose the Adventure Tee when your day demands both resilience and refined casual style.',
            price: '$28.00'
        }
    ];
    
    let imageHolders = document.querySelectorAll('.gallery-area .image-area')
    let prices = document.querySelectorAll('.before-price')
    imageHolders.forEach((imageHolder, index) => {
        imageHolder.style.backgroundImage = `url(${galleryImages[index].backgroundImage})`
    })
    prices.forEach((price, index)=>{
        price.textContent = galleryImages[index].price
    })











    // CART FUNCTION

    let cards = document.querySelectorAll('.card')
    let cartBtn = document.querySelector('.cart-btn')
    let cartValue = document.querySelectorAll('.cart-badge')
    let cartContainer = document.querySelector('.cart-display')
    let addToCartIsClicked = false
    let number = 0
    let currentProductNumber
    const estimateElement = document.querySelector('.estimate');

    function updateEstimate(){
        let total = 0
        let itemtotals = document.querySelectorAll('.counter-item-total')
        itemtotals.forEach(itemTotal => {
            total+=parseFloat(itemTotal.textContent.replace('$',''))
        })
        estimateElement.textContent = total
    }

    const createCartItem = (imgUrl, productName, productPrice, productIndex) =>{
        let cartItem = document.createElement('div')
        cartItem.classList.add('cart-item')
        cartItem.innerHTML = `
        <div class="cart-details">
            <div class="cart-image" style="background-image: url(${imgUrl});"></div>
            <div class="cart-product-details">
                <div class="cart-product content">
                    <div class="cart-product-name">${productName}</div>
                    <div class="cart-product-price">${productPrice}</div>
                </div>
                <div class="cart-quantity">
                    <div class="counter">
                        <i class="ri-subtract-line subtract"></i>
                        <input class="quantity-input" type="number" min="1" step="1" value="1">
                        <i class="ri-add-line add"></i>
                    </div>
                    <div class="delete">
                        <i class="ri-delete-bin-6-line"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="counter-item-total">${productPrice}</div>
    `;
        const input = cartItem.querySelector('.quantity-input');
        const addButton = cartItem.querySelector('.add');
        const subtractButton = cartItem.querySelector('.subtract');
        let deleteBtn = cartItem.querySelector('.delete')
        let price = cartItem.querySelector('.cart-product-price').textContent.replace('$', '')
        let totalPrice = cartItem.querySelector('.counter-item-total')

        function updateItemTotal(){
            let newValue = input.value ? parseInt(input.value)*parseFloat(price) : price
            totalPrice.textContent = `$${newValue}`
            updateEstimate()
        }
        input.addEventListener('input', ()=>{
            updateItemTotal()
        })

        deleteBtn.addEventListener('click', ()=>{
            cartItem.remove()
            number--;
            cartValue.forEach(badge => {
                badge.innerHTML = number;
                if(number == 0){
                    badge.style.display ='none'
                }
            });
            cards[productIndex].classList.remove('selected')
            addToCartIsClicked = false
            updateEstimate()
        })
        input.addEventListener('blur', () => {
            if (input.value == '') {
                input.value = 1;
            }
        });
    
        addButton.addEventListener('click', () => {
            input.stepUp();
            updateItemTotal()
        });
    
        subtractButton.addEventListener('click', () => {
            input.stepDown();
            updateItemTotal()
        });

    
        return cartItem
    }
    function createAlert(){
        let alert = document.createElement('div')
        alert.classList.add('alert')
        alert.innerHTML = '<span><i class="ri-shopping-cart-2-line"></i> Added to cart!</span>'
        document.body.appendChild(alert)
        setTimeout(()=>{
            alert.remove()
        }, 7000)
    }
    function createWarningAlert(){
        let alert = document.createElement('div')
        alert.classList.add('alert')
        alert.innerHTML = '<span><i class="ri-shopping-cart-2-line"></i> Already added!</span>'
        document.body.appendChild(alert)
        setTimeout(()=>{
            alert.remove()
        }, 7000)
    }

    cartBtn.addEventListener('click', () => {
        if (addToCartIsClicked) {
            console.log('Cannot click anymore');
            createWarningAlert()
            return;
        } 
        else {
            if(cards[currentProductNumber].classList.contains('selected')){
                console.log('already selected');
                return
            }
            number++;
            addToCartIsClicked = true;
            console.log('First click');
            cartValue.forEach(badge => {
                badge.innerHTML = number;
                badge.style.display ='grid'
            });
            cards[currentProductNumber].classList.add('selected')
            // DEBUGGING
            cards.forEach((card, index) =>{
                console.log(index+1, card.classList.value);  
            })
            let itemName = document.querySelectorAll('.product-name')        
            cartContainer.insertBefore(createCartItem(galleryImages[currentProductNumber].backgroundImage, itemName[currentProductNumber].textContent, galleryImages[currentProductNumber].price, currentProductNumber), cartContainer.firstChild)
            updateEstimate()
            createAlert()
        }
    });


    let carts = document.querySelectorAll('.cart')
    carts.forEach(cart=>{
        cart.addEventListener('click',()=>{
            document.querySelector('.cart-section').classList.toggle('cart-open')
            // console.log(document.querySelector('.cart-section').classList.value);
            if(document.querySelector('.cart-section').classList.contains('cart-open')){
                console.log('contains');
                document.body.style.overflowY = 'hidden'
            }
            else{
                console.log('removed');
                document.body.style.overflowY = 'unset'
            }
            const menu = document.querySelectorAll('.nav-menu')
            menu.forEach(menu=>{
            // document.body.style.overflowY =  'unset'
            tl.reverse()
            })
        })
    })
    document.querySelector('.continue').addEventListener('click', ()=>{
        document.querySelector('.cart-section').classList.toggle('cart-open')
    })

    // CART FUNCTION END










    // CARDS FUNCTIONS
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
            currentProductNumber = index
            console.log('current product index: ', currentProductNumber);
            
        })
        let productClose = document.querySelector('.product-header .cancel-btn')
        productClose.addEventListener('click', ()=>{
            tl2.reverse()
            document.body.style.overflowY =  'unset'
        })
        document.querySelector('.more-like-this a').addEventListener('click', function(){
                        tl2.reverse()
            document.body.style.overflowY =  'unset'
        })
    })
    // CARDS FUNCTIONS END









// MENU OPEN AND CLOSE
    let menuBtn = document.querySelectorAll('.menu-btn')
    const menu = document.querySelectorAll('.nav-menu')
    const closeBtn = document.querySelectorAll('.nav-head .cancel-btn')
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

    menuBtn.forEach((menu, index)=>{
        menu.addEventListener('click', ()=>{
            document.body.style.overflowY =  'hidden'
            tl.play()
        })
    })
    closeBtn.forEach((close, index)=>{
        close.addEventListener('click', ()=>{
        document.body.style.overflowY =  'unset'
        tl.reverse()
        })

    })
})