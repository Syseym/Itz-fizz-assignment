window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    const maxScroll = viewportHeight * 3;
    const progress = Math.min(scrollY / maxScroll, 1);
    
    
    const scale = 1 + (progress * 1.4);       
    const rotation = progress * -45;          
    const translateX = progress * -140;      
    const translateY = progress * -5;         
    
    const car = document.getElementById('scrolling-object');
    if (car) {
        car.style.transform = `scale(${scale}) translateX(${translateX}px) translateY(${translateY}px) rotate(${rotation}deg)`;
        
        
        const carBody = car.querySelector('.car-body');
        if (progress < 0.25) {
            carBody.style.background = 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)';
            carBody.style.boxShadow = '0 0 50px rgba(37, 99, 235, 0.5)';
        } else if (progress < 0.50) {
            carBody.style.background = 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)';
            carBody.style.boxShadow = '0 0 50px rgba(220, 38, 38, 0.5)';
        } else if (progress < 0.75) {
            carBody.style.background = 'linear-gradient(135deg, #059669 0%, #047857 100%)';
            carBody.style.boxShadow = '0 0 50px rgba(5, 150, 105, 0.5)';
        } else {
            carBody.style.background = 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)';
            carBody.style.boxShadow = '0 0 50px rgba(124, 58, 237, 0.5)';
        }
    }
    
    
    const sectionIndex = scrollY / viewportHeight;
    for (let i = 1; i <= 4; i++) {
        const content = document.getElementById(`content${i}`);
        if (content) {
            
            const targetOpacity = Math.max(1 - Math.abs(sectionIndex - (i - 1)) * 2.0, 0);
            content.style.opacity = targetOpacity;
            
            
            const targetY = (sectionIndex - (i - 1)) * -25;
            content.style.transform = `translateY(${targetY}px)`;
        }
    }
});