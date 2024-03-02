import Image from "next/image";

import styles from "./avatar.module.css";

export type AvatarProps = {
  name: string;
  imageSrc: string;
}

export const Avatar = ({ name, imageSrc }: AvatarProps) => {
  return (
    <ul className={styles.container}>
      <li>
        <Image
          src={imageSrc}
          alt={`Avatar do(a) ${name}`}
          width={32}
          height={32}
        />
      </li>
      <li>
        @{name}
      </li>
    </ul>
  );
}
