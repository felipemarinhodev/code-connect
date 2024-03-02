import Image from "next/image"
import { Avatar } from "../Avatar"

type Author = {
  id: number,
  name: string;
  username: string;
  avatar: string;
}
type Post = {
  id: number,
  cover: string;
  title: string;
  slug: string;
  body: string;
  markdown: string;
  author: Author
}

type CardPostProps = {
  post: Post
}

export const CardPost = ({ post }: CardPostProps) => {
  return (
    <article>
      <header>
        <figure>
          <Image
            src={post.cover}
            alt={`Capa do post de titulo: ${post.title}`}
            width={438}
            height={133}
          />
        </figure>
      </header>
      <section>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </section>
      <footer>
        <Avatar
          imageSrc={post.author.avatar}
          name={post.author.username}
        />
      </footer>
    </article>
  )
}
