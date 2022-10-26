const images = document.querySelectorAll('[data-src]');

const imgOptions = {
    threshold: 1, 
    rootMargin: "0px 0px -50px 0px"
};

function preloadImage(img) {
    const src = img.getAttribute("data-src")
    console.log('thisis the src',src)
    console.log(document.getElementsByName('img'),'this is the img tag')
    if (!src){
        return;
    }
    img.src=src;
    console.log(img.className, 'is the class name for img')
    img.className = 'effect'
    console.log(img.className, 'nowwwwwwwww is the class name for img')
    console.log(document.querySelector('img').className,'this is the h1 tag')
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {

    entries.forEach(entry => {
        console.log(entry)
        if (!entry.isIntersecting) {
            return;
        } else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);

        }
    })
}, imgOptions)

images.forEach (image => {
    imgObserver.observe(image);
})


