type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`inline-flex h-10 w-32 items-center justify-center rounded-md border-2 border-primary bg-white bg-opacity-button px-4 font-body font-semibold transition duration-200 ease-in-out hover:bg-primary ${props.className}`}
    >
      {children}
    </button>
  );
}

export { Button };
