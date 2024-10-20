import { useRecoilValue } from 'recoil';
import { describe, it, expect, vi, Mock } from 'vitest';

import { useBoardRepository } from '~/src/application/repositories/impl/boardRepositoryImpl';
import useBoardCreateService from '~/src/application/services/impl/boardCreateServiceImpl';
import { BoardCreateReqDto } from '~/src/entities/dto/req/boardCreateReqDto';
import { CustomError } from '~/src/entities/error/customError';

vi.mock('~/src/application/repositories/impl/boardRepositoryImpl');
vi.mock('recoil');

describe('보드 생성 테스트', () => {
  const boardCreateReqDto: BoardCreateReqDto = {
    // fill in the required fields for BoardCreateReqDto
    title: 'title',
    content: 'content',
  };

  it('보드 생성 성공', async () => {
    const mockCreateBoard = vi.fn().mockResolvedValue({
      // mock the response of createBoard
      boardId: '1',
      title: 'title',
      content: 'content',
    });

    (useBoardRepository as Mock).mockReturnValue({
      createBoard: mockCreateBoard,
    });

    (useRecoilValue as Mock).mockReturnValue({
      isFilterFuck: false,
    });

    const { createBoard } = useBoardCreateService();
    const result = await createBoard(boardCreateReqDto);

    expect(result).toBeDefined();
    expect(mockCreateBoard).toHaveBeenCalledWith(boardCreateReqDto);
  });

  it('욕설이 포함된 경우 보드 생성 실패', async () => {
    const boardCreateFuckReqDto: BoardCreateReqDto = {
      title: '욕설포함',
      content: '시발',
    };

    (useRecoilValue as Mock).mockReturnValue({
      isFilterFuck: true,
    });

    const { createBoard } = useBoardCreateService();

    await expect(createBoard(boardCreateFuckReqDto)).rejects.toThrow(
      CustomError
    );
  });

  it('보드 생성 실패 시', async () => {
    const mockCreateBoard = vi.fn().mockResolvedValue(null);

    (useBoardRepository as Mock).mockReturnValue({
      createBoard: mockCreateBoard,
    });

    (useRecoilValue as Mock).mockReturnValue({
      isFilterFuck: false,
    });

    const { createBoard } = useBoardCreateService();

    await expect(createBoard(boardCreateReqDto)).rejects.toThrow(
      '등록 중 에러가 발생하였습니다.'
    );
  });
});
