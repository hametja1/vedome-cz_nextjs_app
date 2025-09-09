export function SocialIcon({ children, href }: { children?: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-3xl p-2 transition-colors duration-300 hover:bg-white/20"
      style={{}}
    >
      {children}
    </a>
  );
}
