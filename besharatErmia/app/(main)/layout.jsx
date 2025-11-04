import Footer from "@/components/main/footer";
import Header from "@/components/main/header";
import { PhoneIcon } from "@heroicons/react/24/solid";

export default function MainLayout({ children }) {
    return (
        <div dir="rtl">
            <Header />
            <div className="mx-auto max-w-full">
                {children}
            </div>
            <Footer />
        </div>
    )
}
