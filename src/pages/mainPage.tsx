import { useNavigate } from 'react-router-dom';

import ListAreaPT from '~/src/application/presenters/main/ListAreaPT';
import SearchAreaPT from '~/src/application/presenters/main/searchAreaPT';
import { RoutePath } from '~/src/entities/route.domain';

const MainPage = () => {
  const navigate = useNavigate();

  const onClickMoveNew = () => {
    console.log('onClickMoveNew');
    navigate(RoutePath.BOARD_CREATE);
  };

  return (
    <div>
      <h1>Board List View</h1>
      <SearchAreaPT />
      <button type="button" onClick={onClickMoveNew}>
        새글 등록
      </button>
      <ListAreaPT />
    </div>
  );
};

export default MainPage;
