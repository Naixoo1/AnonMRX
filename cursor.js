const app = {
    tubes: {
        colors: ["#f967fb", "#53bc28", "#6958d5"],
        lights: {
            intensity: 200,
            colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
        }
    }
};

document.body.addEventListener('click', () => { 
    const colors = randomColors(3);
    const lightColors = randomColors(4);
    console.log(colors, lightColors);
    if (app && app.tubes) {
        if (typeof app.tubes.setColors === 'function') app.tubes.setColors(colors);
        if (typeof app.tubes.setLightColors === 'function') app.tubes.setLightColors(lightColors);
    }
});