type TStickerType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export interface IGuestBookList {
  id: string;
  sticker: TStickerType;
  date?: string;
  text: string;
}

export const blurDataURL =
  'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==';

export const guestBookTempList: IGuestBookList[] = [
  {
    id: '0',
    sticker: '9',
    date: '20220101',
    text: '안녕 누구야! 잘 지내지? 나 누구야~ 기억하니! 여기서 보니 너무 반갑다! 너무 너무 반가워 우리 그때 재밌었잖아',
  },
  {
    id: '1',
    sticker: '5',
    date: '20220111',
    text: '잘 지내지? 나 누구야~ 기억하니! 여기서 보니 너무 반갑다! 너무 너무 반가워 우리 그때 재밌었잖아 안녕 누구야',
  },
  { id: '2', sticker: '1', date: '20220222', text: '잘 지내지? 나 누구야~ 잘있니? 난 잘있단다' },
  {
    id: '3',
    sticker: '2',
    date: '20220303',
    text: '안녕 누구야! 잘 지내지? 나 누구야~ 기억하니! 여기서 보니 너무 반갑다! 너무 너무 반가워 우리 그때 재밌었잖아',
  },
  {
    id: '4',
    sticker: '3',
    date: '20220404',
    text: '잘 지내지? 나 누구야~ 기억하니! 여기서 보니 너무 반갑다! 너무 너무 반가워 우리 그때 재밌었잖아 안녕 누구야',
  },
  { id: '5', sticker: '4', date: '20220505', text: '잘 지내지? 나 누구야~ 잘있니? 난 잘있단다' },
  {
    id: '6',
    sticker: '6',
    date: '20220606',
    text: '안녕 누구야! 잘 지내지? 나 누구야~ 기억하니! 여기서 보니 너무 반갑다! 너무 너무 반가워 우리 그때 재밌었잖아',
  },
];
