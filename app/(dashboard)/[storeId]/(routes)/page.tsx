import prismadb from "@/lib/prismadb"

interface DashboardProps {
    params: { storeId: string }
};

const DashbaordPage: React.FC<DashboardProps> = async ({
    params
}) => {
    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId
        }
    })

    return (
        <div>Active Store: {store?.name}</div>
    )
}

export default DashbaordPage