import Sidebar from "@/components/sidebar";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  const { data: profileData, error: profileError } = await supabase
    .from("profiles")
    .select("username, avatar_url")
    .eq("id", data.user.id)
    .single();

  if (profileError || !profileData) {
    redirect("/auth/login");
  }

  return (

    <div className="flex min-h-screen bg-gray-50">
      <Sidebar avatarURL={profileData.avatar_url} userName={profileData.username} />
      <main className="flex-1 relative overflow-hidden">
        {children}
      </main>
    </div>
  );

  // return (
  //   <main className="min-h-screen flex flex-col items-center">
  //     <div className="flex-1 w-full flex flex-col gap-20 items-center">
  //       <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
  //         <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
  //           <div className="flex gap-5 items-center font-semibold">
  //             <Link href={"/"}>Next.js Supabase Starter</Link>
  //             <div className="flex items-center gap-2">
  //               <DeployButton />
  //             </div>
  //           </div>
  //           {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
  //         </div>
  //       </nav>
  //       <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
  //         {children}
  //       </div>

  //       <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
  //         <p>
  //           Powered by{" "}
  //           <a
  //             href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
  //             target="_blank"
  //             className="font-bold hover:underline"
  //             rel="noreferrer"
  //           >
  //             Supabase
  //           </a>
  //         </p>
  //         <ThemeSwitcher />
  //       </footer>
  //     </div>
  //   </main>
  // );
}
