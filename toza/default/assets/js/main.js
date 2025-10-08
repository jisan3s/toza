(function() {
	"use strict";

    window.onload = function(){
        
        // Back to Top
        const getId = document.getElementById("back-to-top");
        if (getId) {
            const topbutton = document.getElementById("back-to-top");
            topbutton.onclick = function (e) {
                window.scrollTo({ top: 0, behavior: "smooth" });
            };
            window.onscroll = function () {
                if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                    topbutton.style.opacity = "1";
                } else {
                    topbutton.style.opacity = "0";
                }
            };
        }

        // Preloader
        const getPreloaderId = document.getElementById('preloader');
        if (getPreloaderId) {
            getPreloaderId.style.display = 'none';
        }

        // Counter Js
        try {
            if ("IntersectionObserver" in window) {
                let counterObserver = new IntersectionObserver(function (entries, observer) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                        let counter = entry.target;
                        let target = parseInt(counter.innerText);
                        let step = target / 200;
                        let current = 0;
                        let timer = setInterval(function () {
                            current += step;
                            counter.innerText = Math.floor(current);
                            if (parseInt(counter.innerText) >= target) {
                            clearInterval(timer);
                            }
                        }, 10);
                        counterObserver.unobserve(counter);
                        }
                    });
                });

                let counters = document.querySelectorAll(".counter");
                    counters.forEach(function (counter) {
                    counterObserver.observe(counter);
                });
            }
        } catch {}

        // Background Image simpleParallax
        const simpleParallax = (elem, modifier) => {
            let paras = document.getElementsByClassName(elem);
            for (let i = 0; i < paras.length; i++) {
                paras[i].setAttribute(
                    "style",
                    "background-repeat: no-repeat; background-attachment: fixed; background-size: cover;background-position: center center;"
                );
            }
            const sp = () => {
                for (let i = 0; i < paras.length; i++) {
                    let x = paras[i].getBoundingClientRect().top / modifier;
                    let y = Math.round(x * 100) / 100;
                    paras[i].style.backgroundPosition = "center " + y + "px";
                }
                requestAnimationFrame(sp);
            };
            requestAnimationFrame(sp);
        };
        simpleParallax("bgImageParallax", 9);

    };

    // Music Partner Slider JS
	var SwiperTraveler = new Swiper(".music-partner-slider", {
        loop: true,
        spaceBetween: 0,
        autoHeight: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 5
            },
            1200: {
                slidesPerView: 6
            },
        }
    });

    // Marketing Partner Slider JS
	var SwiperTraveler = new Swiper(".marketing-partner-slider", {
        loop: true,
        spaceBetween: 25,
        autoHeight: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 5
            },
            1200: {
                slidesPerView: 6
            },
        }
    });

    // Marketing Showcase Slider JS
	var SwiperTraveler = new Swiper(".marketing-showcase-slider", {
        loop: true,
        spaceBetween: 25,
        autoHeight: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: ".showcase-prev",
            nextEl: ".showcase-next",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 3
            },
        }
    });
    
    // Marketing Testimonials Slider JS
	var SwiperTraveler = new Swiper(".marketing-testimonials-slider", {
        loop: true,
        spaceBetween: 25,
        autoHeight: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: ".testimonials-prev",
            nextEl: ".testimonials-next",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 2
            },
        }
    });
    


    
    
    
    // scrollCue
    scrollCue.init();
    
})();

// Header Sticky
window.addEventListener('scroll', event => {
    const height = 150;
    const { scrollTop } = event.target.scrollingElement;
    document.querySelector('#navbar').classList.toggle('sticky', scrollTop >= height);
});

// Music Pricing JS
document.addEventListener("DOMContentLoaded", function () {
    const toggleItems = document.querySelectorAll('.music-pricing-toggle-billing li');
    const priceElements = document.querySelectorAll('.price');
    toggleItems.forEach(item => {
        item.addEventListener('click', () => {
            toggleItems.forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            const billingType = item.getAttribute('data-billing');
            priceElements.forEach(priceEl => {
                const monthly = priceEl.getAttribute('data-monthly');
                const yearly = priceEl.getAttribute('data-yearly');
                if (billingType === 'monthly') {
                    priceEl.innerHTML = `$${monthly} <span>/month</span>`;
                } 
                else {
                    priceEl.innerHTML = `$${yearly} <span>/year</span>`;
                }
            });
        });
    });
});

// Marketing Pricing JS
document.addEventListener("DOMContentLoaded", function () {
    const toggleItems = document.querySelectorAll('.marketing-pricing-toggle-billing li');
    const priceElements = document.querySelectorAll('.price');
    toggleItems.forEach(item => {
        item.addEventListener('click', () => {
            toggleItems.forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            const billingType = item.getAttribute('data-billing');
            priceElements.forEach(priceEl => {
                const monthly = priceEl.getAttribute('data-monthly');
                const yearly = priceEl.getAttribute('data-yearly');
                if (billingType === 'monthly') {
                    priceEl.innerHTML = `$${monthly} <span>/month</span>`;
                } 
                else {
                    priceEl.innerHTML = `$${yearly} <span>/year</span>`;
                }
            });
        });
    });
});

// Animation GSAP
function all_title_animation() {
    var tg_var = jQuery(".section-title-animation");
    if (!tg_var.length) {
        return;
    }
    const quotes = document.querySelectorAll(".section-title-animation .title-animation");
    quotes.forEach((quote) => {
        if (quote.animation) {
            quote.animation.progress(1).kill();
            quote.split.revert();
        }
        var getclass = quote.closest(".section-title-animation").className;
        var animation = getclass.split("animation-");
        if (animation[1] == "style4") return;
        quote.split = new SplitText(quote, {
            type: "lines,words,chars",
            linesClass: "split-line",
        });
        gsap.set(quote, {
            perspective: 400,
        });
        if (animation[1] == "style1") {
            gsap.set(quote.split.chars, {
            opacity: 0,
                x: "50",
            });
        }
        if (animation[1] == "style2") {
            gsap.set(quote.split.chars, {
                opacity: 0,
                y: "90%",
                rotateX: "-40deg",
            });
        }
        if (animation[1] == "style3") {
            gsap.set(quote.split.chars, {
                opacity: 0,
            });
        }
        quote.animation = gsap.to(quote.split.chars, {
            scrollTrigger: {
                trigger: quote,
                start: "top 90%",
            },
            x: "0",
            y: "0",
            rotateX: "0",
            opacity: 1,
            duration: 1,
            ease: Back.easeOut,
            stagger: 0.02,
        });
    });
}
ScrollTrigger.addEventListener("refresh", all_title_animation);