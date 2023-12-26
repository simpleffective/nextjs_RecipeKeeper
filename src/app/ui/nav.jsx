import styles from "./nav.module.css";
import RoundImageButton from "./RoundImageButton";

export default function Nav() {
  const logo_url = "../../../public/logo.png";
  const dummy_user_img = "../../../public/users/demo-drawn.jpeg";

  return (
    <div className={styles.nav}>
      <div className={styles["nav-bar"]}>
        <RoundImageButton src={logo_url} width={55} href="/recipes" />
        <button className={styles["nav-button"]}>All Recipes</button>
      </div>
      <div className={styles.user}>
        <RoundImageButton
          src={dummy_user_img}
          width={40}
          href="/users/user_id"
        />
        <span>User</span>
      </div>
    </div>
  );
}
