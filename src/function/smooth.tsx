
interface Smooth {
    id: string;
}
export const handleScroll = ({ id }: Smooth) => {
    window.scrollTo({
        top: (document.getElementById(id) as HTMLInputElement).offsetTop,
        behavior: "smooth"
    })
}