import styles from './style.module.scss';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { scale, slide } from '@/components/animation';

interface LinkData {
  title: string;
  href: string;
  index: number;
}

interface Props {
  data: LinkData;
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
}

export default function Index({ data, isActive, setSelectedIndicator }: Props): JSX.Element {
  const { title, href, index } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide as Variants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale as Variants}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
      <Link href={href}>{title}</Link>
    </motion.div>
  );
}