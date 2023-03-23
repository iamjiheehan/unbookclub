const isTouchScreen =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none) and (pointer: coarse)").matches

export default function registDragEvent({
    onDragChange,
    onDragEnd,
    stopPropagation
    }) {
    if (isTouchScreen) {
        return {
        onTouchStart: touchEvent => {
            if (stopPropagation) touchEvent.stopPropagation()

            const touchMoveHandler = moveEvent => {
            if (moveEvent.cancelable) moveEvent.preventDefault()

            const deltaX =
                moveEvent.touches[0].pageX - touchEvent.touches[0].pageX
            const deltaY =
                moveEvent.touches[0].pageY - touchEvent.touches[0].pageY
            onDragChange?.(deltaX, deltaY)
            }

            const touchEndHandler = moveEvent => {
            const deltaX =
                moveEvent.changedTouches[0].pageX -
                touchEvent.changedTouches[0].pageX
            const deltaY =
                moveEvent.changedTouches[0].pageY -
                touchEvent.changedTouches[0].pageY
            onDragEnd?.(deltaX, deltaY)
            document.removeEventListener("touchmove", touchMoveHandler)
            }

            document.addEventListener("touchmove", touchMoveHandler, {
            passive: false
            })
            document.addEventListener("touchend", touchEndHandler, { once: true })
        }
        }
    }

    return {
        onMouseDown: clickEvent => {
        if (stopPropagation) clickEvent.stopPropagation()

        const mouseMoveHandler = moveEvent => {
            const deltaX = moveEvent.pageX - clickEvent.pageX
            const deltaY = moveEvent.pageY - clickEvent.pageY
            onDragChange?.(deltaX, deltaY)
        }

        const mouseUpHandler = moveEvent => {
            const deltaX = moveEvent.pageX - clickEvent.pageX
            const deltaY = moveEvent.pageY - clickEvent.pageY
            onDragEnd?.(deltaX, deltaY)
            document.removeEventListener("mousemove", mouseMoveHandler)
        }

        document.addEventListener("mousemove", mouseMoveHandler)
        document.addEventListener("mouseup", mouseUpHandler, { once: true })
        }
    }
}
