
type adminLayoutProps = {
  children: React.ReactNode;
};

function adminLayout({ children }:adminLayoutProps) {
  return (
    <div>
      {children}
    </div>
  );
}

export default adminLayout;