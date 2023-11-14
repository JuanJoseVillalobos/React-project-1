import './assets/css/app.css' 
import SideBar from './components/SideBar'
import TopBar from './components/TopBar'
import RowTop from './components/ContentRowTop'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/footer'

function App (){

  return (
    <> 
    <TopBar />
    <RowTop />  
    <SideBar />
    <ContentWrapper />
    <Footer />
    </>
  )
  }

export default App
