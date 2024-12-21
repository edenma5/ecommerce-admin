// app/billboards/new/page.tsx

import { SizeForm } from "@/app/(dashboard)/[storeId]/(routes)/sizes/[sizeId]/components/size-form";

const NewSizePage = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm initialData={null} />{" "}
      </div>
    </div>
  );
};

export default NewSizePage;
