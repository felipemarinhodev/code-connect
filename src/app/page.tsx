import { CardPost, Post } from "@/components/CardPost";

async function getAllPosts() {
  const response = await fetch('http://localhost:3042/posts');
  if (!response.ok) {
    console.log('Ops, alguma coisa ocorreu mal');
  }
  return response.json();
}
export default async function Home() {
  const posts: Array<Post> = await getAllPosts();
  return (
    <main>
      {posts.map(post => (
        <CardPost
          key={post.id}
          post={post}
        />
      )
      )}
    </main>
  );
}
