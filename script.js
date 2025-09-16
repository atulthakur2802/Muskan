const container = document.getElementById('animation-container');

// Create flying tulips or hearts
function createElement(symbol, color) {
  const elem = document.createElement('div');
  elem.innerHTML = symbol;
  elem.style.position = 'absolute';
  elem.style.left = Math.random() * window.innerWidth + 'px';
  elem.style.top = window.innerHeight + 'px';
  elem.style.fontSize = 20 + Math.random() * 25 + 'px';
  elem.style.color = color;
  elem.style.opacity = 0.3 + Math.random() * 0.4; // transparent so text visible
  elem.style.transform = `rotate(${Math.random()*360}deg) scale(${0.5 + Math.random()*1})`;
  container.appendChild(elem);

  const speed = 1 + Math.random() * 3;
  const drift = Math.random() * 2 - 1;
  const rotateSpeed = Math.random() * 2 - 1;

  function animate() {
    const top = parseFloat(elem.style.top);
    const left = parseFloat(elem.style.left);
    let rotation = parseFloat(elem.style.transform.replace(/[^\d.-]/g, '')) || 0;

    if(top < -50 || left < -50 || left > window.innerWidth+50){
      container.removeChild(elem);
    } else {
      elem.style.top = (top - speed) + 'px';
      elem.style.left = (left + drift) + 'px';
      rotation += rotateSpeed;
      elem.style.transform = `rotate(${rotation}deg) scale(${0.5 + Math.random()*0.5})`;
      requestAnimationFrame(animate);
    }
  }
  animate();
}

// Spawn tulips and hearts continuously
setInterval(() => { 
  createElement('🌷', '#ff4d8a'); 
  createElement('💖', '#ff66aa'); 
}, 300);