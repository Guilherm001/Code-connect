import Image from "next/image"
import { Avatar } from "../Avatar"


export const CardPost = () => {
    return(
        <article>
            <figure>
                <Image src={post.cover} width={438} height={133}/>
            </figure>
            <section>
                <h2> {post.title} </h2>
                <p> {post.body} </p>
            </section>
            <footer>
                <Avatar imageSrc={post.author.avatar} 
                name={post.author.Username} 
                width={32} height={32}
                />
            </footer>
        </article>
    )
}