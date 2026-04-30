import Footer from "@/components/dark_light_components/Footer";
import Header from "@/components/dark_light_components/Header";
import Main from "@/components/dark_light_components/Main";
import LanguageContextProvider from "@/context/LanguageContextProvider";
import ThemeContextProvider from "@/context/ThemeContextProvider";

export default function Home() {
  return (
    <>
      <LanguageContextProvider>
        <ThemeContextProvider>
          <Header />
          <Main />
          <Footer />
        </ThemeContextProvider>
      </LanguageContextProvider>
    </>
  );
}


