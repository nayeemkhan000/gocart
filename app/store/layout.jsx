import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "gocart. - Store Dashboard",
    description: "gocart. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
