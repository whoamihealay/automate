window.onload = function () {
    Particles.init({
        selector: ".background"
    });
};
var particles = Particles.init({
    selector: ".background",
    color: ["#fff36e", "#8b906e", "#525540"],
    connectParticles: true,
    responsive: [
        {
            breakpoint: 750,
            options: {
                color: ["#fff36e", "#8b906e", "#525540"],
                maxParticles: 25,
                connectParticles: false
            }
        }
    ]
});