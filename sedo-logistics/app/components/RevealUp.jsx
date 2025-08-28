"use client";
import React from "react";
import PropTypes from "prop-types";
import { motion } from "motion/react"

export default function RevealUp({ children, delay = 0.2, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={`reveal-up ${className}`}
      style={{ display: "block" }}
    >
      {children}
      {console.log("RevealUp")}
    </motion.div>
  );
}

RevealUp.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  className: PropTypes.string,
};
