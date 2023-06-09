type LinkProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

function Link({ children, ...props }: LinkProps) {
  return (
    <a {...props} className={`hover:cursor-pointer hover:underline ${props.className}`}>
      {children}
    </a>
  );
}

export { Link };
