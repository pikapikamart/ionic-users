

export const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  },
  exit:{ opacity: 0 }
}

export const itemVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0, x: -300  }
}