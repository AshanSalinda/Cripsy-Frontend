import Footer from "@/components/Footer/Footer";


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;