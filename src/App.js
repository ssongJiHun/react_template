import { BrowserRouter as Router } from 'react-router-dom';
import RenderRoutes from 'src/routes';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from "react-query";
import { Interceptor } from "src/utils/axios";

const queryClient = new QueryClient();
const theme = createTheme({
  spacing: 1,

  palette: {
    //  소더코드  : 파란색
    primary: {
      main: '#3855B3',
      contrastText: '#fff',
    },

    // 배경 :  옅은 회색
    basis: {
      main: '#F8F8FA',
      contrastText: '#000000', /// 겅은색
      dark: 'rgba(56, 85, 179, 0.04)' // 짙은 회색
    },

    // 컴포넌트 : 흰색
    component: {
      main: '#FFFFFF',
      contrastText: '#000000',
    },


    // 로그아웃 버튼
    logout: {
      main: '#000000',
      contrastText: '#000000',
    }
  },
});
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Router>
          <Interceptor>
            <RenderRoutes />
          </Interceptor>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
