const SectionWrapper = ({ children, className = "", tag }) => {
  const Wrapper = tag || "div";
  return (
    <Wrapper className={`min-h-screen bg-[#050505] flex items-center justify-center px-6 relative overflow-hidden ${className}`}>
      {children}
    </Wrapper>
  );
};

export default SectionWrapper;
