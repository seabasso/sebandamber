import Image from "next/image";
import styles from "./page.module.css";
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className={styles.main}>
      Hello world! <ExclamationTriangleIcon className={styles.icon}/>
    </main>
  );
}
