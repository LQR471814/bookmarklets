/**
 * To use this, 
 */
function main() {
    const activeDoc = document.getElementById("activeDocument") as HTMLIFrameElement | null
    if (!activeDoc || !activeDoc?.contentWindow) {
        alert("Could not find the #activeDocument iframe!")
        return
    }

    const INITIAL_TEXT = `Click on an image to open it in a new tab! (click on this text to quit)`

    const notifier = document.createElement("span")
    notifier.style.position = "fixed"
    notifier.style.left = "0"
    notifier.style.top = "0"
    notifier.style.border = "black"
    notifier.style.background = "white"
    notifier.style.fontSize = "1rem"
    notifier.style.zIndex = "99999"
    notifier.innerText = INITIAL_TEXT
    document.body.append(notifier)

    const docWindow = activeDoc.contentWindow
    const clickHandler = (e: MouseEvent) => {
        const img = docWindow.document.elementFromPoint(e.clientX, e.clientY)
        if (!img || !("currentSrc" in img)) {
            return
        }
        window.open(img.currentSrc as string, "_blank")
    }
    docWindow.addEventListener("click", clickHandler)

    notifier.addEventListener("click", () => {
        docWindow.removeEventListener("click", clickHandler)
        notifier.remove()
    })
}

main()
