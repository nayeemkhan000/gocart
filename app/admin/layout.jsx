import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "gocart. - Admin",
    description: "gocart. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
