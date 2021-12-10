import { Footer } from "@components/footer/footer";
import { Header } from "@components/header/header";

const Layout: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export { Layout };
