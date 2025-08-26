const VerticalArrow = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      fill="none"
      {...props}
    >
      <path stroke="currentColor" d="m3 4.5 3 3 3-3" />
    </svg>
  );
};

export default VerticalArrow;
