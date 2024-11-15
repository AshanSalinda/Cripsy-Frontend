import { AppSidebar } from "@/components/NavBar/AppSidebar";
import TopNavbar from "@/components/TopNavbar/TopNavbar";
import Footer from "@/components/Footer/Footer";


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <TopNavbar />
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;