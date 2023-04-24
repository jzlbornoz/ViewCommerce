import { Slider } from "@/components/Slider"



const page = ({ params }: { params: { id: string } }) => {
    const images = [
        "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/02/google-imagen-ai-imagination.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7C9OoHX9gt9LumVvvjngedhcYLNh9Eq_qI0axGHZ-DolKKrUdqgFMrBWtAcput8QBICM&usqp=CAU",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"
    ]
    return (
        <>
            <h2>Pantalla: {params.id}</h2>
            <Slider images={images} />
        </>

    )

}

export default page