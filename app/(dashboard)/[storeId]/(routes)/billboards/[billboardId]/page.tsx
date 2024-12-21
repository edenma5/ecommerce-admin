// app/billboards/[billboardId]/page.tsx

import prismadb from "@/lib/prismadb";
import { BillboardForm } from "./components/billboard-form";
import { notFound } from "next/navigation";

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  // Validate the billboardId format
  if (!params.billboardId.match(/^[a-fA-F0-9]{24}$/)) {
    return notFound(); // Render 404 page if the ID is invalid
  }

  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  });

  if (!billboard) {
    return notFound(); // Render 404 page if no billboard is found
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
};

export default BillboardPage;
