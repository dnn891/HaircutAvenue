interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children }: LinkProps) {
  return (
    <a
      href={href}
      className="text-white/90 transition hover:text-white"
    >
      {children}
    </a>
  );
}