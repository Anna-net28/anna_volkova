const animItems = document.querySelectorAll('.__anim-items');
if

    (animItems.length > 0) {

    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 1000);
};

	$(document).ready(function(){
			$('.slider').slick({
                arrows:true,
                dots:true,
                slidesToShow:2,
                responsive:[
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow:2
                        }
                    },
                    {
                        breakpoint: 550,
                        settings: {
                            slidesToShow:1
                        }
                    }
                ]
		});
        $(".slides").slick({
            arrows:true,
                dots:true,
                slidesToShow:3,
                responsive:[
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow:2
                        }
                    },
                    {
                        breakpoint: 550,
                        settings: {
                            slidesToShow:1
                        }
                    }
                ]
          });
	
	});



const popupLinks = document.querySelectorA11('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorA11('.lock-padding');
let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) { 
    for (let index = 0; index < popupLinks.length; index++) {
const popupLink = popupLinks[index];
popupLink.addEventListener("click", function (e) {
const popupName = popupLink.getAttribute ('href').replace('#', '');
const curentPopup = document.getElementById(popupName) ;
popupOpen(curentPopup);
e.preventDefault();
});
    }
}

const popupCloseIcon = document.querySelectorA11('.close-popup');
if (popupCloselcon.length > 0) {
for (let index = 0; index < popupCloseIcon.length; index++) {
const el = popupCloseIcon[index];
el.addEventListener('click', function (e) {
    popupClose(el.closest('.popup'));
    e.preventDefault();
})
}
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);

        }else{
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }

        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('wrapper').offsetWidrh + 'px';

    for (let index = 0; index < lockPadding.length; index++) {
        const el =lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    
    }, timeout);

function bodyUnLock() {
    setTimeout(function () {
        for (let index = 0; index < lockPadding.length; index++) {
            constel = lockPadding[index];
            el.style.paddingRight = '0px';
        } 
          body.style.paddingRight = '0px';
          body.classList.remove('lock');

        }, timeout);
    }

unlock = false;
setTimeout(function () {
    unlock = true;
}, timeout);
  
} 

document.addEventListener('keydown', function (e) {
    if (e.which ===27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});

(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.mozMatchesSelector;
    }
})()

  