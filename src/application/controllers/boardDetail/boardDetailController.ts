import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from '@tanstack/react-query';
import { produce } from 'immer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Board, BOARD_ID, defaultBoard } from '../../../entities/board.domain';
import { BoardUpdateReqDto } from '../../../entities/dto/req/boardUpdateReqDto';
import { RoutePath } from '../../../entities/route.domain';
import useBoardDetailService from '../../services/impl/boardDetailServiceImpl';
import useNotifyService from '../../services/impl/notifyServiceImpl';
import { NotifyService } from '../../services/notifyService.types';

import { CustomError } from '~/src/entities/error/customError';
import { queryKeys } from '~/src/framework/api/boardAxios.api';

/**
 * 게시판 상세 컨트롤러
 */
export type BoardDetailController = (
  req: BoardDetailControllerReq
) => BoardDetailControllerRes;

/**
 * 게시판 상세 컨트롤러 요청타입
 */
interface BoardDetailControllerReq {
  /**
   * 게시판 ID
   */
  boardId: BOARD_ID;
}

/**
 * 게시판 상세 컨트롤러 리턴타입
 */
interface BoardDetailControllerRes {
  /**
   * 게시판 ID
   */
  boardId: BOARD_ID;

  /**
   * 게시판 정보
   */
  board: Board;

  /**
   * 게시판 상세 조회 쿼리 결과
   */
  boardDetailQueryResult: UseQueryResult<Board, Error>;

  /**
   * 게시판 수정 Mutation
   */
  updateBoardMutation: UseMutationResult<
    Board,
    Error,
    BoardUpdateReqDto,
    unknown
  >;

  /**
   * 수정 가능 여부
   */
  isEditable: boolean;

  /**
   * 수정 가능 여부 설정
   */
  setIsEditable: React.Dispatch<React.SetStateAction<boolean>>;

  /**
   * 수정 클릭 이벤트
   * @returns {void}
   */
  onClickUpdate: (e: React.MouseEvent<HTMLElement>) => void;

  /**
   * 제목 변경 이벤트
   * @param {React.ChangeEvent<HTMLInputElement>} e - 이벤트 객체
   * @returns {void}
   */
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * 내용 변경 이벤트
   * @param {React.ChangeEvent<HTMLInputElement>} e - 이벤트 객체
   * @returns {void}
   */
  onChangeContent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useBoardDetailController: BoardDetailController = (req) => {
  const boardDetailService = useBoardDetailService(); // 게시판 상세 서비스 DI 주입
  const notifyService: NotifyService = useNotifyService(); // 알림 서비스 DI 주입
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [board, setBoard] = useState<Board>(defaultBoard);

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  useEffect(() => {
    if (!req.boardId) {
      notifyService.notify('게시판 ID가 없습니다.');
      navigate(RoutePath.MAIN);
    }
  }, [req.boardId, navigate, notifyService]);

  const boardDetailQueryResult = useQuery({
    queryKey: queryKeys.board.detail(req.boardId).queryKey,
    queryFn: async () => await boardDetailService.detail(req.boardId),
    enabled: !!req.boardId,
  });

  useEffect(() => {
    if (boardDetailQueryResult.data) {
      setBoard(boardDetailQueryResult.data);
    }
  }, [boardDetailQueryResult.data]);

  const updateBoardMutation = useMutation({
    mutationFn: (boardUpdateReqDto: BoardUpdateReqDto) =>
      boardDetailService.update(boardUpdateReqDto),
    onSuccess: (data) => {
      console.log('🚀 ~ data:', data);
      notifyService.notify('수정 성공');
      queryClient.removeQueries({
        queryKey: queryKeys.board.detail(req.boardId).queryKey,
      });
    },
    onError: (error: Error) => {
      if (error instanceof CustomError) {
        notifyService.notify(error.message);
      } else {
        console.error(error);
        notifyService.notify('알수없는 에러가 발생하였습니다.');
      }
    },
  });

  const handleUpdate = async () => {
    if (!board) {
      notifyService.notify('게시판 정보가 없습니다.');
      return;
    }

    updateBoardMutation.mutate({
      boardId: req.boardId,
      title: board.title,
      content: board.content,
    });
  };

  const onClickUpdate = () => {
    setIsEditable((prev) => {
      if (!prev && boardDetailQueryResult.data) {
        setBoard(boardDetailQueryResult.data);
      }

      if (prev) {
        handleUpdate();
      }
      return !prev;
    });
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoard((prev) =>
      produce(prev, (draft) => {
        draft.title = e.target.value;
        return draft;
      })
    );
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoard((prev) =>
      produce(prev, (draft) => {
        draft.content = e.target.value;
        return draft;
      })
    );
  };

  return {
    boardId: req.boardId,
    board,
    boardDetailQueryResult,
    updateBoardMutation,
    isEditable,
    setIsEditable,
    onClickUpdate,
    onChangeTitle,
    onChangeContent,
  };
};
