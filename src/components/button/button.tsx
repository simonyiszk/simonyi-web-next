type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="border-2 rounded-md border-simonyi_zold hover:bg-simonyi_zold bg-white bg-opacity-button w-32 h-10 px-4 font-body font-semibold inline-flex items-center justify-center"
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
