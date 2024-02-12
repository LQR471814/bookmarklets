/**
 * To use this, navigate to a redshelf document, then click on the bookmark.
 * This will only work as expected if you have a document currently open.
 */

function main() {
    const activeDoc = document.getElementById("activeDocument") as HTMLIFrameElement | null
    if (!activeDoc || !activeDoc?.contentWindow) {
        alert("Could not find the #activeDocument iframe!")
        return
    }

    const INITIAL_TEXT = "Click on an image to open it in a new tab! You can also click on a paragraph to copy the paragraph. You can also click on this text to deactivate these behaviors."

    const notifier = document.createElement("span")
    notifier.style.position = "fixed"
    notifier.style.left = "0"
    notifier.style.top = "0"
    notifier.style.border = "black"
    notifier.style.background = "white"
    notifier.style.fontSize = "1rem"
    notifier.style.zIndex = "99999"
    notifier.style.maxWidth = "40vw"
    notifier.innerText = INITIAL_TEXT
    document.body.append(notifier)

    const docWindow = activeDoc.contentWindow
    const clickHandler = (e: MouseEvent) => {
        const target = docWindow.document.elementFromPoint(e.clientX, e.clientY)
        if (!target) {
            return
        }
        if ("currentSrc" in target) {
            window.open(target.currentSrc as string, "_blank")
            return
        }
        if ("innerText" in target) {
            navigator.clipboard.writeText(target.innerText as string)
            notifier.innerText = "Copied!"
            setTimeout(() => {
                notifier.innerText = INITIAL_TEXT
            }, 1000)
            return
        }
        notifier.innerText = "Not a text or image element!"
        setTimeout(() => {
            notifier.innerText = INITIAL_TEXT
        }, 1000)
    }
    docWindow.addEventListener("click", clickHandler)

    notifier.addEventListener("click", () => {
        docWindow.removeEventListener("click", clickHandler)
        notifier.remove()
    })
}

main()
