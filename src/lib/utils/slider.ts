/* eslint-disable @typescript-eslint/no-explicit-any */
export class InfiniteSlider {
	wrapper!: HTMLElement;
	slider!: HTMLElement;
	slides!: HTMLCollectionOf<HTMLElement>;
	posX1: number;
	posX2: number;
	posInitial!: number;
	posFinal!: number;
	index: number;
	allowShift: boolean;
	threshold: number;
	slidesLength!: number;
	slideSize!: number;
	timer: any;
	timeout: number;
	constructor(threshold = 100, timeout = 3000) {
		this.posX1 = 0;
		this.posX2 = 0;
		this.index = 0;
		this.allowShift = true;
		this.timeout = timeout;
		this.threshold = threshold;
	}

	init = (wrapper: HTMLElement) => {
		this.wrapper = wrapper;
		this.slider = wrapper.querySelector('.slider') as HTMLElement;
		this.slides = wrapper.getElementsByClassName('slide') as HTMLCollectionOf<HTMLElement>;
		this.slidesLength = this.slides.length;
		this.slideSize = this.slides[0].offsetWidth;
		const firstSlide = this.slides[0],
			lastSlide = this.slides[this.slidesLength - 1],
			cloneFirst = firstSlide.cloneNode(true),
			cloneLast = lastSlide.cloneNode(true);
		this.slider.appendChild(cloneFirst);
		this.slider.insertBefore(cloneLast, firstSlide);
		this.addEventListeners();
	};

	addEventListeners = () => {
		const prev = this.wrapper.querySelector('.prev') as HTMLElement;
		const next = this.wrapper.querySelector('.next') as HTMLElement;
		// Click events
		prev.addEventListener('click', () => {
			this.shiftSlide(-1);
		});
		next.addEventListener('click', () => {
			this.shiftSlide(1);
		});
		// // Mouse events
		// this.slider.addEventListener('mousedown', this.dragStart);
		this.wrapper.addEventListener('mouseenter', this.stop);
		this.wrapper.addEventListener('mouseleave', this.start);
		// // Touch events
		// this.slider.addEventListener('touchstart', this.dragStart);
		// this.slider.addEventListener('touchend', this.dragEnd);
		// this.slider.addEventListener('touchmove', this.dragAction);
		// Transition events
		this.slider.addEventListener('transitionend', this.checkIndex);
	};

	dragStart = (e: any) => {
		e = e || window.event;
		e.preventDefault();
		this.posInitial = this.slider.offsetLeft;
		if (e.type == 'touchstart') {
			this.posX1 = e.touches[0].clientX;
		} else {
			this.posX1 = e.clientX;
			document.onmouseup = this.dragEnd;
			document.onmousemove = this.dragAction;
		}
	};

	dragAction = (e: any) => {
		e = e || window.event;
		if (e.type == 'touchmove') {
			this.posX2 = this.posX1 - e.touches[0].clientX;
			this.posX1 = e.touches[0].clientX;
		} else {
			this.posX2 = this.posX1 - e.clientX;
			this.posX1 = e.clientX;
		}
		this.slider.style.left = this.slider.offsetLeft - this.posX2 + 'px';
	};

	dragEnd = () => {
		this.posFinal = this.slider.offsetLeft;
		if (this.posFinal - this.posInitial < -this.threshold) {
			this.shiftSlide(1);
		} else if (this.posFinal - this.posInitial > this.threshold) {
			this.shiftSlide(-1);
		} else {
			this.slider.style.left = this.posInitial + 'px';
		}
		document.onmouseup = null;
		document.onmousemove = null;
	};

	shiftSlide = (dir: 1 | -1) => {
		this.slider.classList.add('shifting');
		if (this.allowShift) {
			this.posInitial = this.slider.offsetLeft;
			if (dir == 1) {
				this.slider.style.left = this.posInitial - this.slideSize + 'px';
				this.index++;
			} else if (dir == -1) {
				this.slider.style.left = this.posInitial + this.slideSize + 'px';
				this.index--;
			}
		}

		this.allowShift = false;
	};

	checkIndex = () => {
		this.slider.classList.remove('shifting');
		if (this.index == -1) {
			this.slider.style.left = -(this.slidesLength * this.slideSize) + 'px';
			this.index = this.slidesLength - 1;
		}
		if (this.index == this.slidesLength) {
			this.slider.style.left = -(1 * this.slideSize) + 'px';
			this.index = 0;
		}
		this.allowShift = true;
	};
	start = () => {
		this.timer = setInterval(() => {
			this.shiftSlide(1);
		}, this.timeout);
	};
	stop = () => {
		clearInterval(this.timer);
	};
}

export class NormalSlider {
	wrapper!: HTMLElement;
	slides!: NodeListOf<HTMLElement>;
	timer: any;
	timeout!: number;
	count!: number;
	max!: number;
	init = (wrapper: HTMLElement, max?: number, timeout = 3000) => {
		this.wrapper = wrapper;
		this.slides = wrapper.querySelectorAll('.slide') as NodeListOf<HTMLElement>;
		this.count = 0;
		this.timeout = timeout;
		if (!max) {
			this.max = this.slides.length - 1;
		} else {
			this.max = max;
		}
		this.addEventListeners();
	};
	addEventListeners = () => {
		const prev = this.wrapper.querySelector('.prev') as HTMLButtonElement;
		const next = this.wrapper.querySelector('.next') as HTMLButtonElement;
		prev.addEventListener('click', () => {
			this.shift(-1);
		});
		next.addEventListener('click', () => {
			this.shift(1);
		});
		this.wrapper.addEventListener('mouseenter', this.stop);
		this.wrapper.addEventListener('mouseleave', this.start);
	};
	translate = () => {
		this.slides.forEach((slide: HTMLElement, index) => {
			slide.style.transform = `translateX(${110 * (index - this.count)}%)`;
		});
	};
	shift = (dir: 1 | -1) => {
		if (dir == 1) {
			if (this.count == this.max) {
				this.count = 0;
			} else {
				this.count++;
			}
		} else {
			if (this.count == 0) {
				this.count = this.max;
			} else {
				this.count--;
			}
		}
		this.translate();
	};
	start = () => {
		this.timer = setInterval(() => {
			this.shift(1);
		}, this.timeout);
	};
	stop = () => {
		clearInterval(this.timer);
	};
	goto = (count: number) => {
		this.count = count;
		this.translate();
	};
}
