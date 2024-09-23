function Container({ children, className }) {
    return (
      <div className={`container mx-[100px] ${className}`}>
        {children}
      </div>
    );
  }
  
  export default Container;
  