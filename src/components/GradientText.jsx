const GRADIENTS = {
  "cyan-purple": "from-cyan-400 to-purple-500",
  "cyan-blue": "from-cyan-400 to-blue-500",
  "cyan-blue-purple": "from-cyan-400 via-blue-500 to-purple-600",
  "cyan-blue-glow": "from-cyan-500 to-blue-600",
};

const GradientText = ({ children, variant = "cyan-purple", className = "" }) => (
  <span className={`text-transparent bg-clip-text bg-linear-to-r ${GRADIENTS[variant]} ${className}`}>
    {children}
  </span>
);

export default GradientText;
