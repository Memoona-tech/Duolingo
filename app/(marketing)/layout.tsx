import { Header } from "./header";
import { Footer } from "./footer";
interface Props {
  children: React.ReactNode;
}

const MerketingPageLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className=" flex-1 flex flex-col items-center justify-center ">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MerketingPageLayout;
