import ListAreaPT from '~/src/application/presenters/main/ListAreaPT';
import SearchAreaPT from '~/src/application/presenters/main/searchAreaPT';

const MainPage = () => {
  return (
    <div>
      <h1>Board List View</h1>
      <SearchAreaPT />
      <ListAreaPT />
    </div>
  );
};

export default MainPage;
