function volume_sphere() {
	
    let radius = document.getElementById("radius").value;

    radius = parseFloat(radius);

    let volume = (radius >= 0 && !isNaN(radius))
        ? ((4 / 3) * Math.PI * Math.pow(radius, 3)).toFixed(4)
        : NaN;
	
    document.getElementById("volume").value = volume;
}


document.getElementById("MyForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent page reload
    volume_sphere();
});

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
