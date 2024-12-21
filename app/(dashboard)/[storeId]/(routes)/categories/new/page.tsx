// app/billboards/new/page.tsx

import { CategoryForm } from "@/app/(dashboard)/[storeId]/(routes)/categories/[categoryId]/components/category-form";
import prismadb from "@/lib/prismadb";

const NewCategoryPage = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm initialData={null} billboards={billboards} />
      </div>
    </div>
  );
};

export default NewCategoryPage;
