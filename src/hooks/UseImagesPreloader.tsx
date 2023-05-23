import { useState, useEffect } from "react"

const loadImage = image => {
  return new Promise((resolve, reject) => {
    const loadImg = new Image()
    loadImg.src = image.src

    loadImg.onload = () => resolve(image.src)

    loadImg.onerror = err => reject(err)
  })
}

export default function useImagesPreloader(imagesArray) {
  const [imgsLoaded, setImgsLoaded] = useState(false)
  useEffect(() => {
    Promise.all(imagesArray.map(image => loadImage(image)))
      .then(() => {
        setImgsLoaded(true)
      })
      .catch(err => console.log("Failed to load images", err))
  }, [imagesArray])
  return { imgsLoaded }
}
