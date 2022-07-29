let zSpacing = -1000,
    lastPos = zSpacing / 5,
    frames = document.querySelectorAll('.frame'),
    zVals = [];

const soundBtn = document.querySelector('.soundtrack-btn');
const audioTrack = document.querySelector('.audio');

const threeDimensionalScroll = () => {
    let top = document.documentElement.scrollTop,
        delta = lastPos - top;
    lastPos = top;

    frames.forEach((frame, i) => {
        zVals.push((i * zSpacing) + zSpacing);
        zVals[i] += delta * -5;

        const translate = `translateZ(${zVals[i]}px)`,
            opacity = zVals[i] < Math.abs(zSpacing) / 1.5 ? 1 : 0;
        console.log(zVals[i], Math.abs(zSpacing) / 1.5)
        console.log(zVals[i] < Math.abs(zSpacing) / 1.5)

        frame.style.transform = translate;
        frame.style.opacity = opacity;
    });

}

const handleVisibilityChange = () => {
    if (document.visibilityState === 'hidden') {
        audioTrack.pause();
    } else if (document.visibilityState === 'visible' && !soundBtn.classList.contains('paused')) {
        audioTrack.play();
    }
}

const handleSoundButton = () => {
    soundBtn.classList.contains('paused') ? audioTrack.play() : audioTrack.pause();
    soundBtn.classList.toggle('paused');
}


window.addEventListener('scroll', threeDimensionalScroll);
soundBtn.addEventListener('click', handleSoundButton);
document.addEventListener('visibilitychange', handleVisibilityChange);

threeDimensionalScroll();


