import { useState, forwardRef } from "react"
import images from "~/assets/img"
import styles from "./Image.module.css"
import classNames from "classnames/bind"

const Image = forwardRef(
    ({ src, alt, className, fallBack: customFallback, ...props }, ref) => {
        const [fallBack, setFallBack] = useState("")

        const handleError = () => {
            setFallBack(customFallback || images.noImage)
        }

        return (
            <img
                ref={ref}
                src={fallBack || src}
                alt={alt}
                className={classNames(styles.wrapper, className)}
                {...props}
                onError={handleError}
            />
        )
    }
)

export default Image
