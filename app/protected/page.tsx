import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import CreatePost from "@/components/create-post";
import Post from "@/components/post";

export default async function Feed() {
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
    <div className=" flex-1 p-1 max-w-9xl mx-auto">
      <main className="flex-1 relative overflow-hidden">
        <div className="sticky top-0 z-10 p-6 ">
          <CreatePost />
        </div>
        <div className="p-6 space-y-6 max-h-screen overflow-y-auto">
          <Post
            user="Maturelisaa"
            time="2 hour ago"
            text="Any hot newcastle fans on here?"
            image="https://placehold.jp/150x150.png"
          />
          <div className="pl-12">
            <Post
              user="PaulGallant3675"
              time="1 hour ago"
              text="You are beautiful I live in Rushcliffe Nottingham"
              image="https://placehold.jp/150x150.png"
              isComment
            />
          </div>
        </div>
      </main>
    </div>
  );
}