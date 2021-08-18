import { ThemeProvider } from "styled-components"; 
import { ProviderContext } from "../lib/context";
import { theme } from "../config/theme";
import "../styles/globals.css";
 
function MyApp({ Component, pageProps }) {
 

  return (
    <ThemeProvider theme={theme}>
      <ProviderContext> 
          <Component {...pageProps} />
      </ProviderContext>
    </ThemeProvider>
  );
}

export default MyApp;
