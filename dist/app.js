// When the user scrolls down 80px from the top of the document, 
//resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };
savePadding = document.getElementById("topNavbar").style.padding;
saveFontSize = document.getElementById("topNavbar").style.fontSize;
var topNav = document.getElementById("topNavbar");
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        topNav.style.padding = "5px 0px";
        topNav.style.fontSize = "0.1vh";
        console.log(topNav.style.fontSize);
        //document.getElementById("logo").style.fontSize = "25px";
    } else {
        topNav.style.padding = savePadding;
        topNav.style.fontSize = saveFontSize;
        //document.getElementById("topNavbar").style.padding = "100px 0px";
        //document.getElementById("logo").style.fontSize = "35px";
    }
}
function gotoAbout() {
    var element = document.getElementById("section_about");
    element.scrollTop = element.scrollHeight - element.clientHeight;
}

// JavaScript source code
const logo = document.querySelectorAll("#logo path");
for (let i = 0; i < logo.length; i++) {
    console.log(`letter ${i+1} is ${logo[i].getTotalLength()}`);
}
var tl = new TimelineMax({ onUpdate: updatePercentage });
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from('blockquote', .5, { x: 200, opacity: 0 });
tl.from('span', 1, { width: 0 }, "=-.5");
tl.from('#office', 1, { x: -200, opacity: 0, ease: Power4.easeInOut }, "=-1");
tl.from('#building', 1, { x: 200, opacity: 0, ease: Power4.easeInOut }, "=-.7");
tl.from('#insta', 1, { x: 200, opacity: 0, ease: Power4.easeInOut }, "=-.7");

tl2.from("#box", 1, { x:-100,opacity: 0, scale: 0 });
tl2.to("#box", .5, { scale: 1.3,  borderBottomColor: "black", borderTopColor: "black", borderLeftColor: "black", borderRightColor: "black",  boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)' })

const scene = new ScrollMagic.Scene({
    triggerElement: ".sticky",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin(".sticky")
    .setTween(tl)
    .addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: "blockquote"
})
    .setTween(tl2)
    .addTo(controller);


function updatePercentage() {
    //percent.innerHTML = (tl.progress() *100 ).toFixed();
    tl.progress();
    //console.log(tl.progress());
}