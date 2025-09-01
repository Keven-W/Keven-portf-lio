const matrixBg = document.querySelector('.matrix-bg');
const totalDigits = 308; // quantidade de números que quer gerar
const delayIncrement = 0.1; // delay entre cada número, em segundos

for (let i = 0; i < totalDigits; i++) {
    const span = document.createElement('span');
    span.classList.add('digit');
    span.textContent = Math.random() > 0.5 ? '1' : '0';
    
    // Define animação com delay incremental
    span.style.animationDelay = `${i * delayIncrement}s`;
    
    matrixBg.appendChild(span);
}
