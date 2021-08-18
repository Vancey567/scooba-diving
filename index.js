// window.onscroll = () => {
//     console.log('Scrolling');
// }

window.onscroll = () => {
    // console.log(window.pageYOffset);
    // document.body.scrollTop = window.pageYOffset
    // console.log(window.pageXOffset);

    // Header popup
    if(window.pageYOffset>112) {
        document.getElementById("nav-parent").style.position="fixed";
        document.getElementById("nav-parent").style.backgroundColor="white";
        document.getElementById("nav-parent").style.left=0;
        document.getElementById("nav-parent").style.top=0;
        document.getElementById("nav-parent").style.marginTop=0;
        document.getElementById("nav").style.width = "62%";
        document.getElementById("nav").style.color = "black";
        document.getElementById("nav-parent").style.boxShadow="0 1px 3px #d5d5d5";
        document.getElementById("nav-parent").style.boxShadow="0 1px 3px #d5d5d5";
        document.getElementById("active").style.color="blue";
        document.getElementById("nav").style.border="none";
    } else {
        document.getElementById("nav-parent").style.position="static";
        document.getElementById("nav-parent").style.backgroundColor="transparent";
        document.getElementById("nav-parent").style.marginTop=0;
        document.getElementById("nav").style.width = "62%";
        document.getElementById("nav").style.color = "white";
        document.getElementById("active").style.color="yellow";
    }


    // Show shadow of header only if it's below banner
    if(window.pageYOffset > 775){
        document.getElementById("nav-parent").style.boxShadow="0 1px 5px #d5d5d5";
    } else {
        document.getElementById("nav-parent").style.boxShadow="none";
    }


    // for back to top button pop up
    if(window.pageYOffset > 520) {
        document.getElementById('btt').style.transform="translateY(0)";
    } else {
        document.getElementById('btt').style.transform="translateY(15vh)";
    }


    // Code to go back to top 
    let scrollValue = window.pageYOffset;
    
    function scrollToTop() {
        window.scrollTo(0, scrollValue); // It take the coordinates in x and y respectivly to where you want to go
        if(scrollValue>0) {
            scrollValue -= 40;
        } else {
            cancelAnimationFrame(anim);
        }

        let anim = requestAnimationFrame(scrollToTop); // requestAnimationFrame is like setInterval, but in smooth way not like o - 1 but 0.1 0.2 0.3 - 0.9 1; 
    }




    
    document.getElementById('btt').addEventListener("click", () => {
        scrollValue = window.pageYOffset;
        scrollToTop();
        // requestAnimationFrame(scrollToTop);
    });
}


// Hiding and showing drawer
let mobNavStatus = false;
document.getElementById('menu-lines').addEventListener("click", () => {
    if(mobNavStatus === false) {
        document.getElementById('mob-nav').style.marginLeft="0";
        mobNavStatus = true;

        // Fading line
        document.getElementById('line2').style.opacity="0";
        document.getElementById('line1').style.transform="rotateZ(45deg) translate(12.2px)";
        document.getElementById('line3').style.transform="rotateZ(-45deg) translate(12px)";
    } else {
        document.getElementById('mob-nav').style.marginLeft="-65%";
        mobNavStatus = false;

        document.getElementById('line2').style.opacity="1";
        document.getElementById('line1').style.transform="rotateZ(0deg)";
        document.getElementById('line3').style.transform="rotateZ(0deg)";    }
})


// Cross Hamburger Animation



