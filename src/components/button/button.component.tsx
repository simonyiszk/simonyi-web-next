type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="inline-flex h-10 w-32 items-center justify-center rounded-md border-2 border-simonyi_zold bg-white bg-opacity-button px-4 font-body font-semibold transition duration-200 ease-in-out hover:bg-simonyi_zold"
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
