import React, { useEffect, useState } from 'react';
import L from '@components/GuestBook/List.styles';
import LogoHeader from '@components/Common/LogoHeader';
import { guestBookTempList, IGuestBookList } from '@configs/bigContents';
import { useRouter } from 'next/router';
import ListSection from './ListSection';
const List: React.FC = () => {
  const router = useRouter();
  const [noteId, setNoteId] = useState('');
  const [guestBookList, setGuestBookList] = useState<IGuestBookList[] | null>(null);
  useEffect(() => {
    setGuestBookList(guestBookTempList);
  }, []);
  useEffect(() => {
    const [id] = router.query.param ?? [''];
    setNoteId(id as string);
  }, [router.query]);
  return (
    <>
      <L.GuestBookListWrapper>
        <LogoHeader headerIcons={true} />
        <div>
          <p>
            {guestBookList ? (
              <>
                {noteId ? (
                  <>
                    {noteId === 'myPage' ? '내 ' : ''}쪽지가 <b>{guestBookList.length}개</b> 있어요!
                    <ListSection guestBookList={guestBookList} noteId={noteId} />
                  </>
                ) : (
                  <>
                    우리 학교 방명록이 <b>{guestBookList.length}개</b> 있어요!
                    <ListSection guestBookList={guestBookList} noteId={noteId} />
                  </>
                )}
              </>
            ) : (
              <>
                <br />
                {noteId ? (
                  <>
                    아직 작성된 방명록이 없어요.
                    <br />
                    가장 먼저 방명록에 글을 남겨보세요!
                  </>
                ) : (
                  <>
                    아직 작성된 방명록이 없어요.
                    <br />
                    가장 먼저 우리 학교 방명록에 글을 남겨보세요!
                  </>
                )}
              </>
            )}
          </p>
        </div>
      </L.GuestBookListWrapper>
    </>
  );
};

export default List;
