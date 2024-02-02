const linksContainer = document.querySelector(".links");
const compSection = document.getElementById("comp-section");
let currentScroll = 0;
let targetScroll = 0;
const ease = 0.1;
let isMouseOvercompSection = false;

compSection.addEventListener("mouseenter", () => {
    isMouseOvercompSection = true;
  
    animate();
});

compSection.addEventListener("mouseleave", () => {
    isMouseOvercompSection = false;

});

document.addEventListener("mousemove", (e) => {
    const extraHeight = linksContainer.offsetHeight - window.innerHeight;
    targetScroll = (e.clientY / window.innerHeight) * -extraHeight;
});

function lerp(start, end, t) {
    return start * (1.0 - t) + end * t;
}

function animate() {
    if (isMouseOvercompSection) {
        currentScroll = lerp(currentScroll, targetScroll, ease);
        linksContainer.style.transform = `translateY(${currentScroll}px)`;
        requestAnimationFrame(animate);
    } 
    else {
        // Réinitialiser la position lorsque la souris quitte la zone compSection
        currentScroll =  (e.clientY / window.innerHeight) * -extraHeight;
        linksContainer.style.transform = `translateY(${currentScroll}px)`;
    }
}