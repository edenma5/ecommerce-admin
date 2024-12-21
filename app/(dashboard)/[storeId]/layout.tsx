import Navbar from "@/components/navbar";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { ObjectId } from "mongodb";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  function isValidObjectId(id: string): boolean {
    return ObjectId.isValid(id);
  }

  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  if (!isValidObjectId(params.storeId)) {
    redirect("/");
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
