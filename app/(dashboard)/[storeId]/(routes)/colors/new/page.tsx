// app/billboards/new/page.tsx

import { ColorForm } from "@/app/(dashboard)/[storeId]/(routes)/colors/[colorId]/components/color-form";

const NewColorPage = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm initialData={null} />{" "}
      </div>
    </div>
  );
};

export default NewColorPage;
