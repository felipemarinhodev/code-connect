import Image from "next/image";
import styles from "./error.module.css";
import Link from "next/link";
import { ArrowBack } from "../icons/ArrowBack";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type ErrorProps = {
  src: string | StaticImport;
  alt: string;
  title: string;
  subtitle: string;
}

export function Error({
  src,
  alt,
  title,
  subtitle
}: ErrorProps) {
  return (
    <div className={styles.wrapper}>
      <Image
        src={src}
        alt={alt}
      />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
      <Link href="/" className={styles.link}>Voltar ao feed<ArrowBack color='#BFFFC3' /></Link>
    </div>
  );

}
