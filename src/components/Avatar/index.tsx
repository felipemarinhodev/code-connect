import Image from "next/image";

export type AvatarProps = {
  name: string;
  imageSrc: string;
}

export const Avatar = ({ name, imageSrc }: AvatarProps) => {
  return (
    <ul>
      <li>
        <Image
          src={imageSrc}
          alt={name}
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
