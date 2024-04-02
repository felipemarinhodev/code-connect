export type SubheadingProps = {
  children: string
}

export const Subheading = ({ children }: SubheadingProps) => {
  return (
    <h2>
      {children}
    </h2>
  );
}
