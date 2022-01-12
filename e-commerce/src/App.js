import './App.css';
import {useMediaQuery} from 'react-responsive'
import {BigScreen} from './big-screen/component'
import {Laptop} from './laptop/component'
import {Desktop} from './desktop/component'
import {TabletMobile} from './tablet-mobile/component'
import {Mobile} from './mobile/component'
import ManMatters from './images/manmaters.png'



function App() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 320px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });
  return (
    <div className="App">
    <img src={ManMatters} alt="Logo"/>
    {isMobileDevice && <Mobile />}
    {isTabletDevice &&<TabletMobile />}
    {isDesktop && <Desktop />}
    {isLaptop && <Laptop />}
    {isBigScreen && <BigScreen />}
    </div>
  );
}

export default App;
