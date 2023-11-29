import Link from "next/link";

type projectLayoutProps = {
  children: React.ReactNode;
};

function projectLayout({ children }:projectLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
       <header className="flex justify-end pb-5 ">
                <Link href="/" passHref
                    className="text-2xl text-gray-600 hover:text-gray-800">
                        ✕ 
                </Link>
            </header>
      <main className="flex-grow">{children}</main>
    </div>
  );
}

export default projectLayout;