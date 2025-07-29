 class Carousel {
            constructor() {
                this.currentSlide = 0;
                this.totalSlides = 3;
                this.slidesContainer = document.getElementById('slidesContainer');
                this.dots = document.querySelectorAll('.dot');
                this.prevBtn = document.getElementById('prevBtn');
                this.nextBtn = document.getElementById('nextBtn');
                
                this.init();
            }

            init() {
              
                this.prevBtn.addEventListener('click', () => this.previousSlide());
                this.nextBtn.addEventListener('click', () => this.nextSlide());
                
                
                this.dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => this.goToSlide(index));
                });

                
                this.startAutoPlay();
            }

            goToSlide(slideIndex) {
                this.currentSlide = slideIndex;
                this.updateCarousel();
            }

            nextSlide() {
                this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
                this.updateCarousel();
            }

            previousSlide() {
                this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
                this.updateCarousel();
            }

            updateCarousel() {
                
                const translateX = -this.currentSlide * 100;
                this.slidesContainer.style.transform = `translateX(${translateX}%)`;

                
                this.dots.forEach((dot, index) => {
                    if (index === this.currentSlide) {
                        dot.classList.remove('bg-gray-500');
                        dot.classList.add('bg-[#0064C8]');
                    } else {
                        dot.classList.remove('bg-[#0064C8]');
                        dot.classList.add('bg-gray-500');
                    }
                });
            }

            startAutoPlay() {
                setInterval(() => {
                    this.nextSlide();
                }, 10000); 
            }
        }

        // Initialize carousel when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            new Carousel();
        });
    
     function toggleSection(id, arrowId) {
  const el = document.getElementById(id);
  const arrow = document.getElementById(arrowId);
  
  el.classList.toggle('hidden');
  arrow.classList.toggle('rotate90');
}
