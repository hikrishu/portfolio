import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorFollower = ({ size = 20, color = "rgba(204, 153, 0, 0.8)" }) => {
  // Motion values for cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth following
  const x = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const y = useSpring(mouseY, { stiffness: 200, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - size / 2);
      mouseY.set(e.clientY - size / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, size]);

  return (
    <motion.div
    

      
      style={{
        x,
        y,
        width: size,
        height: size,
        borderRadius: "50%",
        position: "fixed",
        pointerEvents: "none",
        top: 0,
        left: 0,
        zIndex: 999,
      }}
    >
      {/* Inner circle for bobbly effect */}
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          backgroundColor: color,
        }}
        animate={{
          y: [0, -5, 0, 5, 0],   // bobble up/down
          scale: [1, 1.2, 1, 0.8, 1], // gentle pulse
          rotate: [0, 6, 0, -6, 0],   // swiggle
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default CursorFollower;
