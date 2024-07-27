export type BOARD_ID = string;

export type Board = {
  boardId: BOARD_ID; // 게시판 primary key
  title: string; // 제목
  content: string; // 내용
};

export const defaultBoard: Board = {
  boardId: '',
  title: '',
  content: '',
};
