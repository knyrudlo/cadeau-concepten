import React from "react";
import { HeaderSticky, HeroBanner, Filters, CategoryList } from "./components";

import {
  heroBannerMockData,
  categoryListMockData,
} from "./_mock-data/mock-data";

function App() {
  return (
    <>
      <HeaderSticky />
      <HeroBanner {...heroBannerMockData} />
      <Filters />
      <CategoryList {...categoryListMockData} />
    </>
  );
}

export default App;
