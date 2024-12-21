// app/billboards/new/page.tsx

import { BillboardForm } from "@/app/(dashboard)/[storeId]/(routes)/billboards/[billboardId]/components/billboard-form";

const NewBillboardPage = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={null} />{" "}
        {/* Pass null or appropriate initial data */}
      </div>
    </div>
  );
};

export default NewBillboardPage;
