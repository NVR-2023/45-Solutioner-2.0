import NavbarPrivate from "@/frontend/sections/navbar-private/navbar-private";
export default async function privateLAyout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="m-0 flex h-screen w-screen items-center justify-center bg-purple-400 p-0">
      <div className="mt-6 flex h-full w-11/12 flex-col bg-orange-400">
        <div>
          <NavbarPrivate />
        </div>
        {children}
      </div>
    </main>
  );
}
