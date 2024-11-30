import { FC, useState } from 'react';

// https://velog.io/@huurray/SOLID-%EC%9B%90%EC%B9%99%EC%97%90-%EA%B8%B0%EC%B4%88%ED%95%9C-React-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1%EB%B2%95
// const WrongComponent = () => {
//   const [inputValue, setInputValue] = useState<string>('');

//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(e.target.value);
//   };

//   const handleSubmit =
//     ({ paramInputValue }: { paramInputValue: string }) =>
//     async () => {
//       const res = await fetch(`http://localhost:1234${paramInputValue}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const data = res.json();
//     };

//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={onChange}></input>
//       <button onClick={handleSubmit({ paramInputValue: inputValue })}></button>
//     </div>
//   );
// };

// 해당 코드의 문제점
// 1. 입력 제어와 비즈니스 로직이 함께 있음
// 2. 입력 컴포넌트때문에 불필요한 랜더링이 많이 발생

///////////////////////////////////////////////////////////
// SOLID 원칙을 적용한 코드
// 1. 단일 책임 원칙 (Single Responsibility Principle)
// 2. 개방 폐쇄 원칙 (Open Close Principle)
// 3. 리스코브 치환 원칙 (Liskov Substitution Principle)
// 4. 인터페이스 분리 원칙 (Interface Segregation Principle)
// 5. 의존성 역전 원칙 (Dependency Inversion Principle)
///////////////////////////////////////////////////////////

const SolidComponent: FC = () => {
  const handleSubmit =
    ({ paramInputValue }: { paramInputValue: string }) =>
    async () => {
      const res = await fetch(`http://localhost:1234${paramInputValue}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = res.json();
    };

  return (
    <div>
      <FormArea handleSubmit={handleSubmit}></FormArea>
    </div>
  );
};

export default SolidComponent;

/**
 * SOLID
 * 단일 책임 원칙 (Single Responsibility Principle)
 * 1. 입력 제어만 하는 컴포넌트
 * @param props
 * @returns
 */
const FormArea: FC<{
  handleSubmit: (param: {
    paramInputValue: string;
  }) => (e: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ handleSubmit }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange}></input>
      <button onClick={handleSubmit({ paramInputValue: inputValue })}>
        Search
      </button>
    </div>
  );
};
