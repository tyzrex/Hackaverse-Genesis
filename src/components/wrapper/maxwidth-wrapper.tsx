export default function MaxWidthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container">{children}</div>;
}
