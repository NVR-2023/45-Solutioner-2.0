import NavbarPrivate from "@/frontend/sections/navbar-private/navbar-private";
export default function PrivateMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="m-0 flex h-screen w-screen items-center justify-center bg-neutral-100 p-0">
      <div className="mt-6 flex h-full w-11/12 flex-col">
        <div>
          <NavbarPrivate />
        </div>
        {children}
      </div>
    </main>
  );
}
