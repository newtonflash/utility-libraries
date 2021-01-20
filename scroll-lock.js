const docEl = document.getElementsByTagName('body')[0];
const htmlEl = document.getElementsByTagName('html')[0];

class ScrollLock {
    constructor(lockContainerClass) {
        this.pageWrapper = document.getElementsByClassName(`${lockContainerClass}`)[0];
        this.currentScroll = 0;
        this.defaultPageWrapperPos = '';
    }

    lock = () => {
        this.currentScroll = window.pageYOffset;
        this.defaultPageWrapperPos = (this.pageWrapper && this.pageWrapper.style.position) || '';
        if (this.pageWrapper) {
            this.pageWrapper.style.position = 'relative';
            this.pageWrapper.style.top = -this.currentScroll + 'px';
        }

        docEl.style.height = '100%';
        htmlEl.style.height = '100%';
        docEl.style.overflow = 'hidden';
        htmlEl.style.overflow = 'hidden';
    };

    unlock = () => {
        docEl.style.height = '';
        htmlEl.style.height = '';
        docEl.style.overflow = '';
        htmlEl.style.overflow = '';
        if (this.pageWrapper) {
            this.pageWrapper.style.position = this.defaultPageWrapperPos;
            this.pageWrapper.style.top = '';
        }

        let currentScroll = this.currentScroll;

        window.setTimeout(function() {
            window.scrollTo(0, currentScroll);
        }, 2);
    };
}

export default ScrollLock;
