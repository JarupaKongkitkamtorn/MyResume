
export const handleScroll = (id: string) => {
    window.scrollTo({
        top: (document.getElementById(id) as HTMLInputElement).offsetTop,
        behavior: "smooth"
    })
}