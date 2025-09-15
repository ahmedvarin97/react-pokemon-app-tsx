import { h1Style, ImgStyle, SubText } from "./ComponentStyle"

export const HeaderComp = () => {
    return(
        <>
          <img src="https://ahmedvarin.com/wp-content/uploads/2025/05/Logo-Full-Light-scaled-1-2048x947.webp" alt=""  className={ImgStyle}/>
          <h1 className={h1Style}>Todo With React + Typescript</h1>
          <p className={SubText}>Tailwind CSS | useState | useRef | useContext | Custom Hook | React Router | React Icon</p>
        </>
    )
}