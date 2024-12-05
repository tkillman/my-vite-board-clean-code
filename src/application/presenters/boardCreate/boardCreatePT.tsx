import { useMutation } from '@tanstack/react-query';

import { useNotifyService } from '~/services/useNotifyService';
import { BoardCreateReqDto } from '~/src/entities/dto';
import { createBoardAxiosApi } from '~/src/framework/api/boardAxios.api';
import { axiosErrorDataParser } from '~/src/lib/axiosUtil';
import BoardCreateUI from '~/src/ui/views/boardCreate/boardCreateUI';

const BoardCreatePT = () => {
  const notifyService = useNotifyService(); // 알림 서비스 DI 주입

  const { mutate } = useMutation({
    mutationFn: createBoardAxiosApi,
  });

  const handleSave = (param: BoardCreateReqDto) => {
    mutate(param, {
      onSuccess: (response) => {
        notifyService.notify('게시글이 저장되었습니다.');
      },
      onError: (error) => {
        const errorData = axiosErrorDataParser(error);
        let message = '게시글 저장에 실패했습니다.';

        if (errorData) {
          message += `[${errorData.errorCode}] ${errorData.errorMessage}`;
        }

        notifyService.notify(message);
      },
    });
  };

  return <BoardCreateUI handleSave={handleSave} />;
};

export default BoardCreatePT;
