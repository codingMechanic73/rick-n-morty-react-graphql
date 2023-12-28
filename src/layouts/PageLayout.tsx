import Footer from './Footer';
import Header from './Header';

type PageLayoutProps = {
  children: React.ReactNode;
};

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col justify-between">
      <Header />
      <main className="p-2">{children}</main>
      <Footer />
    </div>
  );
}

export default PageLayout;
