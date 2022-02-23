import { StickyContainer } from "react-sticky";
import Header from "./components/header/header";
import HeroBanner from "./components/hero-banner/hero-banner";
import Filters from "./components/filters/filters";
import CategoryList from "./components/category-list/category-list";
import "./App.scss";

import {
  headerNavigationMockData,
  heroBannerMockData,
  categoryListMockData,
} from "./_mock-data/mock-data";

function App() {
  return (
    <StickyContainer>
      <Header navigation={headerNavigationMockData}/>
      <HeroBanner {...heroBannerMockData}/>
      <Filters />
      <CategoryList {...categoryListMockData}/>
    </StickyContainer>
  );
}

export default App;
