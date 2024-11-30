import { useMutation } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';

import { useNotifyService } from '~/services/useNotifyService';
import { BoardCreateReqDto } from '~/src/entities/dto';
import { CustomError } from '~/src/entities/error/customError';
import { boardState } from '~/src/entities/recoil/board.recoil';

const BoardCreatePT = () => {
  const [board, setBoard] = useRecoilState(boardState);

  const notifyService = useNotifyService(); // 알림 서비스 DI 주입

  return <div>asdf</div>;
};

export default BoardCreatePT;
