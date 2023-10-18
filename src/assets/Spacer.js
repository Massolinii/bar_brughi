const Spacer = ({ count }) => {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <br key={index} />
      ))}
    </>
  );
};

export default Spacer;
