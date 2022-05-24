import Link from "next/link";
import styles from "../styles/BlogCard.module.css";

const BlogCard = ({
  title,
  author,
  avatar,
  coverPhoto,
  slug,
  datePublished,
}) => {
  console.log(coverPhoto);
  console.log(avatar);
  console.log(datePublished);
  console.log(slug);
  return (
    <div className={styles.card}>
      <Link href={"/posts" + slug}>
        <div className={styles.imgContainer}>
          <img src={coverPhoto} alt="" />
        </div>
      </Link>
      <h1>{title}</h1>
      <h3>{author.name}</h3>
      <img src={author} alt="" />
    </div>
  );
};

export default BlogCard;
