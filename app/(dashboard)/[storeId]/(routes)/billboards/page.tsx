import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { BillboardsClient } from "./components/client";
import { BillboardColumn } from "./components/columns";

const BillboardsPage = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatedBillboards: BillboardColumn[] = billboards.map((billboard) => ({
    id: billboard.id,
    label: billboard.label,
    createdAt: format(billboard.createdAt, "dd-MM-yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardsClient data={formatedBillboards} />
      </div>
    </div>
  );
};

export default BillboardsPage;
