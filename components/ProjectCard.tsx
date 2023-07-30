import { motion } from 'framer-motion';
import Image from 'next/image';
import woop from '../public/assets/woop.svg';
import woop1 from '../public/assets/woop_page-1.svg';
import woop2 from '../public/assets/woop_page-2.svg';
import woop3 from '../public/assets/woop_page-3.svg';

const ProjectCard = () => {
  return (
    <motion.div
      className="relative w-[400px] h-[300px]"
      whileHover={{ rotate: -5 }} // Rotate the root image (container image) on hover
    >
      {/* Your main project photo that serves as a container */}
      <Image src={woop} alt="Project Container" layout="fill" objectFit="cover" />

      {/* The three screenshot images */}
      <motion.div
        className="absolute top-0 left-0 w-[100px] h-auto"
        whileHover={{ rotate: -45, scale: 1.25 }}
      >
        <Image src={woop1} alt="Screenshot 1" layout="responsive" width={100} height={100} />
      </motion.div>
      <motion.div
        className="absolute top-[50px] left-[150px] w-[100px] h-auto"
        whileHover={{ rotate: -135, scale: 1.25 }}
      >
        <Image src={woop2} alt="Screenshot 2" layout="responsive" width={100} height={100} />
      </motion.div>
      <motion.div
        className="absolute top-[100px] left-[50px] w-[100px] h-auto"
        whileHover={{ rotate: -90, scale: 1.25 }}
      >
        <Image src={woop3} alt="Screenshot 3" layout="responsive" width={100} height={100} />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
