import RepliesSection from "@/app/ui/RepliesSection";
import styles from "@/app/ui/Record.module.css";
import Image from "next/image";
import { fetchReplies, fetchUser } from "../lib/data";

export default async function Record({
  record_id,
  user_id,
  comment,
  images,
  onAddReply,
}) {
  const user = fetchUser(user_id);
  const replies_all = await fetchReplies();
  let replies = replies_all.filter((reply) => reply.record_id === record_id);

  return (
    <div className={styles.record}>
      <div className={styles["user-identifier"]}>
        <Image
          className={"user-image"}
          src={user.image_url}
          alt=""
          width={100}
          height={100}
        />
        <h3>{user.display_name}</h3>
      </div>
      <div className={styles["comment-control"]}>
        <p className={styles.comment}>{comment}</p>
      </div>
      <div className={styles["images-bar"]}>
        {images.map((image_url) => (
          <Image
            key={image_url}
            className={styles.image}
            src={image_url}
            alt=""
            width={100}
            height={100}
          />
        ))}
      </div>
      <RepliesSection replies={replies} onAdd={onAddReply} />
      <div className={styles.footer}>
        <p className={styles.date}>Dec. 12th 2023</p>
      </div>
    </div>
  );
}
