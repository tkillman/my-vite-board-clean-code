import { useNavigate } from 'react-router-dom';

import { RoutePath } from '../../entities/route.domain';
import FuckView from '../component/fuckView';

const Header = () => {
  const navigate = useNavigate();

  /**
   * 목록이동 버튼 클릭 이벤트
   */
  const onClickMain = () => {
    navigate(RoutePath.MAIN);
  };

  return (
    <div>
      <FuckView />
      <div>
        <button onClick={onClickMain}>메인 이동</button>
      </div>
    </div>
  );
};

export default Header;
