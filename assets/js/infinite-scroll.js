document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".infinite-scroll");

    if (scrollContainer) {
        const items = scrollContainer.children;
        if (items.length === 0) {
            return;
        }
        const originalItemCount = items.length;

        if (originalItemCount > 0) {
            for (let i = 0; i < originalItemCount; i++) {
                const clone = items[i].cloneNode(true);
                scrollContainer.appendChild(clone);
            }
        }

        let scrollAmount = 0;
        const scrollSpeed = 1;
        let animationFrameId;
        let isHovering = false;
        let programmaticScroll = false;

        function scrollLoop() {
            if (!isHovering) {
                scrollAmount += scrollSpeed;
                const halfWidth = (scrollContainer.scrollWidth / 2);
                if (halfWidth > 0) {
                    scrollAmount = scrollAmount % halfWidth;
                }
                programmaticScroll = true;
                scrollContainer.scrollLeft = scrollAmount;
            }
            animationFrameId = requestAnimationFrame(scrollLoop);
        }

        scrollContainer.addEventListener('scroll', () => {
            if (programmaticScroll) {
                programmaticScroll = false;
                return;
            }

            const currentPhysicalScroll = scrollContainer.scrollLeft;
            const halfWidth = scrollContainer.scrollWidth / 2;
            const previousLogicalScrollAmount = scrollAmount;
            const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

            if (halfWidth > 0) {
                if (currentPhysicalScroll >= halfWidth - 5) {
                    const newLogicalPosition = 0;
                    programmaticScroll = true;
                    scrollContainer.scrollLeft = newLogicalPosition;
                    scrollAmount = newLogicalPosition;
                }
                else if (currentPhysicalScroll < previousLogicalScrollAmount && currentPhysicalScroll < 0.5) {
                    const amountScrolledPastZero = previousLogicalScrollAmount - currentPhysicalScroll;
                    const newLogicalPosition = halfWidth - amountScrolledPastZero;
                    programmaticScroll = true;
                    scrollContainer.scrollLeft = newLogicalPosition;
                    scrollAmount = newLogicalPosition;
                } else if (maxScroll > 0 && currentPhysicalScroll >= maxScroll - 1.0 && currentPhysicalScroll < halfWidth) {
                    const amountScrolledPastMax = previousLogicalScrollAmount - currentPhysicalScroll;
                    const newLogicalPosition = halfWidth - amountScrolledPastMax;
                    programmaticScroll = true;
                    scrollContainer.scrollLeft = newLogicalPosition;
                    scrollAmount = newLogicalPosition;
                } else {
                    scrollAmount = currentPhysicalScroll;
                }
            } else {
                scrollAmount = currentPhysicalScroll;
            }
        });

        scrollContainer.addEventListener("mouseenter", () => {
            isHovering = true;
            const currentPhysicalScroll = scrollContainer.scrollLeft;
            const halfWidth = scrollContainer.scrollWidth / 2;
            if (halfWidth > 0) {
                scrollAmount = currentPhysicalScroll % halfWidth;
            } else {
                scrollAmount = currentPhysicalScroll;
            }
        });

        scrollContainer.addEventListener("mouseleave", () => {
            isHovering = false;
            const currentPhysicalScroll = scrollContainer.scrollLeft;
            const halfWidth = scrollContainer.scrollWidth / 2;
            if (halfWidth > 0) {
                scrollAmount = currentPhysicalScroll % halfWidth;
            } else {
                scrollAmount = currentPhysicalScroll;
            }
        });

        if (originalItemCount > 0) {
            scrollLoop();
        }
    }
});